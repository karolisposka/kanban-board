import * as yup from 'yup';


export const loginValidation = yup.object({
    username: yup.string().required("Can't be empty"),
    password: yup.string().min(8, "Too short").required("Can't be empty"),
})