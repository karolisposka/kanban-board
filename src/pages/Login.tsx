import React, {useContext, useState} from 'react';
import { TokenContext } from '../context';
import MainContainer from '../components/mainContainer/MainContainer';
import Form from '../components/form/Form';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import Heading from '../components/heading/Heading';
import Link from '../components/link/Link';
import {useFormik} from 'formik';
import {loginValidation} from '../utils/validationSchemas';
import {useNavigate} from 'react-router-dom';


type formValues = {
    username: string,
    password: string
};

const formStyles: React.CSSProperties = { 
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    minWidth:'300px',
    maxWidth:'600px',
    padding:'2rem',
    borderRadius:'0.5rem',
    border: '1px solid rgba(255,255,255,0.4)'
};

const Login = () => {
    const [token, setToken] = useContext(TokenContext);
    const [error, setError] = useState();
    console.log(error);
    const navigate = useNavigate();
    const initialValues:formValues = {
        username: '',
        password: ''
    }
    const formik = useFormik({
      initialValues: initialValues,
      validationSchema: loginValidation,
      onSubmit: async () => {
        try{
          const request =  await fetch('http://localhost:8080/v1/users/login', {
            method:'post',
            headers:{
              'Content-type':'application/json',
            },
            body: JSON.stringify(formik.values),
          })
          const response = await request.json();
          if(response.token){
            setToken(response.token);
            localStorage.setItem('token', JSON.stringify(response.token));
            return navigate('/');
          } else {
            return setError(response.err);
          }
        }catch(err){
          return setError(err);

        }
      }
    })

  return (
    <MainContainer size='full'>
        <Form handleSubmit={formik.handleSubmit} style={formStyles}>
            <Heading>Login</Heading>
            <Input 
                type='text'
                name='username' 
                placeholder='e.g Jumbotron' 
                value={formik.values.username} 
                handleChange={formik.handleChange}
                error={formik.touched.username && formik.errors.username ? formik.errors.username : undefined}
                handleBlur={formik.handleBlur} 
            />
            <Input 
                type='password' 
                name='password' 
                placeholder='******' 
                value={formik.values.password} 
                handleChange={formik.handleChange}
                error={formik.touched.password && formik.errors.password ? formik.errors.password : undefined}
                handleBlur={formik.handleBlur} 
            />
            <Button type="submit" primary={true} text='Login' disabled={false}/>
            <Link to='/register' icon={false}>click to sign up</Link>
        </Form>
    </MainContainer>
  )
}

export default Login