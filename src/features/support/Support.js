import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import moment from "moment";
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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

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
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [state, setState] = React.useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
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
    history(RouteEnum.TRIPS);
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

  const bikerx = {
    fname: null,
    lname: null,
    email: "rider2@gmail.com",
    phoneNo: "+23490762795",
    password: "$2b$10$K2BQR9MZOVjVmSIjleNPuewEgJdsav8mXAs4AfaJfA3gO2k0FopaG",
    dob: "1993-12-07T23:00:00.000Z",
    bloodGroup: "B+",
    address: null,
    city: "Maryland",
    state: "Lagos",
    country: "Nigeria",

    profileUrl:
      "http://res.cloudinary.com/todoorapp/image/upload/v1505805106/noun_17237_agwqgt.png",
    userType: "rider",
    bikeDetails: {
      type: "bike",
      company: "Maruti Suzuki",
      regNo: "NYC 123",
      RC_ownerName: null,
      bikeNo: null,
      bikeModel: "Swift Dzire",
      regDate: "2016-12-31T23:00:00.000Z",
    },
    licenceDetails: {
      licenceNo: null,
      issueDate: null,
      expDate: null,
    },
    bankDetails: {
      accountNo: null,
      holderName: null,
      bank: null,
    },
    companyId: "635fbe0bbfadb9f5ea56afc2",
  };

  const authUser = useAuthUser();

  console.log(authUser);

  const { enqueueSnackbar } = useSnackbar();
  const [addBikeMuation, addBikeMutationResult] = UserApi.useAddBikeMutation();

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
  //         const data = await addBikeMuation({ data: values }).unwrap();
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
    if (ridersPicture) {
      try {
        const data = await addBikeMuation({
          data: {
            email: email,
            phoneNo: phoneNumber,
            password: password,
            userType: "rider",
            companyId: authUser._id,
            fname: name,
            // lname: null,
            // email: "rider2@gmail.com",
            // phoneNo: "",
            // password:
            //   "$2b$10$K2BQR9MZOVjVmSIjleNPuewEgJdsav8mXAs4AfaJfA3gO2k0FopaG",
            dob: "1993-12-07T23:00:00.000Z",
            bloodGroup: "B+",
            address: address,
            city: city,
            state: state,
            country: "Nigeria",
            bikeDetails: {
              type: "bike",
              company: bikeCompany,
              regNo: bikeRegNo,
              RC_ownerName: bikeOwner,
              bikeNo: "",
              bikeModel: bikeModel,
              // regDate: bikeDate,
            },
          },
        }).unwrap();
        // TODO extra login
        console.log(data.data);
        onUpload(data?.data?.user?._id);

        enqueueSnackbar(data.message, { variant: "success" });
      } catch (error) {
        enqueueSnackbar(error?.data?.message, "Failed to login", {
          variant: "error",
        });
      }
    } else {
      enqueueSnackbar("Profile picture Required", {
        variant: "error",
      });
    }
  };

  const onSave = async () => {
    // const  data = {
    //       email: email,
    //       phoneNo: phoneNumber,
    //       password: password,
    //       userType: "rider",
    //       companyId: authUser._id,
    //       fname: name,
    //       // lname: null,
    //       // email: "rider2@gmail.com",
    //       // phoneNo: "",
    //       // password:
    //       //   "$2b$10$K2BQR9MZOVjVmSIjleNPuewEgJdsav8mXAs4AfaJfA3gO2k0FopaG",
    //       dob: "1993-12-07T23:00:00.000Z",
    //       bloodGroup: "B+",
    //       address: address,
    //       city: city,
    //       state: state,
    //       country: "Nigeria",
    //       bikeDetails: {
    //         type: "bike",
    //         company: bikeCompany,
    //         regNo: bikeRegNo,
    //         RC_ownerName: bikeOwner,
    //         bikeNo: '',
    //         bikeModel: bikeModel,
    //         // regDate: bikeDate,
    //       },
    //     }
    // console.log(data)
    if (ridersPicture) {
      try {
        // alert('saveed')
        const data = await addBikeMuation({
          data: {
            email: email,
            phoneNo: phoneNumber,
            password: password,
            userType: "rider",
            companyId: authUser._id,
            fname: name,
            // lname: null,
            // email: "rider2@gmail.com",
            // phoneNo: "",
            // password:
            //   "$2b$10$K2BQR9MZOVjVmSIjleNPuewEgJdsav8mXAs4AfaJfA3gO2k0FopaG",
            dob: "1993-12-07T23:00:00.000Z",
            bloodGroup: "B+",
            address: address,
            city: city,
            state: state,
            country: "Nigeria",
            bikeDetails: {
              type: "bike",
              company: bikeCompany,
              regNo: bikeRegNo,
              RC_ownerName: bikeOwner,
              bikeNo: "",
              bikeModel: bikeModel,
              regDate: bikeDate,
            },
          },
        }).unwrap();
        // TODO extra login
        console.log(data.data);
        onUpload(data?.data?.user?._id);
        enqueueSnackbar(data.message, { variant: "success" });
        setAddress("");
        setCity("");
        setPhoneNumber("");
        setState("");
        setEmail("");
        setName("");
        setPassword("");
        setConfirmPassword("");
        setLiscence("");
        // onSubmit('')
        // redirect();
      } catch (error) {
        enqueueSnackbar(error?.data?.message, "Failed to login", {
          variant: "error",
        });
      }
    } else
      enqueueSnackbar("Profile picture Required", {
        variant: "error",
      });
  };

  const onFileChange = (event) => {
    // Update the state
    // setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    if (event.target.files[0]) {
      console.log("picture: ", event.target.files);
      //  setPicture(event.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(event.target.files[0]);
    }
    onFileUpload(event.target.files[0]);
  };

  const onFileUpload = async (selectedFile) => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("image", selectedFile);

    // Details of the uploaded file
    setRidersPictureName(selectedFile.name);
    console.log(selectedFile.name);
    setRidersPicture(formData);
    // onUpload();
    // Request made to the backend api
    // Send formData object
    // const res = await put({
    //   endpoint: `api/users/upload`,
    //    body: formData,
    //   auth: true,
    // });
    // axios.post("api/uploadfile", formData);
  };
  const onUpload = async (id) => {
    // tryNewPost()
    // alert('ji')

    const res = await post({
      endpoint: `api/company/uploadForCompany?id=${id}`,
      body: ridersPicture,
      auth: true,
    });

    if (res.data.success) {
      enqueueSnackbar(res?.data?.message, { variant: "success" });
      redirect();
      setRidersPicture("");
    } else enqueueSnackbar(res?.data?.message, { variant: "error" });
  };

  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }

  return (
    <div className="add-bike">
      <ToDoorSearch />

      <div class="pr-[15%]">
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
              </LocalizationProvider>
            </div> */}
          </div>
        </div>

        <div className="flex justify-between my-10">
          <div className="w-full mr-[5%]">
            <p className="font-bold">Create Temporary Password</p>
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#EBEBEB]"
              // value={name}
              multiline={true}
              rows={1.5}
              value={password}
            />
          </div>
          <div className="w-full ">
            <p className="font-bold">Confirm Password</p>
            <TextField
              className="w-full bg-[#EBEBEB]"
              multiline={true}
              rows={1.5}
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
        </div>

        {!ridersPicture && (
          <div>
            <input
              onChange={onFileChange}
              style={{ display: "none" }}
              id="contained-button-file"
              type="file"
            />
            <label htmlFor="contained-button-file" className="mb-8">
              <Button variant="contained" color="primary" component="span">
                Upload Profile Picture
              </Button>
            </label>
          </div>
        )}

        {ridersPicture && (
          <div className="relative w-20">
            <Avatar
              className="w-32 h-32 border border-blue-300"
              src={imgData}
            />
            {/* <Typography>{ridersPictureName.name}</Typography> */}
            <div
              onClick={() => setRidersPicture("")}
              className="p-1 bg-red-500 absolute w-4 h-4 flex justify-center hover:cursor-pointer items-center top-0 left-32 text-white rounded-full"
            >
              x
            </div>
          </div>
        )}

        <div className="w-full flex justify-between my-8 gap-12">
          <Button onClick={onSubmit} className="h-12 w-2/6 bg-primary-main">
            Save
          </Button>

          <Button
            onClick={() => onSave()}
            className="h-12 w-2/6 bg-primary-main"
          >
            Save & Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ManageRiders;
