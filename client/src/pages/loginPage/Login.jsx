import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { loginSchema } from "schemas";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Label1, Wrapper, Container, Form, Input, Label, Button, Link } from './Styled';
import { setLogin } from "fearures/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async () => {
      try {
        const response = await axios.post('http://localhost:3001/auth/login', values);
        dispatch(setLogin({ user: response.data.user, token: response.data.token }));
        navigate('/home');
      } catch (error) {
        console.log(error);
      }



    }
  })
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Wrapper>
          <Input name="email" onChange={handleChange} onBlur={handleBlur} />
          {values.email ? <Label1>Email</Label1> : <Label>Email</Label>}
          <ErrorMessage>{errors.email && touched.email ? errors.email : null}</ErrorMessage>
        </Wrapper>
        <Wrapper>
          <Input name="password" onChange={handleChange} onBlur={handleBlur} />
          {values.password ? <Label1>Password</Label1> : <Label>Password</Label>}
          <ErrorMessage>{errors.password && touched.password ? errors.password : null}</ErrorMessage>
        </Wrapper>
        <Wrapper>
          <Button type='submit'>Login</Button>
        </Wrapper>
        <Wrapper>
          <Link href="/register">
            new accout register
          </Link>
        </Wrapper>
      </Form>
    </Container>
  );
};

export default Login;
