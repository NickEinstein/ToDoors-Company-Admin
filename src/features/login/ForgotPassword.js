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
import { RiArrowLeftSLine } from "react-icons/ri";

function ForgotPassword(props) {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event);
  };

  // console.log(localStorage.getItem('authUser'))
  const history = useNavigate();

  const redirect = () => {
    // localStorage.setItem('authUser', 'true')

    history("/dashboard");
  };

  // console.log(localStorage.getItem('authUser'))

  // const authUser = useAuthUser();

  const { enqueueSnackbar } = useSnackbar();
  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().trim().required(),
      password: yup.string().trim().required(),
    }),
    onSubmit: async (values) => {
      console.log(values);
      localStorage.setItem("il", true);
      redirect();
      // history('/dashboard')

      // try {
      //   const data = await loginMuation({ data: values }).unwrap();
      //   // TODO extra login
      //   // redirect()
      //   enqueueSnackbar("Logged in successful", { variant: "success" });
      // } catch (error) {
      //   enqueueSnackbar(error?.data?.message, "Failed to login", {
      //     variant: "error",
      //   });
      // }
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
    //       label="Username"
    //       {...getTextFieldFormikProps(formik, "username")}
    //     />
    //     <PasswordTextField
    //       label="Password"
    //       {...getTextFieldFormikProps(formik, "password")}
    //     />
    //     <Button type="submit">Submit</Button>
    //   </form>
    // </div>
    <div className="  pl-24 h-screen">
      <div className="flex justify-between">
        <div
          className="pt-12"
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
                Forgot Password
              </Typography>
              <p className="text-[#7D7878] w-[67%] text-sm">
                To reset your password, enter your email address, and we'll send
                you a link.
              </p>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div class="mb-12">
                <Typography variant="h6" className="my-2">
                  Email Address
                </Typography>
                <TextField
                  size="medium"
                  className="w-full"
                  placeholder="Enter your username"
                  // onChange={handleChange}
                  //     onChange={(e)=>{
                  //   alert('k')
                  //   // console.log(e)
                  //   // localStorage.setItem ('location', e.target.value)
                  // }}
                  name="username"
                  {...getTextFieldFormikProps(formik, "username")}
                />
              </div>

              <div className="text-white m-b-30 mt-5  ">
                <Button
                  className="p-3 bg-primary-main w-full text-base"
                  type="submit"
                  // onClick={() => localStorage.setItem('type', 'CLIENT')}
                  // className=' '
                >
                  Continue
                </Button>
                <div
                  //   onClick={handleShow}
                  className="flex justify-center items-center mb-2 m-auto cursor-pointer p-2"
                >
                  <div class="w-1/3 mt-4 flex items-center">
                    <div
                      style={{ border: "1px solid #494949" }}
                      className="border-solid w-5 mr-2 rounded h-5 flex justify-center items-center"
                    >
                      <RiArrowLeftSLine
                        className=""
                        style={{ fontSize: "22px", color: "#494949" }}
                      />
                    </div>
                    <p
                      // onClick={() => setOpen(!open)}
                      style={{ color: "#494949" }}
                      className="text-base "
                    >
                      Back to Sign In
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          className="relative flex-vertical bg-primary-main py-36 text-white pl-10 justify-center w-2/5"
          style={{
            minWidth: "40%",
            minHeight: "100%",
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
          {/* <Typography variant='h1' className='mt-10 font-bold'>Manage.</Typography> */}

          {/* background:`url(${background})` */}
          {/* <div className='two-circles relative' style={{ position: 'relative' }}></div> */}
          {/* <img src={trustedBy3} className='' style={{ position: 'absolute', top: '50%', height: '49%', width: '98.8%' }} /> */}
          {/* <div className='' style={{width:'100px', height:'50px', ottomLeftRadius:'100%',ottomRightRadius:'100%', position:'absolute', bottom:'0px', opColor:'blue'}}></div> */}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
