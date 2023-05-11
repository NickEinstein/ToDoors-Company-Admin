import React, { useEffect, useState } from "react";
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
  Autocomplete,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Input,
  InputAdornment,
  MenuItem,
  Rating,
  Select,
  Stack,
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
import { post, put } from "services/fetchUpload";
import { get } from "services/fetLocation";
import { IndeterminateCheckBoxSharp } from "@mui/icons-material";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
function ManageRiders(props) {
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [state, setState] = React.useState("");
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [dob, setDOB] = useState("");
  const [bikeCompany, setBikeCompany] = useState("");
  const [bikeModel, setBikeModel] = useState("");
  const [bikeRegNo, setBikeRegNo] = useState("");
  const [bikeOwner, setBikeOwner] = useState("");
  const [bikeDate, setBikeDate] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ridersPicture, setRidersPicture] = useState("");
  const [ridersPictureName, setRidersPictureName] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [imgData, setImgData] = useState(null);
  const [uploadArray, setUploadArray] = useState([]);

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  const history = useNavigate();

  const redirect = () => {
    history(RouteEnum.TRIPS);
  };

  const authUser = useAuthUser();

  const { enqueueSnackbar } = useSnackbar();
  const [addBikeMuation, addBikeMutationResult] = UserApi.useAddBikeMutation();

  const onSubmit = async () => {
    if (ridersPicture) {
      if (!email) {
        enqueueSnackbar("Email is Required", {
          variant: "error",
        });
        return;
      }

      if (!phoneNumber) {
        enqueueSnackbar("phoneNumber Required", {
          variant: "error",
        });
        return;
      }
      if (!password) {
        enqueueSnackbar("password Required", {
          variant: "error",
        });
        return;
      }
      if (!name) {
        enqueueSnackbar("Driver's name Required", {
          variant: "error",
        });
        return;
      }
      if (!address) {
        enqueueSnackbar("Address Required", {
          variant: "error",
        });
        return;
      }
      if (!city) {
        enqueueSnackbar("City Required", {
          variant: "error",
        });
        return;
      }
      if (!state) {
        enqueueSnackbar("State Required", {
          variant: "error",
        });
        return;
      }

      if (!bikeRegNo) {
        enqueueSnackbar("Bike Reg No Required", {
          variant: "error",
        });
        return;
      }

      if (!bikeModel) {
        enqueueSnackbar("Bike Model Required", {
          variant: "error",
        });
        return;
      }
      try {
        const data = await addBikeMuation({
          data: {
            email: email,
            phoneNo: `+234${phoneNumber}`,
            password: password,
            userType: "rider",
            companyId: authUser._id,
            fname: name,

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
    if (ridersPicture) {
      if (!email) {
        enqueueSnackbar("Email is Required", {
          variant: "error",
        });
        return;
      }

      if (!phoneNumber) {
        enqueueSnackbar("phoneNumber Required", {
          variant: "error",
        });
        return;
      }
      if (!password) {
        enqueueSnackbar("password Required", {
          variant: "error",
        });
        return;
      }
      if (!name) {
        enqueueSnackbar("Driver's name Required", {
          variant: "error",
        });
        return;
      }
      if (!address) {
        enqueueSnackbar("Address Required", {
          variant: "error",
        });
        return;
      }
      if (!city) {
        enqueueSnackbar("City Required", {
          variant: "error",
        });
        return;
      }
      if (!state) {
        enqueueSnackbar("State Required", {
          variant: "error",
        });
        return;
      }

      if (!bikeRegNo) {
        enqueueSnackbar("Bike Reg No Required", {
          variant: "error",
        });
        return;
      }

      if (!bikeModel) {
        enqueueSnackbar("Bike Model Required", {
          variant: "error",
        });
        return;
      }
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
            dob: dob,
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
        setDOB("");
        setBikeCompany("");
        setBikeModel("");
        setBikeRegNo("");
        // onSubmit('')
        redirect();
      } catch (error) {
        Object.keys(error?.data?.errors?.message?.errors).forEach((key) => {
          console.log(`${key}: ${error?.data?.errors?.message?.errors[key]}`);
          enqueueSnackbar(
            error?.data?.errors?.message?.errors[key],
            "Failed to login",
            {
              variant: "error",
            }
          );
          // return { key, value };
        });

        // console.log(arr)
      }
    } else
      enqueueSnackbar("Profile picture Required", {
        variant: "error",
      });
  };

  const handlePhoneNumber = (e) => {
    if (e.target.value.length > 0 && e.target.value.charAt(0) !== "0") {
      setPhoneNumber(e.target.value);
    } else {
      setPhoneNumber("");

      enqueueSnackbar("Number cannot start with 0", {
        variant: "error",
      });
    }
  };

  const onFileChange = (event, type, index) => {
    const formData = new FormData();

    // Update the formData object

    console.log(type);
    // Update the state
    // setSelectedFile(event.target.files[0]);
    if (event.target.files[0]) {
      formData.append("image", event.target.files[0]);

      //  setPicture(event.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
        uploadArray.length < 3 &&
          setUploadArray([
            ...uploadArray,
            {
              id: index,
              file: formData,
              readerURL: reader.result,
              type: type,
            },
          ]);
      });
      reader.readAsDataURL(event.target.files[0]);
    }

    onFileUpload(event.target.files[0]);
  };

  const onFileUpload = async (selectedFile) => {
    const formData = new FormData();

    // Update the formData object
    formData.append("image", selectedFile);

    // Create an object of formData

    // Details of the uploaded file
    setRidersPictureName(selectedFile.name);
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
    const formData = new FormData();
    formData.append("image", uploadArray[0]?.file);

    // tryNewPost()
    // alert('ji')

    for (let index = 0; index < uploadArray.length; index++) {
      console.log(uploadArray[index].type);
      const res = await post({
        endpoint: `api/company/uploadForCompany?id=${id}`,
        // endpoint: `api/users/upload?id=${id}`,
        auth: true,
        body: uploadArray[index].file,
        updateType: uploadArray[index].type,
      });

      if (res?.data?.success) {
        enqueueSnackbar(res?.data?.message, { variant: "success" });
        // redirect();
        setRidersPicture("");
      } else {
        console.log(res);

        enqueueSnackbar(res?.data?.message || "File too large", {
          variant: "error",
        });
      }
    }
  };

  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }

  // console.log(uploadArray);

  const top100Films = states.map((e) => ({
    title: e?.name,
    year: e.id,
    alias: e?.alias,
  }));

  const top10Films = cities.map((e) => ({
    title: e?.name,
    year: e.id,
    alias: e?.alias,
  }));

  useEffect(() => {
    getStates();
  }, []);

  const getStates = async () => {
    const res = await get({
      endpoint: `states`,
      // body: { ...payload },
      auth: false,
    });
    setStates(res?.data?.data);
  };

  // useEffect(() => {
  //   getStates();
  // }, []);

  const getCities = async (val) => {
    const pp = states.find((e) => e.name == val);
    const res = await get({
      endpoint: `regions/${pp.alias}`,
      // body: { ...payload },
      auth: false,
    });
    setCities(res?.data?.data);
  };

  const toFilter = (array) => {
    console.log(array);
    setUploadArray(uploadArray.filter((e) => e.id !== array.id));
  };

  return (
    <div className="add-bike">
      <ToDoorSearch />

      {!authUser.verified && <div className="bg-yellow-400 mt-5 p-4 flex justify-between items-center">
        <p className="text-sm md:text-base font-medium text-gray-800">
          Please complete your profile and Verify Account to access Add Bikes
        </p>
        <button
          className="ml-4 bg-gray-800 text-white font-medium py-3 px-4 rounded hover:bg-gray-700 transition duration-200"
          onClick={()=>history('/profile')}
        >
          Complete Profile
        </button>
      </div>
}
      <div class="pr-[15%]">
        {/* <div
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
        </div> */}
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
              size="medium"
              className="w-full bg-[#EBEBEB] border-none"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+234</InputAdornment>
                ),
              }}
              // type="number"
              value={phoneNumber}
              onChange={(e) => {
                const regex = /^[0-9\b]+$/;
                if (e.target.value === "" || regex.test(e.target.value)) {
                  handlePhoneNumber(e);
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
            <Typography className="font-bold">Date Of Birth</Typography>
            <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className="flex-between">
                  <DatePicker
                    className=" mr-8 w-full"
                    // label="Basic example"
                    value={dob}
                    onChange={(newValue) => {
                      // setWorkList({ ...workList, start_date: newValue });
                      // setStart_date(moment(newValue).format("YYYY-MM-DD"));

                      setDOB(moment(newValue).format("YYYY-MM-DD"));
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
              onChange={(e) => setDOB(e.target.value)}
              value={dob}
              rows={1.5}
            /> */}
          </div>
        </div>
        <div className="flex justify-between my-10">
          <div className="w-full mr-[5%]">
            <p className="font-bold">State</p>

            <Stack spacing={2}>
              <Autocomplete
                // freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top100Films.map((option) => option.title)}
                onChange={(e, val) => {
                  getCities(val);
                  setState(val);
                }}
                renderInput={(params) => (
                  <TextField
                    className="w-full bg-[#EBEBEB]"
                    multiline
                    rows={1.5}
                    {...params}
                    // value={'ji'}
                    // label="Search input"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            </Stack>
          </div>
          <div className="w-full ">
            <p className="font-bold">City</p>
            {/* <TextField
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-[#EBEBEB]"
              value={city}
              multiline={true}
              rows={1.5}
            /> */}
            <Stack spacing={2}>
              <Autocomplete
                // freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top10Films.map((option) => option.title)}
                onChange={(e, val) => {
                  // getCities(val);
                  setCity(val);
                }}
                renderInput={(params) => (
                  <TextField
                    className="w-full bg-[#EBEBEB]"
                    multiline
                    rows={1.5}
                    {...params}
                    // label="Search input"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            </Stack>
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
                    //   // setWorkList({ ...workList, start_date: newValue });
                    //   setBikeDate(moment(newValue).format("YYYY-MM-DD"));
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
            <PasswordTextField
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#EBEBEB]"
              // value={name}
              // multiline={true}
              rows={1.5}
              value={password}
            />
          </div>
          <div className="w-full ">
            <p className="font-bold">Confirm Password</p>
            <PasswordTextField
              className="w-full bg-[#EBEBEB]"
              // multiline={true}
              rows={1.5}
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
        </div>

        <div class="flex justify-between">
          <div>
            <input
              onChange={(e) => onFileChange(e, "profile", 1)}
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

          <div>
            <input
              onChange={(e) => onFileChange(e, "bike", 2)}
              style={{ display: "none" }}
              id="contained-button-file2"
              type="file"
            />
            <label htmlFor="contained-button-file2" className="mb-8">
              <Button variant="contained" color="primary" component="span">
                Upload Bike Picture
              </Button>
            </label>
          </div>

          <div>
            <input
              onChange={(e) => onFileChange(e, "driverLicense", 3)}
              style={{ display: "none" }}
              id="contained-button-file3"
              type="file"
            />
            <label htmlFor="contained-button-file3" className="mb-8">
              <Button variant="contained" color="primary" component="span">
                Upload liscence Picture
              </Button>
            </label>
          </div>
        </div>

        <div class="flex justify-between mt-5">
          {uploadArray.length > 0 &&
            uploadArray
              .sort((a, b) => a.id - b.id)
              .map((e) => (
                <div>
                  <div className="relative w-20">
                    <Avatar
                      className="w-32 h-32 border border-blue-300"
                      src={e.readerURL}
                    />
                    {/* <Typography>{ridersPictureName.name}</Typography> */}
                    <div
                      onClick={() => toFilter(e)}
                      className="p-1 bg-red-500 absolute w-4 h-4 flex justify-center hover:cursor-pointer items-center top-0 left-32 text-white rounded-full"
                    >
                      x
                    </div>
                  </div>
                  <Typography className="text-center font-bold">
                    {e.file.name}
                  </Typography>
                  <Typography className="text-center font-bold">
                    ( {e.type})
                  </Typography>
                </div>
              ))}
          {uploadArray.length <= 1 && <div></div>}
          {uploadArray.length <= 2 && <div></div>}
        </div>

        <div className="w-full flex justify-between my-8 gap-12">
          <Button
            disabled={!authUser.verifies}
            onClick={onSubmit}
            className="h-12 w-2/6 bg-primary-main"
          >
            Save
          </Button>

          <Button
            disabled={!authUser.verifies}
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
