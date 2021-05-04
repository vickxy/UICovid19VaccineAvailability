
import * as Yup from "yup";
import { lettersWithSpaces, numeric } from "../../constants/common";

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .matches(lettersWithSpaces, "Name should not contain special character")
    .required("Please enter a valid Name")
    .min(3, "First name is too short (minimum is 3 characters)"),
  age: Yup.object().required("Please select valid age group"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  mode: Yup.number().required("Mode is mandatory"),
  // pincode:Yup.string().when('mode', {
  //   is: '1',
  //   then: Yup.string()
  //   .required("Pincode is required")
  //   .matches(numeric, "Pincode should be Numeric")
  //   .max(6, "Pincode length should be 6")
  //   .min(6, "Pincode length should be 6"),
  //   // otherwise: Yup.string().notRequired(),
  // }),
  // pincode: Yup.string()
  // .matches(numeric, "Pincode should be Numeric")
  // .required("Pincode is required")
  // .max(6, "Pincode length should be 6")
  //   .min(6, "Pincode length should be 6"),
  // state:Yup.object().when('mode', {
  //   is: '2',
  //   then: Yup.object().required('State is mandatory'),
  //   otherwise: Yup.object().notRequired(),
  // }), 
  // district:Yup.object().when('mode', {
  //   is: '2',
  //   then: Yup.object().required('District is mandatory'),
  //   otherwise: Yup.object().notRequired(),
  // })
});
