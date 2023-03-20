import React, {  } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";

import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import LoginHeader from "common/LoginHeader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import snake from "images/Mask group.png";

import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const history = useNavigate();

  const redirect = () => {
    history("/");
  };

  const toSignIn = () => {
    history("/");
  };

  const { enqueueSnackbar } = useSnackbar();
  const [signupMuation, ] = UserApi.useSignupMutation();

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
      localStorage.setItem("il", true);

      try {
        const data = await signupMuation({ data: values }).unwrap();
        // TODO extra login
        enqueueSnackbar("Sign Up in successful", { variant: "success" });
        redirect();
      } catch (error) {
        enqueueSnackbar(error?.data?.message, "Failed to login", {
          variant: "error",
        });
      }
    },
  });

  return (
    <div className="z  pl-24">
      <div className="flex justify-between ">
        <div
          className="pt-4"
          style={{
            paddingLeft: "",
            paddingRight: "",
            minWidth: "40%",
          }}
        >
          <LoginHeader />
          <div className="flex-vertical">
            <div className="my-8">
              <Typography variant="h3" className="mb-2 mt-3 font-bold">
                Sign Up
              </Typography>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <Typography variant="h6" className="mb-2">
                Email Address
              </Typography>
              <TextField
                size="medium"
                className="w-full"
                placeholder="Enter your email"
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
                name="fname"
                {...getTextFieldFormikProps(formik, "fname")}
              />

              <Typography variant="h6" className="mt-4 mb-2">
                Choose Password
              </Typography>

              <PasswordTextField
                className="w-full "
                placeholder="Enter your Password"
                name="password"
                {...getTextFieldFormikProps(formik, "password")}
              />

              <Typography variant="h6" className="mt-4 mb-2">
                Confirm Password
              </Typography>

              <PasswordTextField
                className="w-full "
                placeholder="Confirm your Password"
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

              <div className="text-white m-b-30 mt-3  ">
                <Button className="p-3 w-full text-base" type="submit">
                  Sign Up
                </Button>
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
            position: "relative",
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
