import React, { useState } from "react";
import UserApi from "apis/UserApi";
import moment from "moment";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";
// import ManageCompanyCard from 'common/ManageCompanyCard'

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import gigLogo from "images/Ellipse 56.png";
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import {
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
import ToDoorSearch from "common/ToDoorSearch";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { put } from "services/fetch";

function EditBikes({editbikeObj}) {
  const [address, setAddress] = React.useState(editbikeObj?.address);
  const [city, setCity] = React.useState(editbikeObj?.city);
  const [phoneNumber, setPhoneNumber] = React.useState(editbikeObj?.phoneNo);
  const [state, setState] = React.useState(editbikeObj?.state);
  const [email, setEmail] = useState(editbikeObj?.email);
  const [name, setName] = useState(editbikeObj?.fname);
  const [password, setPassword] = useState(editbikeObj?.password);
  const [userId, setUserId] = useState(editbikeObj?._id);
  const [show, setShow] = useState(false);
  const [liscence, setLiscence] = useState(editbikeObj?.liscence);
  const [bikeCompany, setBikeCompany] = useState(
    editbikeObj?.bikeDetails?.company
  );
  const [bikeModel, setBikeModel] = useState(editbikeObj?.bikeDetails?.bikeModel);
  const [bikeRegNo, setBikeRegNo] = useState(editbikeObj?.bikeDetails?.regNo);
  const [bikeOwner, setBikeOwner] = useState(
    editbikeObj?.bikeDetails?.RC_ownerName
  );
  const [bikeDate, setBikeDate] = useState(editbikeObj?.bikeDetails?.regDate);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setformData] = useState({
    email: "",
    phoneNo: "",
    password: "",
    userType: "rider",
    companyId: "",
    fname: "",

    dob: "1993-12-07T23:00:00.000Z",
    bloodGroup: "B+",
    address: "",
    city: "",
    state: "",
    country: "Nigeria",
    bikeDetails: {
      type: "bike",
      company: "",
      regNo: "",
      RC_ownerName: "",
      bikeNo: "",
      bikeModel: "",
      // regDate: bikeDate,
    },
  });

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

  //   console.log(authUser);

  const { enqueueSnackbar } = useSnackbar();
  const [updateBikeMuation, updateBikeMutationResult] =
    UserApi.useUpdateBikeMutation({ userId });

  console.log(editbikeObj);

  
 

  const onSubmit = async () => {
    let payload = {
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
    };

    const res = await put({
      endpoint: `api/company/updateBike?userId=${userId}`,
      body: payload,
      auth: true,
    });

          enqueueSnackbar('updated successfully', { variant: "success" });

    console.log(res);
  };

//   const onSave = async () => {
//     // const  data = {
//     //       email: email,
//     //       phoneNo: phoneNumber,
//     //       password: password,
//     //       userType: "rider",
//     //       companyId: authUser._id,
//     //       fname: name,
//     //       // lname: null,
//     //       // email: "rider2@gmail.com",
//     //       // phoneNo: "",
//     //       // password:
//     //       //   "$2b$10$K2BQR9MZOVjVmSIjleNPuewEgJdsav8mXAs4AfaJfA3gO2k0FopaG",
//     //       dob: "1993-12-07T23:00:00.000Z",
//     //       bloodGroup: "B+",
//     //       address: address,
//     //       city: city,
//     //       state: state,
//     //       country: "Nigeria",
//     //       bikeDetails: {
//     //         type: "bike",
//     //         company: bikeCompany,
//     //         regNo: bikeRegNo,
//     //         RC_ownerName: bikeOwner,
//     //         bikeNo: '',
//     //         bikeModel: bikeModel,
//     //         // regDate: bikeDate,
//     //       },
//     //     }
//     // console.log(data)
//     try {
//       // alert('saveed')
//       const data = await addBikeMuation({
//         data: {
//           email: email,
//           phoneNo: phoneNumber,
//           password: password,
//           userType: "rider",
//           companyId: authUser._id,
//           fname: name,
//           // lname: null,
//           // email: "rider2@gmail.com",
//           // phoneNo: "",
//           // password:
//           //   "$2b$10$K2BQR9MZOVjVmSIjleNPuewEgJdsav8mXAs4AfaJfA3gO2k0FopaG",
//           dob: "1993-12-07T23:00:00.000Z",
//           bloodGroup: "B+",
//           address: address,
//           city: city,
//           state: state,
//           country: "Nigeria",
//           bikeDetails: {
//             type: "bike",
//             company: bikeCompany,
//             regNo: bikeRegNo,
//             RC_ownerName: bikeOwner,
//             bikeNo: "",
//             bikeModel: bikeModel,
//             regDate: bikeDate,
//           },
//         },
//       }).unwrap();
//       // TODO extra login
//       console.log(data.data);
//       enqueueSnackbar(data.message, { variant: "success" });
//       setAddress("");
//       setCity("");
//       setPhoneNumber("");
//       setState("");
//       setEmail("");
//       setName("");
//       setPassword("");
//       setConfirmPassword("");
//       setLiscence("");
//       // onSubmit('')
//       // // redirect();
//     } catch (error) {
//       enqueueSnackbar(error?.data?.message, "Failed to login", {
//         variant: "error",
//       });
//     }
//   };

  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }

  return (
    <div className="add-bike">
      {/* <ToDoorSearch /> */}

      <div class="w-full">
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
            disabled
              className="w-full bg-[#EBEBEB]"
              multiline={true}
              value={phoneNumber}
              rows={1.5}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between my-10">
          <div className="w-full mr-[5%]">
            <p className="font-bold">Email Address</p>
            <TextField
            disabled
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#EBEBEB]"
              value={email}
              multiline={true}
              rows={1.5}
            />
          </div>
          <div className="w-full">
            <p className="font-bold">Liscence Expiry</p>
            <TextField
              className="w-full bg-[#EBEBEB]"
              multiline={true}
              onChange={(e) => setLiscence(e.target.value)}
              value={liscence}
              rows={1.5}
            />
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
          <div className="w-full mr-[5%]">
            <p className="font-bold">Bike Company</p>
            <TextField
              onChange={(e) => setBikeCompany(e.target.value)}
              className="w-full bg-[#EBEBEB]"
              // value={name}
              // multiline={true}
              // rows={1.5}
              value={bikeCompany}
            />
          </div>
          <div className="w-full ">
            <p className="font-bold">Bike Model</p>
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
          <div className="w-full ">
            <p className="font-bold">Bike Owner</p>
            <TextField
              className="w-full bg-[#EBEBEB]"
              // multiline={true}
              // rows={1.5}
              onChange={(e) => setBikeOwner(e.target.value)}
              value={bikeOwner}
            />
          </div>
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
            <div>
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
            </div>
          </div>
        </div>

        {/* <div className="flex justify-between my-10">
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
        </div> */}

        <div className="w-full flex justify-between mb-8 gap-12">
          <Button onClick={onSubmit} className="h-12 w-2/6 bg-primary-main">
            Save
          </Button>

          {/* <Button
            onClick={() => onSave()}
            className="h-12 w-2/6 bg-primary-main"
          >
            Save & Continue
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default EditBikes;
