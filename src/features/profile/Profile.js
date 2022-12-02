import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import { BsFillCircleFill, BsPeople } from "react-icons/bs";
import useAuthUser from "hooks/useAuthUser";
  import { post, get, put } from "services/fetch";
import { deepOrange } from "@mui/material/colors";

import edit from "images/edit.svg";
// import ManageCompanyCard from 'common/ManageCompanyCard'

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import gigLogo from "images/Ellipse 56.png";
// import trustedBy3 from "images/Rectangle 106.png";
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Input,
  MenuItem,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WallCards from "common/WallCards";
import ManageCompanyCard from "features/manageCompanies/ManageCompanyCard";
import ManageCompaniesTable from "features/manageCompanies/ManageCompaniesTable";
// import useAuthUser from "hooks/useAuthUser";

import { RiArrowLeftSLine } from "react-icons/ri";
// import SupportChart from "./SupportChart";
import ToDoorSearch from "common/ToDoorSearch";
function ManageRiders(props) {

 const authUser = useAuthUser();

 console.log(authUser);

  const [address, setAddress] = React.useState(authUser?.homeAddress);
  const [city, setCity] = React.useState(authUser?.city);
  const [phoneNumber, setPhoneNumber] = React.useState(authUser?.phoneNo);
  const [state, setState] = React.useState(authUser?.state);
  const [email, setEmail] = useState(authUser?.email);
  const [companyName, setCompanyName] = useState(authUser.fname);
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState(authUser?.country);
  const [userId, setUserId] = React.useState(authUser._id);
  const [showProfile, setShowProfile] = useState(true);
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  //   console.log(event)
  // };
  const history = useNavigate();
  // const authUser = useAuthUser();

//   console.log(authUser)

  const redirect = () => {
    // history('/complete-signUp');
  };

  const getUserQueryResult = UserApi?.useGetUserQuery({ userId });
  const user = getUserQueryResult?.data;
  console.log(user);

// address;
// city;
// phoneNumber;
// state;
// email;
// companyName;
// show;
// country;

  let yy = {
        fname: companyName,
        email: email,
        phoneNo: phoneNumber,
        address: address,
        city: city,
        state: state,
        country: country,
   
    _id: userId,
  };

  

  const tableArray = [
    {
      image: gigLogo,
      name: "Taiwo Daniel  ",
      company: "GIG Logistics",
      Id: "2234456",
      ratings: "4",
      message: "Hello",
    },

    {
      image: gigLogo,
      name: "Triumph Boyace  ",
      company: "GIG Logistics",
      Id: "2234456",
      message: "Hi",
      ratings: "4",
    },
    {
      image: gigLogo,
      name: "Tina Kumi  ",
      company: "GIG Logistics",
      Id: "2234456",
      message: "I've been waiting",
      ratings: "4",
    },
  ];

 

  const { enqueueSnackbar } = useSnackbar();
  const [updateUserMuation, updateUserMutationResult] = UserApi.useUpdateUserMutation();

  //   const formik = useFormik({
  //     initialValues: {
  //     email:"",
  //     phoneNo: "+2348094432806",
  //     password:"",
  //     userType: "rider",
  //     companyId:''
  // },

  //     validationSchema: yup.object({
  //       email: yup.string().trim().required(),
  //       password: yup.string().trim().required(),
  //     }),
  //     onSubmit: async (values) => {
  //       console.log(values);
  //       localStorage.setItem("il", true);
  //       // redirect();
  //       // history('/dashboard')

  //       try {
  //         const data = await updateUserMuation({ data: values }).unwrap();
  //         // TODO extra login
  //         console.log(data.data);
  //         enqueueSnackbar("Logged in successful", { variant: "success" });
  //         redirect();
  //       } catch (error) {
  //         enqueueSnackbar(error?.data?.message, "Failed to login", {
  //           variant: "error",
  //         });
  //       }
  //     },
  //   });
  console.log(show);

  const onSubmit = async () => {
    // tryNewPost()
    // alert('ji')
    
    try {
      const data = await updateUserMuation({
        data: yy
      }).unwrap();
      // TODO extra login
      console.log(data.data);
      enqueueSnackbar(data.message, { variant: "success" });
      // redirect();
    } catch (error) {
      console.log(error.data)
      enqueueSnackbar(error?.data?.message, "Failed to login", {
        variant: "error",
      });
    }
  };

  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }

  return (
    <div className="add-bike">
      <ToDoorSearch />

      <div class="">
        {!showProfile && (
          <div
            // onClick={handleShow}
            className="flex items-center mb-2 cursor-pointer w-16 p-2"
          >
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
              onClick={() => setShowProfile(true)}
              style={{ color: "#494949" }}
              className="text-base"
            >
              Back
            </p>
          </div>
        )}

        {showProfile && (
          <div>
            <div className="flex gap-8">
              {/* <Avatar
              sx={{ bgcolor: deepOrange[500] }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              B
            </Avatar> */}
              {/* <Avatar
              sx={{ bgcolor: deepOrange[500] }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            /> */}
              <div className="flex">
                <Avatar
                  sx={{ width: 100, height: 100 }}
                  src="/broken-image.jpg"
                />
                <img
                  onClick={() => setShowProfile(false)}
                  src={edit}
                  className="self-end cursor-pointer"
                />
              </div>
              <div className="self-center">
                <Typography variant="h6">{authUser?.fname}</Typography>
                <Button className="text-white bg-primary-main" variant="h4">
                  Level 1 Account
                </Button>
              </div>
            </div>
            <Divider className="my-8" />
            <div class="flex gap-16 ">
              <div className="flex flex-col gap-5 font-semibold">
                <Typography className="font-semibold">Address:</Typography>
                <Typography className="font-semibold">Phone Number:</Typography>
                <Typography className="font-semibold">
                  Email address:
                </Typography>
                <Typography className="font-semibold">ID Card:</Typography>
                <Typography className="font-semibold">
                  Last Login Image
                </Typography>
              </div>
              <div className="flex flex-col gap-5">
                <Typography>{user?.homeAddress}</Typography>
                <Typography>{user?.phoneNo}</Typography>
                <Typography>{user?.email}</Typography>
                <Typography>XXXX</Typography>
                <Typography>XXXX</Typography>
              </div>
            </div>
          </div>
        )}

        {!showProfile && (
          <div className="pr-[15%]">
            <div className="flex justify-between my-10 ">
              <div className="w-full mr-[5%]">
                <p className="font-bold">Company Full Name</p>
                <TextField
                  className="w-full bg-[#EBEBEB] border-none"
                  multiline={true}
                  rows={1.5}
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                />
              </div>
              <div className="w-full ">
                <p className="font-bold">Company Phone No.</p>
                <TextField
                  className="w-full bg-[#EBEBEB]"
                  multiline={true}
                  rows={1.5}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                />
              </div>
            </div>
            <div className="flex justify-between my-10">
              <div className="w-full mr-[5%]">
                <p className="font-bold">Email Address</p>
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#EBEBEB]"
                  multiline={true}
                  value={email}
                  rows={1.5}
                />
              </div>
              <div className="w-full">
                <p className="font-bold">Country</p>
                <TextField
                  className="w-full bg-[#EBEBEB]"
                  multiline={true}
                  value={country}
                  rows={1.5}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between my-10">
              <div className="w-full mr-[5%]">
                <p className="font-bold">City</p>
                <TextField
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-[#EBEBEB]"
                  multiline={true}
                  value={city}
                  rows={1.5}
                />
              </div>
              <div className="w-full">
                <p className="font-bold">State</p>
                <TextField
                  className="w-full bg-[#EBEBEB]"
                  multiline={true}
                  value={state}
                  rows={1.5}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between my-10">
              <div className="w-full ">
                <p className="font-bold">House Address</p>
                <TextField
                  className="w-full bg-[#EBEBEB]"
                  multiline={true}
                  value={address}
                  rows={2}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            {/* <div className="flex justify-between my-10">
            <div className="w-full mr-[5%]">
              <p className="font-bold">Create Temporary Password</p>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#EBEBEB]"
                multiline={true}
                rows={1.5}
              />
            </div>
            <div className="w-full ">
              <p className="font-bold">Confirm Password</p>
              <TextField
                className="w-full bg-[#EBEBEB]"
                multiline={true}
                rows={1.5}
              />
            </div>
          </div> */}
            <div className="w-full mb-8">
              <Button onClick={onSubmit} className="h-12 w-2/6 bg-primary-main">
                Update Company Profile
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageRiders;
