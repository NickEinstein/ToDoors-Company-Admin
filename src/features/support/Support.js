
import React, { useState } from 'react';
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
import LoginHeader from 'common/LoginHeader';
import customer from 'images/tabler_helmet.png';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import toDoorLogo from 'images/Ellipse 30.png'
// import ManageCompanyCard from 'common/ManageCompanyCard'

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import gigLogo from 'images/Ellipse 56.png'
import trustedBy3 from 'images/Rectangle 106.png'
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import { Button, Card, CardActions, CardContent, Input, MenuItem, Rating, Select, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WallCards from 'common/WallCards';
import ManageCompanyCard from 'features/manageCompanies/ManageCompanyCard';
import ManageCompaniesTable from 'features/manageCompanies/ManageCompaniesTable';

import { RiArrowLeftSLine } from 'react-icons/ri';
import SupportChart from './SupportChart';
import ToDoorSearch from 'common/ToDoorSearch';
function ManageRiders(props) {
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [state, setState] = React.useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  //   console.log(event)
  // };
  const history = useNavigate();


  const redirect = () => {

    // history('/complete-signUp');
  }


const tableArray = [
    {
        image:gigLogo,
        name:"Taiwo Daniel  ",
        company:"GIG Logistics",
        Id:"2234456",
        ratings:"4",
        message:"Hello",
    },

    {
        image:gigLogo,
        name:"Triumph Boyace  ",
        company:"GIG Logistics",
        Id:"2234456",
        message:"Hi",
        ratings:"4",
    },
    {
        image:gigLogo,
        name:"Tina Kumi  ",
        company:"GIG Logistics",
        Id:"2234456",
        message:"I've been waiting",
        ratings:"4",
    }
]

  const authUser = useAuthUser();

  console.log(authUser)

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
console.log(show)

const onSubmit = async ()=>{
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
          },
        }).unwrap();
        // TODO extra login
        console.log(data.data);
        enqueueSnackbar(data.message, { variant: "success" });
        // redirect();
      } catch (error) {
        enqueueSnackbar(error?.data?.message, "Failed to login", {
          variant: "error",
        });
      }
}

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
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full ">
            <p className="font-bold">Drivers Phone No.</p>
            <TextField
              className="w-full bg-[#EBEBEB]"
              multiline={true}
              rows={1.5}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
              rows={1.5}
            />
          </div>
          <div className="w-full">
            <p className="font-bold">Liscence Expiry</p>
            <TextField
              className="w-full bg-[#EBEBEB]"
              multiline={true}
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
              multiline={true}
              rows={1.5}
            />
          </div>
          <div className="w-full">
            <p className="font-bold">State</p>
            <TextField
              className="w-full bg-[#EBEBEB]"
              multiline={true}
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
              rows={2}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between my-10">
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
        </div>
        <div className="w-full mb-8">
          <Button onClick={onSubmit} className="h-12 w-2/6 bg-primary-main">
            Request verification
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ManageRiders;
