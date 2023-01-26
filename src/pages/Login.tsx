import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import MainContainer from '../components/mainContainer/MainContainer';
import Form from '../components/form/Form';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import Heading from '../components/heading/Heading';
import Link from '../components/link/Link';
import { loginValidation } from '../utils/validationSchemas';
import { userLogin } from '../store/slices/users';
import { useAppDispatch, useAppSelector } from '../hooks';

type formValues = {
  username: string;
  password: string;
};

const formStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '300px',
  maxWidth: '600px',
  padding: '2rem',
  borderRadius: '0.5rem',
  border: '1px solid rgba(255,255,255,0.4)',
};

const Login = () => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  });

  const initialValues: formValues = {
    username: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginValidation,
    onSubmit: async () => {
      await dispatch(userLogin(formik.values));
      if (location.state?.from) {
        navigate(location.state.from);
      }
    },
  });

  return (
    <>
      <MainContainer size="full">
        <Form handleSubmit={formik.handleSubmit} style={formStyles}>
          <Heading>Login</Heading>
          <Input
            type="text"
            name="username"
            placeholder="e.g Jumbotron"
            value={formik.values.username}
            handleChange={formik.handleChange}
            error={
              formik.touched.username && formik.errors.username ? formik.errors.username : undefined
            }
            handleBlur={formik.handleBlur}
          />
          <Input
            type="password"
            name="password"
            placeholder="******"
            value={formik.values.password}
            handleChange={formik.handleChange}
            error={
              formik.touched.password && formik.errors.password ? formik.errors.password : undefined
            }
            handleBlur={formik.handleBlur}
          />
          <Button
            type="submit"
            primary={true}
            styles={{ width: '100%', padding: '0.75rem', borderRadius: '0.25rem' }}
            text="Login"
            disabled={false}
          />
          <Link to="/register" icon={false}>
            click to sign up
          </Link>
        </Form>
      </MainContainer>
    </>
  );
};

export default Login;
