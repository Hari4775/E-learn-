import * as Yup from "yup";

export const signupSchema = Yup.object({
   name: Yup.string()
      .required("Name field is required"),
   email: Yup.string()
      .required("Email field is required")
      .matches(
         /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
         "Please provide a valid email."
      ),
   password: Yup.string()
      .required('Password field is required')
      .min(8, 'Password is too short - should be 8 chars minimum.'),
   confirm_password: Yup.string()
      .required('Confirm password field is required')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
});

export const loginSchema = Yup.object({
   email: Yup.string().required('Email field is required'),
   password: Yup.string().required('Password field is required')
});

export const mobileValidationSchema = Yup.object({
   phone : Yup.string()
   .required('Mobile number required')
   .matches(
      // /-^\d{6}$/,
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
      'Mobile number must be 10 digits'
   ),
}) 

export const otpValidationSchema = Yup.object({
   otp: Yup.string()
     .length(5, "OTP must be exactly 5 characters")
     .matches(/^\d+$/, "OTP must only contain digits")
     .required("OTP is required"),
 });

export const emailValidationSchema = Yup.object({
   email:Yup.string()
   .required('Email ID  required')
   .matches(
   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
   )
})


export const resetPasswordSchema= Yup.object({
   password: Yup.string().required('No password provided.')
     .min(8, 'Password is too short - should be 8 chars minimum.'),
   confirm_password: Yup.string().required('No password provided.')
     .min(8, 'Password is too short - should be 8 chars minimum.'),
 }).required();

 export const formatEmail = (email: string): string => {
   const [start, end] = email.split('@');
   const visibleStart = start.slice(0, 3); // Display the first two characters
   const visibleEnd = end.slice(-3); // Display the last four characters
   return `${visibleStart}***@***${visibleEnd}`;
 };