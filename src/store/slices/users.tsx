import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = process.env.REACT_APP_BASE_URL;

type props = {
  token: string | null;
  status: 'idle' | 'pending' | 'fullfiled';
  message: any;
  theme: 'dark' | 'light';
};

type loginSchema = {
  username: string;
  password: string;
};

type registerSchema = {
  username: string;
  password: string;
};

const initialState: props = {
  token: null,
  status: 'idle',
  message: null,
  theme: 'dark',
};

export const userRegister = createAsyncThunk(
  'users/userRegister',
  async (registerSchema: registerSchema) => {
    try {
      const response = await fetch(`${baseURL}v1/users/register`, {
        headers: {
          'Content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(registerSchema),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log('Ooops something went wrong');
    }
  },
);

export const userLogin = createAsyncThunk('users/userLogin', async (loginSchema: loginSchema) => {
  try {
    const response = await fetch(`${baseURL}v1/users/login`, {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(loginSchema),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Ooops something went wrong');
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: (state: any) => {
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
        message: { msg: 'theme changed' },
      };
    },
    logout: (state: any) => {
      return {
        ...state,
        token: null,
        message: null,
      };
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(userLogin.pending, (state: any) => {
        state.status = 'pending';
      })
      .addCase(userLogin.fulfilled, (state: any, action: any) => {
        state.status = 'idle';
        if (action.payload.token) {
          state.token = action.payload.token;
          state.message = action.payload.msg;
        } else {
          state.message = action.payload;
        }
      })
      .addCase(userLogin.rejected, (state: any, action: any) => {
        state.message = action.payload;
        state.status = 'idle';
      })
      .addCase(userRegister.pending, (state: any) => {
        return {
          ...state,
          status: 'pending',
        };
      })
      .addCase(userRegister.fulfilled, (state: any, action: any) => {
        return {
          ...state,
          status: 'idle',
          message: action.payload,
        };
      })
      .addCase(userRegister.rejected, (state: any, action: any) => {
        return {
          ...state,
          message: action.payload,
          status: 'idle',
        };
      });
  },
});

export const { toggleTheme, logout } = userSlice.actions;

export default userSlice.reducer;
