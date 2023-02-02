import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { link } from '../../models';
import { board, column } from '../../models';

const baseURL = process.env.REACT_APP_BASE_URL;

export type props = {
  board?: board | [] | any;
  categories: link[];
  status: 'idle' | 'pending' | 'fullfiled';
  message: string | null;
};

const initialState: props = {
  board: [],
  categories: [],
  status: 'idle',
  message: null,
};

export const boardSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    displayError: (state, action) => {
      return {
        ...state,
        message: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoards.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchBoards.fulfilled, (state, action: any) => {
        if (action.payload.msg) {
          return {
            ...state,
            message: action.payload.msg,
            status: 'idle',
          };
        } else {
          return {
            ...state,
            board: action.payload,
            status: 'idle',
          };
        }
      })
      .addCase(addBoard.pending, (state) => {
        state.status = 'pending';
        state.message = null;
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        return {
          ...state,
          categories: [...state.categories, { path: action.payload.id, text: action.payload.name }],
          status: 'idle',
          message: action.payload.msg,
        };
      })
      .addCase(deleteBoard.pending, (state) => {
        return {
          ...state,
          message: null,
          status: 'pending',
        };
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        return {
          ...state,
          status: 'idle',
          message: action.payload?.msg || action.payload?.err,
          categories: state.categories.filter((item) => item.path !== action.payload.id),
          board: [],
        };
      })
      .addCase(editBoard.pending, (state) => {
        return {
          ...state,
          status: 'pending',
          message: null,
        };
      })
      .addCase(editBoard.fulfilled, (state, action) => {
        return {
          ...state,
          status: 'idle',
          message: action.payload.msg,
          board: {
            ...state.board,
            name: action.payload.object.name,
            columns: action.payload.object.columns,
          },
        };
      })
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        const cat = action.payload.map((category: any) => {
          return {
            path: category._id,
            text: category.name,
          };
        });
        state.categories = cat;
        state.status = 'idle';
      })
      .addCase(addTask.pending, (state) => {
        return {
          ...state,
          status: 'pending',
          message: null,
        };
      })
      .addCase(addTask.fulfilled, (state, action) => {
        return {
          ...state,
          status: 'idle',
          message: action.payload?.data.msg,
          board: {
            ...state.board,
            columns: state.board.columns.map((column: column) => {
              if (column.name.toLowerCase() === action.payload?.data.status.toLowerCase()) {
                return {
                  ...column,
                  tasks: [...column.tasks, action.payload?.data.data],
                };
              }
              return column;
            }),
          },
        };
      })
      .addCase(deleteTask.pending, (state) => {
        return {
          ...state,
          status: 'pending',
          message: null,
        };
      })
      .addCase(deleteTask.fulfilled, (state, action: any) => {
        const { msg, err, object } = action.payload;
        if (msg && object) {
          return {
            ...state,
            message: msg,
            board: {
              ...state.board,
              columns: state.board.columns.map((column: column) => {
                return {
                  ...column,
                  tasks:
                    column.name.toLowerCase() === object.column.toLowerCase()
                      ? column.tasks.filter((task: any) => task.name !== object.taskId)
                      : column.tasks,
                };
              }),
            },
          };
        } else {
          return {
            ...state,
            message: err,
            status: 'idle',
          };
        }
      })
      .addCase(updateSubtaskStatus.pending, (state) => {
        return {
          ...state,
          message: null,
          status: 'pending',
        };
      })
      .addCase(updateSubtaskStatus.fulfilled, (state, action) => {
        const { msg, err, object } = action.payload;
        if (msg && object) {
          return {
            ...state,
            message: msg,
            board: {
              ...state.board,
              columns: state.board.columns.map((column: column) => {
                return {
                  ...column,
                  tasks:
                    column.name.toLowerCase() === object.column.toLowerCase()
                      ? column.tasks.map((task: any) => {
                          return {
                            ...task,
                            subtasks:
                              task.name.toLowerCase() === object.task.toLowerCase()
                                ? task.subtasks.map((subtask: any) => {
                                    return {
                                      ...subtask,
                                      isCompleted:
                                        subtask.id === object.subtask
                                          ? object.status
                                          : subtask.isCompleted,
                                    };
                                  })
                                : task.subtasks,
                          };
                        })
                      : column.tasks,
                };
              }),
            },
          };
        } else {
          return {
            ...state,
            status: 'idle',
            message: err,
          };
        }
      })
      .addCase(changeTaskStatus.pending, (state) => {
        return {
          ...state,
          status: 'pending',
          message: null,
        };
      })
      .addCase(changeTaskStatus.fulfilled, (state, action) => {
        const { err, msg, object } = action.payload;
        if (msg && object) {
          return {
            ...state,
            message: msg,
            status: 'idle',
            board: {
              ...state.board,
              columns: [
                ...state.board.columns.map((col: any) => {
                  if (
                    col.name.toLowerCase() === object.column.toLowerCase() &&
                    col.name.toLowerCase() !== object.status.toLowerCase()
                  ) {
                    return {
                      ...col,
                      tasks: col.tasks.filter(
                        (tas: any) => tas.name.toLowerCase() !== object.task.toLowerCase(),
                      ),
                    };
                  }
                  if (
                    col.name.toLowerCase() === object.status.toLowerCase() &&
                    col.name.toLowerCase() !== object.column.toLowerCase()
                  ) {
                    return {
                      ...col,
                      tasks: [...col.tasks, object.taskToPush],
                    };
                  } else {
                    return col;
                  }
                }),
              ],
            },
          };
        } else {
          return {
            ...state,
            status: 'idle',
            err: err,
          };
        }
      });
  },
});

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { getState }) => {
    const state: any = getState();
    try {
      const response = await fetch(`${baseURL}v1/boards/categories`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log('Oops. Something might be wrong with the server');
    }
  },
);

