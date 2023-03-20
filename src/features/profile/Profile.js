import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useSnackbar } from "notistack";
import {put} from "services/fetchUpload";
import useAuthUser from "hooks/useAuthUser";
import edit from "images/edit.svg";
import gigLogo from "images/Ellipse 56.png";
import {
  Avatar,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import ToDoorSearch from "common/ToDoorSearch";
function ManageRiders(props) {

 const authUser = useAuthUser();


 

  const [address, setAddress] = React.useState(authUser?.homeAddress);
  const [city, setCity] = React.useState(authUser?.city);
  const [phoneNumber, setPhoneNumber] = React.useState(authUser?.phoneNo);
  const [state, setState] = React.useState(authUser?.state);
  const [email, setEmail] = useState(authUser?.email);
  const [companyName, setCompanyName] = useState(authUser.fname);
  const [country, setCountry] = useState(authUser?.country);
  const [userId, setUserId] = React.useState(authUser._id);
  const [showProfile, setShowProfile] = useState(true);
  const history = useNavigate();



  const getUserQueryResult = UserApi?.useGetUserQuery({ userId });
  const user = getUserQueryResult?.data;


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

  const  onFileChange = (event) => {
onFileUpload(event.target.files[0])

  };

  const onFileUpload = async  (selectedFile) => {
    const formData = new FormData();

    // Update the formData object
    formData.append("image", selectedFile);

    // Details of the uploaded file
onUpload(formData)
  };
     

 

  const { enqueueSnackbar } = useSnackbar();
  const [updateUserMuation, updateUserMutationResult] =
    UserApi.useUpdateUserMutation();
  const [updateUserUploadMuation, updateUserUploadMutationResult] =
    UserApi.useUpdateUserUploadMutation();


  const onSubmit = async () => {
    
    try {
      const data = await updateUserMuation({
        data: yy
      }).unwrap();
      enqueueSnackbar(data.message, { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error?.data?.message, "Failed to login", {
        variant: "error",
      });
    }
  };

  const onUpload = async (zz) => {
     const res = await put({
       endpoint: `api/users/upload`,
             body: zz,
            auth: true,
     });


     if(res.data.success)
     enqueueSnackbar(res?.data?.message, { variant: "success" });
     else
     enqueueSnackbar(res?.data?.message, { variant: "error" });



  };


  return (
    <div className="add-bike">
      <ToDoorSearch />

      <div class="">
        {!showProfile && (
          <div
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
             
             
              <div className="flex">
                <Avatar
                  sx={{ width: 100, height: 100 }}
                  src={user?.profileUrl}
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
                disabled
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
                disabled
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
            <div className="w-full mb-8 mt-4">
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
