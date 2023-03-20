import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";

import { FcGoogle } from "react-icons/fc";
// import { Button, TextField, Typography } from "@mui/material";
import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";
import LoginHeader from "common/LoginHeader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import toDoorLogo from "images/Ellipse 30.png";
import background from "images/background.png";
import snake from "images/Mask group.png";

// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import trustedBy2 from "images/Rectangle 7.png";
import trustedBy3 from "images/Rectangle 106.png";
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import {
  Button,
  Input,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event);
  };

  // console.log(localStorage.getItem('authUser'))
  const history = useNavigate();

  const redirect = () => {
    // localStorage.setItem('authUser', 'true')

    history("/");
  };

  const toSignIn = () => {
    // localStorage.setItem('authUser', 'true')

    history("/");
  };

  // console.log(localStorage.getItem('authUser'))

  // const authUser = useAuthUser();

  const { enqueueSnackbar } = useSnackbar();
  const [signupMuation, signupMutationResult] = UserApi.useSignupMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      phoneNo: "",
      password: "",
      userType: "company",
      fname: "",
    },

    validationSchema: yup.object({
      email: yup.string().trim().required(),
      password: yup.string().trim().required(),
    }),
    onSubmit: async (values) => {
      console.log(values);
      localStorage.setItem("il", true);
      // redirect();
      // history('/dashboard')

      try {
        const data = await signupMuation({ data: values }).unwrap();
        // TODO extra login
        console.log(data.data);
        enqueueSnackbar("Sign Up in successful", { variant: "success" });
        redirect();
      } catch (error) {
        enqueueSnackbar(error?.data?.message, "Failed to login", {
          variant: "error",
        });
      }
    },
  });

  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }

  return (
    // <div>
    //  {/* <Typography variant="h6">Hi</Typography> */}
    //   <form onSubmit={formik.handleSubmit}>
    //     <TextField
    //       label="email"
    //       {...getTextFieldFormikProps(formik, "email")}
    //     />
    //     <PasswordTextField
    //       label="Password"
    //       {...getTextFieldFormikProps(formik, "password")}
    //     />
    //     <Button type="submit">Submit</Button>
    //   </form>
    // </div>
    <div className="z  pl-24">
      <div className="flex justify-between ">
        <div
          className="pt-4"
          style={{
            paddingLeft: "",
            paddingRight: "",
            minWidth: "40%",
            // maxWidth: "75%",
          }}
        >
          <LoginHeader />
          <div className="flex-vertical">
            <div className="my-8">
              <Typography variant="h3" className="mb-2 mt-3 font-bold">
                Sign Up
              </Typography>
              {/* <p>Enter your credentials to create your account.</p> */}
            </div>

            <form onSubmit={formik.handleSubmit}>
              <Typography variant="h6" className="mb-2">
                Email Address
              </Typography>
              <TextField
                size="medium"
                className="w-full"
                placeholder="Enter your email"
                // onChange={handleChange}
                //     onChange={(e)=>{
                //   alert('k')
                //   // console.log(e)
                //   // localStorage.setItem ('location', e.target.value)
                // }}
                name="email"
                {...getTextFieldFormikProps(formik, "email")}
              />

              <Typography variant="h6" className="mb-2 mt-4">
                Phone Number
              </Typography>
              <TextField
                size="medium"
                className="w-full"
                placeholder="Enter your Phone Number"
                // onChange={handleChange}
                //     onChange={(e)=>{
                //   alert('k')
                //   // console.log(e)
                //   // localStorage.setItem ('location', e.target.value)
                // }}
                name="phoneNo"
                {...getTextFieldFormikProps(formik, "phoneNo")}
              />
              <Typography variant="h6" className="mb-2 mt-4">
                Company Name
              </Typography>
              <TextField
                size="medium"
                className="w-full"
                placeholder="Enter your Company Name"
                // onChange={handleChange}
                //     onChange={(e)=>{
                //   alert('k')
                //   // console.log(e)
                //   // localStorage.setItem ('location', e.target.value)
                // }}
                name="fname"
                {...getTextFieldFormikProps(formik, "fname")}
              />

              <Typography variant="h6" className="mt-4 mb-2">
                Choose Password
              </Typography>

              <PasswordTextField
                className="w-full "
                placeholder="Enter your Password"
                // type="password"
                // onChange={handleChange}
                //     onChange={(e)=>{
                //   alert('k')
                //   // console.log(e)
                //   // localStorage.setItem ('password', e.target.value)
                // }}
                name="password"
                {...getTextFieldFormikProps(formik, "password")}
              />

              <Typography variant="h6" className="mt-4 mb-2">
                Confirm Password
              </Typography>

              <PasswordTextField
                className="w-full "
                placeholder="Confirm your Password"
                // type="password"
                // onChange={handleChange}
                //     onChange={(e)=>{
                //   alert('k')
                //   // console.log(e)
                //   // localStorage.setItem ('password', e.target.value)
                // }}
                name="password"
                {...getTextFieldFormikProps(formik, "confirmPassword")}
              />

              <FormGroup>
                <FormControlLabel
                  className="mt-3"
                  control={<Checkbox defaultChecked />}
                  label="Remember Information"
                />
              </FormGroup>

              {/* <Input placeholder='Location' className='m-b-20'/> */}

              <div className="text-white m-b-30 mt-3  ">
                <Button
                  className="p-3 w-full text-base"
                  type="submit"
                  // onClick={() => localStorage.setItem('type', 'CLIENT')}
                  // className=' '
                >
                  Sign Up
                </Button>
                {/* <Button
                  variant="outlined"
                  startIcon={<FcGoogle />}
                  className="p-3 bg-white text-base text-black mt-4 w-full"
                  type="submit"
                  // onClick={() => localStorage.setItem('type', 'CLIENT')}
                  // className=' '
                >
                  Sign In With Google
                </Button> */}
              </div>
            </form>

            <a className="text-center" href="">
              <h2 className="mb-5">
                Already have an account?
                <b onClick={toSignIn} className="ml-1  color{#039836}">
                  Sign In
                </b>
              </h2>
            </a>
          </div>
        </div>
        <div
          className="relative flex-vertical min-h-screen bg-primary-main text-white pl-10 justify-center w-2/5"
          style={{
            minWidth: "40%",
            // minHeight: "100%",
            position: "relative",
            // backgroundImage: `url(${snake})`,
            // minHeight:"500px"
            // backgroundColor: "green",
          }}
        >
          <img
            className="absolute z-0 top-0 left-0 w-[100%] h-[100%]"
            src={snake}
          />
          <div className="z-10">
            <Typography variant="h1" className="mt-10 font-bold">
              Earn
            </Typography>
            <Typography variant="h1" className="mt-10 font-bold">
              Ride
            </Typography>
            <Typography variant="h1" className="mt-10 font-bold">
              Manage.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
