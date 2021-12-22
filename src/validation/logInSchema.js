import * as yup from 'yup';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Username is required')
    .min(3, 'Username has to be three characters!'),
    password: yup.string().required('Password is required'),
    passwordConfirmation: yup
    .string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    email: yup.string()
    .email('Valid email address')
    .required('You forgot to enter an email address'),
    mobile: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
});

export default validationSchema;