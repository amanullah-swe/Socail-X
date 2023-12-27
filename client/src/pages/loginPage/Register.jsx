import { useFormik } from "formik";
import { registerSchema } from "schemas";
import axios from "axios";
import { ErrorMessage, WrapperContainer, LabelForfile, Link, Button, Label, Label1, Form, Container, Wrapper, Input } from "./Styled";
import { useNavigate } from "react-router-dom";
import { baseApiUrl } from "store/constant";

function Register() {
    const navigate = useNavigate();
    navigate('/about', { replace: true });
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        occupation: '',
        location: '',
        picture: null,
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: registerSchema,
        onSubmit: async (values, action) => {
            try {
                const formData = new FormData();
                formData.append("firstName", values.firstName);
                formData.append("lastName", values.lastName);
                formData.append("email", values.email);
                formData.append("password", values.password);
                formData.append("occupation", values.occupation);
                formData.append("location", values.location);
                formData.append("picture", values.picture);
                const response = await axios.post(baseApiUrl + "/auth/register", formData);
                action.resetForm();
                navigate('/', { replace: true })

            } catch (error) {
                console.log(error);
            }

        },


    })
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <WrapperContainer>
                    <Wrapper>
                        <Input
                            onChange={handleChange}
                            autoComplete="of "
                            onBlur={handleBlur}
                            name='firstName'
                            value={values.firstName} />

                        {values.firstName ? <Label1>First Name</Label1> : <Label>First Name</Label>}
                        <ErrorMessage>
                            {errors.firstName && touched.firstName ? errors.firstName : null}
                        </ErrorMessage>
                    </Wrapper>
                    <Wrapper>
                        <Input
                            onChange={handleChange}
                            autoComplete="of "
                            onBlur={handleBlur}
                            name="lastName"
                            value={values.lastName} />

                        {values.lastName ? <Label1>Last Name</Label1> : <Label>Last Name</Label>}
                        <ErrorMessage>
                            {errors.lastName && touched.lastName ? errors.lastName : null}
                        </ErrorMessage>
                    </Wrapper>
                </WrapperContainer>
                <Wrapper>
                    <Input
                        onChange={handleChange}
                        autoComplete="of "
                        onBlur={handleBlur}
                        name="occupation"
                        value={values.occupation} />

                    {values.occupation ? <Label1>Occupation</Label1> : <Label>Occupation</Label>}
                    <ErrorMessage>
                        {errors.occupation && touched.occupation ? errors.occupation : null}
                    </ErrorMessage>
                </Wrapper>
                <Wrapper>
                    <Input
                        onChange={handleChange}
                        autoComplete="of "
                        onBlur={handleBlur}
                        name="location"
                        value={values.location} />


                    {values.location ? <Label1>Location</Label1> : <Label>Location</Label>}
                    <ErrorMessage>{errors.location && touched.location ? errors.location : null}</ErrorMessage>
                </Wrapper>
                <Wrapper>
                    <input
                        onChange={(event) => { setFieldValue("picture", event.target.files[0]) }}
                        type="file"
                        id="profile"
                        hidden
                        name="picture" />
                    {values.picture ?
                        <LabelForfile htmlFor="profile">{values.picture.name}</LabelForfile>
                        : <LabelForfile htmlFor="profile">{'Upload Image'}</LabelForfile>}

                    <ErrorMessage>{errors.picture && touched.picture ? errors.picture : null}</ErrorMessage>
                </Wrapper>
                <Wrapper>
                    <Input
                        onChange={handleChange}
                        autoComplete="of "
                        onBlur={handleBlur}
                        name="email"
                        value={values.email} />

                    {values.email ? <Label1>Email</Label1> : <Label>Email</Label>}
                    <ErrorMessage>{errors.email && touched.email ? errors.email : null}</ErrorMessage>
                </Wrapper>
                <Wrapper>
                    <Input
                        onChange={handleChange}
                        autoComplete="of "
                        onBlur={handleBlur}
                        name="password"
                        value={values.password} />

                    {values.password ? <Label1>Password</Label1> : <Label>Password</Label>}
                    <ErrorMessage>{errors.password && touched.password ? errors.password : null}</ErrorMessage>
                </Wrapper>
                <Wrapper>
                    <Button type='submit'>Register</Button>
                </Wrapper>
                <Wrapper>
                    <Link href="/">
                        I have an account
                    </Link>
                </Wrapper>
            </Form>
        </Container>
    )

};

export default Register;

