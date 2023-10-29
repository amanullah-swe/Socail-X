import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
    firstName: Yup.string().min(2).max(20).required("please enter a First Name"),
    lastName: Yup.string().min(2).max(20).required("please enter a last Name"),
    email: Yup.string().email().required("please enter a email"),
    password: Yup.string().min(8).max(10).required("please enter a password"),
    occupation: Yup.string().min(2).max(20).required("please enter a occupation"),
    location: Yup.string().min(2).max(20).required("please enter a location"),
    picture: Yup.mixed()
        .required('Image is required')
        .test(
            'fileType',
            'Only image files are allowed',
            (value) => value && value.type.startsWith('image/')
        )
        .test(
            'fileSize',
            'Image size is too large. Maximum allowed size is 2MB',
            (value) => value && value.size <= 2 * 1024 * 1024 // 2MB in bytes
        ),
});

export const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("please enter a email"),
    password: Yup.string().min(8).max(10).required("please enter a password"),
})
