
import React, { useState } from 'react';
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";
import snake from "images/Mask group.png";
import LoginHeader from "common/LoginHeader";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import toDoorLogo from 'images/Ellipse 30.png'
import background from 'images/background.png'

// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import trustedBy2 from 'images/Rectangle 7.png'
import trustedBy3 from 'images/Rectangle 106.png'
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import { Button, Input, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Signup(props) {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event)
  };
  const history = useNavigate();


  const redirect = () => {

    history('/complete-signUp');
  }

  const authUser = useAuthUser();

  const { enqueueSnackbar } = useSnackbar();
  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();

  const formik = useFormik({
    initialValues: {
    
    email:"",
    phoneNo: "+2348094432806",
    password:"",
    userType: "company"

    },
    validationSchema: yup.object({
      username: yup.string().trim().required(),
      password: yup.string().trim().required(),
    }),
    onSubmit: async (values) => {
      console.log(values)
      // localStorage.setItem('location', values.location)
      redirect()

      try {
        const data = await loginMuation({ data: values }).unwrap();
        // TODO extra login
        // redirect()
        enqueueSnackbar("Logged in successful", { variant: "success" });
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
    <div className="pl-24">
      <div className="flex justify-between ">
        <div
          className="pt-4"
          style={{
            paddingLeft: "",
            paddingRight: "",
            minWidth: "40%",
            maxWidth: "80%",
          }}
        >
          <LoginHeader />
          <div className="flex-vertical">
            <div className="my-6">
              <Typography variant="h3" className=" font-bold">
                Complete Sign-up
              </Typography>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <Typography variant="h6" className="mb-2">
                Company Reg Num:
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

              <Typography variant="h6" className="mt-5 mb-2">
                TIN Number
              </Typography>

              <TextField
                className="w-full "
                placeholder="Enter your Password"
                // type='password'
                // onChange={handleChange}
                //     onChange={(e)=>{
                //   alert('k')
                //   // console.log(e)
                //   // localStorage.setItem ('password', e.target.value)
                // }}
                name="password"
                {...getTextFieldFormikProps(formik, "password")}
              />

              <Typography variant="h6" className="mt-5 mb-2">
                Address
              </Typography>

              <TextField
                className="w-full "
                placeholder="Enter your Password"
                // type='password'
                // onChange={handleChange}
                //     onChange={(e)=>{
                //   alert('k')
                //   // console.log(e)
                //   // localStorage.setItem ('password', e.target.value)
                // }}
                name="password"
                {...getTextFieldFormikProps(formik, "password")}
              />

              <Typography variant="h6" className="mt-5 mb-2">
                {" "}
                Contact Phone Number
              </Typography>

              <TextField
                className="w-full "
                placeholder="Enter your Password"
                // type='password'
                // onChange={handleChange}
                //     onChange={(e)=>{
                //   alert('k')
                //   // console.log(e)
                //   // localStorage.setItem ('password', e.target.value)
                // }}
                name="password"
                {...getTextFieldFormikProps(formik, "password")}
              />

              {/* 
            <FormGroup>
              <FormControlLabel className='mt-5' control={<Checkbox defaultChecked />} label="Remember Information" />
            </FormGroup> */}

              {/* <Input placeholder='Location' className='m-b-20'/> */}
              <div className="text-white bg-primary-main m-b-30 mt-8  ">
                <Button
                  className="p-3 w-full"
                  type="submit"
                  // onClick={() => localStorage.setItem('type', 'CLIENT')}
                  // className=' '
                >
                  Request Verification
                </Button>
              </div>
            </form>

            <a className='text-center' href="/">
              <h2 className='mb-5'>Already have an account?<b className='ml-1  color{#039836}'>Sign In</b></h2>
            </a>
          </div>
        </div>
        <div
          className="relative flex-vertical bg-primary-main text-white pl-10 justify-center w-2/5"
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

export default Signup;
