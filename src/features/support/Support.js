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
import { Navigate } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";
import LoginHeader from "common/LoginHeader";
import customer from "images/tabler_helmet.png";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import toDoorLogo from "images/Ellipse 30.png";
// import ManageCompanyCard from 'common/ManageCompanyCard'

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import gigLogo from "images/Ellipse 56.png";
import trustedBy3 from "images/Rectangle 106.png";
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
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

import { RiArrowLeftSLine } from "react-icons/ri";
import SupportChart from "./SupportChart";
import ToDoorSearch from "common/ToDoorSearch";
import { LocalizationProvider } from "@mui/x-date-pickers";
// import { post,  } from "services/fetch";
import { post } from "services/fetchUpload";
function ManageRiders(props) {
  const [age, setAge] = React.useState("");
  const [show, setShow] = useState(false);
  const [liscence, setLiscence] = useState("");
  const [bikeCompany, setBikeCompany] = useState("");
  const [bikeModel, setBikeModel] = useState("");
  const [bikeRegNo, setBikeRegNo] = useState("");
  const [bikeOwner, setBikeOwner] = useState("");
  const [bikeDate, setBikeDate] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ridersPicture, setRidersPicture] = useState("");
  const [ridersPictureName, setRidersPictureName] = useState("");
  const [start_date, setStart_date] = useState(null);
  const [imgData, setImgData] = useState(null);
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  //   console.log(event)
  // };
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
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

  const authUser = useAuthUser();

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
      // localStorage.setItem('location', values.location)
      redirect();

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
  console.log(show);

  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }

  return (
    <div>
      <ToDoorSearch />

      <Button>
        <a href=" https://tawk.to/chat/6401e42f4247f20fefe3c351/1gqjm6n0q " target='_blank'>
          Please click here to be directed to our support page
        </a>
      </Button>
      {/* {!show && (
        <div>
          <div className="mb-4">
            <Button
              startIcon={<BsPeople />}
              className="px-7 py-2 text-base mr-4 min-w-[140px]"
            >
              Customers
            </Button>
            <Button
              variant="outlined"
              startIcon={<img src={customer} />}
              className="px-7 bg-transparent text-[#8C8C8C] border2 py-2 text-base min-w-[120px]"
            >
              Riders
            </Button>
          </div>
          <p
            // onClick={() => setOpen(!open)}
            style={{ color: "#494949" }}
            className="text-base"
          >
            Back
          </p>
        </div>
        <div className="flex justify-between my-10">
          <div className="w-full mr-[5%]">
            <p className="font-bold">Drivers Full Name</p>
            <TextField
              className="w-full bg-[#EBEBEB] border-none"
              multiline={true}
              rows={1.5}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full ">
            <p className="font-bold">Drivers Phone No.</p>
            <TextField
              className="w-full bg-[#EBEBEB]"
              multiline={true}
              inputProps={{ inputmode: "numeric", pattern: "[0-9]*" }}
              type="number"
              value={phoneNumber}
              rows={1.5}
              onChange={(e) => {
                const regex = /^[0-9\b]+$/;
                if (e.target.value === "" || regex.test(e.target.value)) {
                  setPhoneNumber(e.target.value);
                  console.log(e.target.value);
                  // setNum(e.target.value);
                }
              }}
            />
          </div>
        </div>
        <div className="flex justify-between my-10">
          <div className="w-full mr-[5%]">
            <p className="font-bold">Email Address</p>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#EBEBEB]"
              value={email}
              multiline={true}
              rows={1.5}
            />
          </div>
          <div className="w-full">
            <p className="font-bold">Licence Expiry</p>
            <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className="flex-between">
                  <DatePicker
                    className=" mr-8 w-full"
                    // label="Basic example"
                    value={start_date}
                    onChange={(newValue) => {
                      // console.log(newValue)
                      // setWorkList({ ...workList, start_date: newValue });
                      // setStart_date(moment(newValue).format("YYYY-MM-DD"));
                      // console.log(newValue);

                      console.log(moment(newValue).format("YYYY-MM-DD"));
                      setLiscence(moment(newValue).format("YYYY-MM-DD"));
                      // setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
              </LocalizationProvider>
            </div>
            {/* <TextField
              className="w-full bg-[#EBEBEB]"
              multiline={true}
              onChange={(e) => setLiscence(e.target.value)}
              value={liscence}
              rows={1.5}
            /> */}
          </div>
        </div>
        <div className="flex justify-between my-10">
          <div className="w-full mr-[5%]">
            <p className="font-bold">City</p>
            <TextField
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-[#EBEBEB]"
              value={city}
              multiline={true}
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
              value={address}
              multiline={true}
              rows={2}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <Typography variant="h4">Bike Details</Typography>

        <div className="flex justify-between my-10">
          {/* <div className="w-full mr-[5%]">
            <p className="font-bold">Bike Company</p>
            <TextField
              onChange={(e) => setBikeCompany(e.target.value)}
              className="w-full bg-[#EBEBEB]"
              // value={name}
              // multiline={true}
              // rows={1.5}
              value={bikeCompany}
            />
          </div> */}
          <div className="w-full ">
            <p className="font-bold">Bike Model/Brand</p>
            <TextField
              className="w-full bg-[#EBEBEB]"
              // multiline={true}
              // rows={1.5}
              onChange={(e) => setBikeModel(e.target.value)}
              value={bikeModel}
            />
          </div>
        </div>
        <div className="flex justify-between my-10">
          <div className="w-full mr-[5%]">
            <p className="font-bold">Bike Reg No.</p>
            <TextField
              onChange={(e) => setBikeRegNo(e.target.value)}
              className="w-full bg-[#EBEBEB]"
              // value={name}
              // multiline={true}
              // rows={1.5}
              value={bikeRegNo}
            />
          </div>
          {/* <div className="w-full ">
            <p className="font-bold">Bike Owner</p>
            <TextField
              className="w-full bg-[#EBEBEB]"
              // multiline={true}
              // rows={1.5}
              onChange={(e) => setBikeOwner(e.target.value)}
              value={bikeOwner}
            />
          </div> */}
        </div>
        <div className="flex justify-between my-10">
          <div className="w-full mr-[5%]">
            {/* <p className="font-bold">Bike Reg. Date</p>
            <TextField
              onChange={setBikeDate}
              className="w-full bg-[#EBEBEB]"
              // value={name}
              // multiline={true}
              // rows={1.5}
              value={bikeDate}
            /> */}
            {/* <div>
              <p className="font-bold">Bike Reg Date</p>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className="flex-between">
                  <DatePicker
                    className=" mr-8 w-full"
                    // label="Basic example"
                    value={bikeDate}
                    onChange={setBikeDate}
                    // onChange={(newValue) => {
                    //   // console.log(newValue)
                    //   // setWorkList({ ...workList, start_date: newValue });
                    //   setBikeDate(moment(newValue).format("YYYY-MM-DD"));
                    //   console.log(newValue);
                    //   console.log(moment(newValue).format("YYYY-MM-DD"));
                    //   // setValue(newValue);
                    // }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
              </div>
              <div className=" w-full flex justify-end items-center p-2 ">
                <p
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="font-bold cursor-pointer"
                >
                  View Profile
                </p>
              </div>
              
            </div>
          ))}
        </div>
      )} */}

      {/* {show && <SupportChart setOpen={setShow} open={show} />} */}
    </div>
  );
}

export default ManageRiders;
