import * as yup from 'yup';

export const loginValidation = yup.object({
  username: yup.string().required("Can't be empty"),
  password: yup.string().min(8, 'Too short').required("Can't be empty"),
});

export const registerValidation = yup.object({
  username: yup.string().required("Can't be empty"),
  password: yup.string().min(8, 'Too short').required("Can't be empty"),
  repeat: yup
    .string()
    .when('password', (password, schema) => {
      if (password) return schema.required("Can't be empty");
    })
    .oneOf([yup.ref('password')], 'Not match'),
});
