// import React from 'react';
// import { useForm } from '../hooks/useForm';
// import { useSignup } from '../hooks/useSignup';
// import { useSignin } from '../hooks/useSignin';
// import Input from './Input';
// import FormLayout from './FormLayout';
// import SigninForm from './SigninForm';
// import SignupForm from './SignupForm';

// function AuthForm() {
//   const [username, handleUsername] = useForm();
//   const [email, handleEmail] = useForm();
//   const [password, handlePassword] = useForm();

//   // POST PUT DELETE
//   const { isError, handleSignup, error } = useSignup({ email, password, username });
//   const { handleSignin } = useSignin({ email, password });

//   const validateEmail = (userEmail: string) => {
//     const emailRegex =
//       /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
//     return emailRegex.test(userEmail);
//   };

//   return <FormLayout>{조건 ? <SigninForm /> : <SignupForm />}</FormLayout>;
// }

// export default AuthForm;

export const a = '임시';
