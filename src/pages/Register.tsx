import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { registerValidation } from '../utils/validationSchemas';
import { userRegister } from '../store/slices/users';
import MainContainer from '../components/mainContainer/MainContainer';
import Form from '../components/form/Form';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import Heading from '../components/heading/Heading';
import Link from '../components/link/Link';

type formValues = {
  username: string;
  password: string;
  repeat: string;
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

const HeadingStyle: React.CSSProperties = {
  justifySelf: 'left',
};

const Register = () => {
  const status = useAppSelector((state) => state.user.status);
  console.log(status);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initialValues: formValues = {
    username: '',
    password: '',
    repeat: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: registerValidation,
    onSubmit: () => {
      dispatch(userRegister(formik.values));
      if (status === 'idle') {
        formik.resetForm();
      } else {
        return;
      }
    },
  });
  return (
    <MainContainer size="full">
      <Form handleSubmit={formik.handleSubmit} style={formStyles}>
        <Heading style={HeadingStyle}>Register</Heading>
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
        <Input
          type="password"
          name="repeat"
          placeholder="confirm password"
          value={formik.values.repeat}
          handleChange={formik.handleChange}
          error={formik.touched.repeat && formik.errors.repeat ? formik.errors.repeat : undefined}
          handleBlur={formik.handleBlur}
        />
        <Button
          type="submit"
          primary={true}
          styles={{ width: '100%' }}
          text="Login"
          disabled={false}
        />
        <Link to="/login" icon={false}>
          click to sign in
        </Link>
      </Form>
    </MainContainer>
  );
};

export default Register;