//completed//

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (url: any, { getState }) => {
    const state: any = getState();
    try {
      const response = await fetch(`${baseURL}v1/boards/delete/${url}`, {
        method: 'delete',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log('Oops. Something might be wrong with the server');
    }
  },
);

export const editBoard = createAsyncThunk('boards/editBoard', async (object: any, { getState }) => {
  const state: any = getState();
  try {
    const response = await fetch(`${baseURL}v1/boards/board/update`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${state.user.token}`,
      },
      body: JSON.stringify(object),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Oops something went wrong. Please try again later');
  }
});

export const updateSubtaskStatus = createAsyncThunk(
  'subtasks/updateStatus',
  async (object: any, { getState }) => {
    const state: any = getState();
    try {
      const response = await fetch(`${baseURL}v1/boards/subtasks/changeStatus`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
        body: JSON.stringify(object),
      });
      const data = response.json();
      return data;
    } catch (err) {
      console.log('Oops. Something might be wrong with the server');
    }
  },
);

export const fetchBoards = createAsyncThunk(
  'boards/fetchBoards',
  async (url: string | undefined, { getState }) => {
    const state: any = getState();
    if (url !== 'empty') {
      try {
        const response = await fetch(`${baseURL}v1/boards/get/${url}`, {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${state.user.token}`,
          },
        });
        const data: board = await response.json();
        return data;
      } catch (err) {
        console.log('Oops boards are not fetching');
      }
    } else {
      return { msg: 'create new board' };
    }
  },
);

export const addBoard = createAsyncThunk('boards/addBoard', async (schema: any, { getState }) => {
  const state: any = getState();
  try {
    const response = await fetch(`${baseURL}v1/boards/board/add`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${state.user.token}`,
      },
      body: JSON.stringify(schema),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Ooops. Something might be wrong with server');
  }
});

export const addTask = createAsyncThunk('boards/addTask', async (schema: any, { getState }) => {
  const { page, object } = schema;
  const state: any = getState();
  try {
    const response = await fetch(`${baseURL}v1/boards/task/add`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${state.user.token}`,
      },
      body: JSON.stringify({ page, object }),
    });
    const data = await response.json();
    return { data };
  } catch (err) {
    console.log('Ooops. Something might be wrong with server');
  }
});

export const deleteTask = createAsyncThunk(
  'boards/deleteTask',
  async (object: any, { getState }) => {
    const { taskId, page, column } = object;
    const state: any = getState();
    try {
      const response = await fetch(`${baseURL}v1/boards/tasks/delete/${taskId}`, {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
        body: JSON.stringify({ board: page, column: column }),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log('Ooops. Something might be wrong with server');
    }
  },
);

export const changeTaskStatus = createAsyncThunk(
  'boards/changeTaskStatus',
  async (object: any, { getState }) => {
    const state: any = getState();
    try {
      const response = await fetch(`${baseURL}v1/boards/tasks/changeStatus`, {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
        body: JSON.stringify({ object }),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log('Ooops. Something might be wrong with server');
    }
  },
);

export const { displayError } = boardSlice.actions;

export default boardSlice.reducer;
