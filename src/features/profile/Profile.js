import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useSnackbar } from "notistack";
import { put } from "services/fetchUpload";
import useAuthUser from "hooks/useAuthUser";
import edit from "images/edit.svg";
import gigLogo from "images/Ellipse 56.png";
import pdf from "images/pdf.png";
import {
  Avatar,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
  const [uploadArray, setUploadArray] = useState([]);
  const [showProfile, setShowProfile] = useState(true);
  const [idInfo, setIdInfo] = useState("");
  const [CACdoc, setCACdoc] = useState("");
  const [count, setcount] = useState("");
  const history = useNavigate();

  const [profilePic, setProfilePic] = useState();
  const [idPic, setidPic] = useState();

  const getUserQueryResult = UserApi?.useGetUserQuery({ userId, count });
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

  const onFileChange = (event, type, index) => {
    console.log(type);
    console.log(index);

    console.log(uploadArray);
    // Update the state
    // setSelectedFile(event.target.files[0]);
    if (event.target.files[0]) {
      //  setPicture(event.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        // setImgData(reader.result);
        const extension = event.target.files[0].name
          .split(".")
          .pop()
          .toLowerCase();

        if (index == 1) {
          if (
            //  extension === "pdf" ||
            ["jpg", "jpeg", "png"].includes(extension)
          ) {
            setProfilePic({
              id: index,
              file: event.target.files[0],
              readerURL: reader.result,
              type: type,
            });
            onFileUpload(event.target.files[0], type);
          } else {
            alert("Unsupported file type. Please select an image.");
            event.target.value = null; // Reset the file input element
            return;
          }
        }

        if (index == 2) {
          if (
            extension === "pdf" ||
            ["jpg", "jpeg", "png"].includes(extension)
          ) {
            setidPic({
              id: index,
              file: event.target.files[0],
              readerURL: reader.result,
              type: type,
            });
            onFileUpload(event.target.files[0], type);
          } else {
            alert("Unsupported file type. Please select an image.");
            event.target.value = null; // Reset the file input element
            return;
          }
        }

        if (index == 3) {
          if (
            extension === "pdf" ||
            ["jpg", "jpeg", "png"].includes(extension)
          ) {
            setCACdoc({
              id: index,
              file: event.target.files[0],
              readerURL: reader.result,
              type: type,
            });
            onFileUpload(event.target.files[0], type);
          } else {
            alert("Unsupported file type. Please select an image.");
            event.target.value = null; // Reset the file input element
            return;
          }
        }
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onFileUpload = async (selectedFile, type) => {
    const formData = new FormData();

    // Update the formData object
    formData.append("image", selectedFile);

    // Details of the uploaded file
    onUpload(formData, type);
  };

  const { enqueueSnackbar } = useSnackbar();
  const [updateUserMuation, updateUserMutationResult] =
    UserApi.useUpdateUserMutation();
  const [updateUserUploadMuation, updateUserUploadMutationResult] =
    UserApi.useUpdateUserUploadMutation();

  const onSubmit = async () => {
    try {
      const data = await updateUserMuation({
        data: yy,
      }).unwrap();
      enqueueSnackbar(data.message, { variant: "success" });
      setcount((prev) => prev + 1);
    } catch (error) {
      enqueueSnackbar(error?.data?.message, "Failed to login", {
        variant: "error",
      });
    }
  };

  const onUpload = async (zz, type) => {
    const res = await put({
      endpoint: `api/users/upload`,
      body: zz,
      auth: true,
      updateType: type,
    });

    if (res.data.success) {
      setcount((prev) => prev + 1);
      enqueueSnackbar(res?.data?.message, { variant: "success" });
    } else enqueueSnackbar(res?.data?.message, { variant: "error" });
  };

  const toFilter = (array) => {
    // alert();
    console.log(array);
    setUploadArray(uploadArray?.filter((e) => e?.id !== array?.id));
    // console.log(k);
  };

  return (
    <div className="add-bike">
      <ToDoorSearch />

      <div class="">
        {!showProfile && (
          <div className="flex items-center mb-2 cursor-pointer w-16 p-2">
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
                <div class="flex items-center gap-5">
                  <Typography className="font-semibold">Address:</Typography>
                  <Typography>{user?.homeAddress}</Typography>
                </div>
                <div class="flex items-center gap-5">
                  <Typography className="font-semibold">
                    Phone Number:
                  </Typography>
                  <Typography>{user?.phoneNo}</Typography>
                </div>
                <div class="flex items-center gap-5">
                  <Typography className="font-semibold">
                    Email address:
                  </Typography>
                  <Typography>{user?.email}</Typography>
                </div>
                <div class="flex gap-6">
                  <div>
                    <Typography className="font-semibold">ID:</Typography>
                    {user?.idPhotoUrl?.endsWith(".pdf") ? (
                      <a href={user?.idPhotoUrl} target="_blank">
                        <img
                          className="w-full h-32  border-blue-300"
                          src={pdf}
                        />
                      </a>
                    ) : (
                      <img
                        className="w-[300px] h-32  border-blue-300"
                        src={user?.idPhotoUrl}
                      />
                    )}
                  </div>
                  <div>
                    <Typography className="font-semibold">
                      CAC Document:
                    </Typography>
                    {user?.companyRegistrationPhotoUrl?.endsWith(".pdf") ? (
                      <a
                        href={user?.companyRegistrationPhotoUrl}
                        target="_blank"
                      >
                        <img
                          className="w-full h-32  border-blue-300"
                          src={pdf}
                        />
                      </a>
                    ) : (
                      <img
                        className="w-[300px] h-32  border-blue-300"
                        src={user?.companyRegistrationPhotoUrl}
                      />
                    )}
                  </div>
                </div>
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
                <p className="font-bold">House/Office Address</p>
                <TextField
                  className="w-full bg-[#EBEBEB]"
                  multiline={true}
                  value={address}
                  rows={2}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <div class="flex items-center   justify-between w-full px-8">
              <div class="flex flex-col items-center gap-5 w-1/2 ">
                <Typography className="font-bold">
                  Upload Profile Picture
                </Typography>

                <div className="">
                  <input
                    onChange={(e) => onFileChange(e, "profile", 1)}
                    style={{ display: "none" }}
                    id="contained-button-file"
                    type="file"
                  />
                  <label htmlFor="contained-button-file" className="mb-8">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      Upload Profile Picture
                    </Button>
                  </label>
                </div>
                <div>
                  {profilePic && (
                    <div className="relative w-20">
                      <Avatar
                        className="w-32 h-32 border border-blue-300"
                        src={profilePic?.readerURL}
                      />
                      {/* <Typography>{ridersPictureName.name}</Typography> */}
                      <div
                        onClick={() => setProfilePic("")}
                        className="p-1 bg-red-500 absolute w-4 h-4 flex justify-center hover:cursor-pointer items-center top-0 left-32 text-white rounded-full"
                      >
                        x
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div class=" flex flex-col items-center gap-5 justify-center w-full ">
                <div class="flex flex-col w-1/2 items-center gap-5 mt-8 justify-center ">
                  <div class="flex items-center gap-5 justify-center w-full ">
                    <Typography className="font-semibold">
                      Upload Valid ID Card
                    </Typography>
                  </div>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Age"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        setIdInfo(e.target.value);
                      }}
                    >
                      <MenuItem value={"Int'l passport"}>
                        Int'l passport
                      </MenuItem>
                      <MenuItem value={"Drivers license"}>
                        Drivers license
                      </MenuItem>
                      <MenuItem value={"NIN"}>NIN</MenuItem>
                      <MenuItem value={"Voters card"}>Voters card</MenuItem>
                    </Select>
                  </FormControl>
                  <div>
                    <input
                      onChange={(e) => onFileChange(e, "idPhoto", 2)}
                      style={{ display: "none" }}
                      id="contained-button-file3"
                      type="file"
                    />
                    <label htmlFor="contained-button-file3" className="mb-8">
                      <Button
                        variant="contained"
                        color="primary"
                        component="span"
                      >
                        Upload {idInfo}
                      </Button>
                    </label>
                  </div>
                  {idPic && (
                    <div>
                      <div className="relative">
                        <img
                          className="w-[400px] h-32 border border-blue-300"
                          src={idPic?.readerURL}
                        />
                        {/* <Typography>{ridersPictureName.name}</Typography> */}
                        <div
                          onClick={() => setidPic("")}
                          className="p-1 bg-red-500 absolute w-4 h-4 flex justify-center hover:cursor-pointer items-center top-0 -right-5 text-white rounded-full"
                        >
                          x
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div class="flex flex-col items-center gap-5 w-1/2 ">
                <Typography className="font-bold">Upload CAC Doc</Typography>

                <div className="">
                  <input
                    onChange={(e) => onFileChange(e, "companyRegistration", 3)}
                    style={{ display: "none" }}
                    id="contained-button-file"
                    type="file"
                  />
                  <label htmlFor="contained-button-file" className="mb-8">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      Upload CAC Document
                    </Button>
                  </label>
                </div>
                <div>
                  {CACdoc && (
                    <div className="relative w-20">
                      <Avatar
                        className="w-32 h-32 border border-blue-300"
                        src={CACdoc?.readerURL}
                      />
                      {/* <Typography>{ridersPictureName.name}</Typography> */}
                      <div
                        onClick={() => setCACdoc("")}
                        className="p-1 bg-red-500 absolute w-4 h-4 flex justify-center hover:cursor-pointer items-center top-0 left-32 text-white rounded-full"
                      >
                        x
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full mb-8 flex justify-center mt-12">
              <Button
                disabled={
                  !(
                    (user.profileUrl && user.idPhotoUrl) ||
                    (profilePic && idPic)
                  )
                }
                onClick={onSubmit}
                className="h-12 w-2/6 bg-primary-main"
              >
                Update Company Profile
              </Button>
            </div>
            <Typography className="text-red-600 text-base font-bold w-full text-center mb-8">
              {!(
                (user.profileUrl && user.idPhotoUrl) ||
                (profilePic && idPic)
              ) && "Please make sure to upload an ID and Profile Photo"}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageRiders;
