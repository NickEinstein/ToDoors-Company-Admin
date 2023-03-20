import React, { useEffect, useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import moment from "moment";
import { useSnackbar } from "notistack";
import { post, get, put } from "services/fetch";

// import { Button, TextField, Typography } from "@mui/material";
import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import toDoorLogo from "images/Ellipse 30.png";
// import ManageCompanyCard from 'common/ManageCompanyCard'
// import ManageTripsTable from "./ManageBikesTable";
// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
// import BorderColorIcon from "@mui/icons-material/BorderColorj";
import gigLogo from "images/Ellipse 56.png";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import edit from "images/edit.svg";
import { GiTrashCan } from "react-icons/gi";
import trustedBy3 from "images/Rectangle 106.png";
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import {
  Button,
  TableBody,
  TableCell,
  Table,
  TextField,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  Typography,
  Badge,
  Rating,
  Modal,
  Box,
  Avatar,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WallCards from "common/WallCards";
import TripsMap from "./TripsMap";
import { selectRowsFn } from "@tanstack/react-table";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// import ManageCompanyCard from '.features/manageCompanies/ManageCompanyCard';
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from '@mui/styles';
import { RiArrowLeftSLine } from "react-icons/ri";
import { LocalizationProvider } from "@mui/x-date-pickers";
import ToDoorSearch from "common/ToDoorSearch";
import { AiTwotoneDelete } from "react-icons/ai";
import EditBikes from "./EditBikes";

function Trips(props) {
  const [userId, setUserId] = React.useState();
  const [editbikeObj, setEditbikeObj] = React.useState();

  const [showBikeDetails, setShowBikeDetails] = React.useState(false);
  const [allBikez, setAllBikez] = React.useState([]);

  // const [open, setOpen] = React.useState("");
  const [opens, setOpens] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [route, setRoute] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    getBikes()
  };

 
  const history = useNavigate();

  const getUserQueryResult = UserApi?.useGetUserQuery({ userId });
  const user = getUserQueryResult?.data;

  // const getgetAllBikesQueryResult = UserApi?.useGetAllBikesQuery();

  // let allBikes = getgetAllBikesQueryResult?.data?.data;

  const redirect = () => {
    history("/complete-signUp");
  };

  useEffect(() => {
    getBikes();
  }, []);

  const getBikes = async () => {
    // const deleteRider = async () => {
    const res = await get({
      endpoint: `api/company/bikes`,
      //  body: { ...payload },
      auth: true,
    });
    setAllBikez(res?.data?.data.sort((a, b) => a.created_at - b.created_at).reverse());
  };
  const [deleteBikeMuation, deleteBikeMutationResult] =
    UserApi.useDeleteBikeMutation();

  const toDelete = async (userId) => {
    try {
      const data = await deleteBikeMuation({
        data: { userId },
      });
      // window.location.reload();
      getBikes();
      // TODO extra login
      // redirect()
      enqueueSnackbar("Bike deleted successfully!", { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error?.data?.message, "Failed to login", {
        variant: "error",
      });
    }
  };

  const toEdit = async (obj) => {
    handleClickOpen()
    setEditbikeObj(obj?.obj);
  };

  function createData(
    place,
    origin,
    image,
    destination,
    rider,
    orderId,
    status,
    fee,
    departureDate,
    arrivalDate,
    timeDelay,
    id,
    obj
  ) {
    return {
      place,
      origin,
      image,
      destination,
      rider,
      orderId,
      status,
      fee,
      departureDate,
      arrivalDate,
      timeDelay,
      id,
      obj,
    };
  }

  let raws = allBikez?.map((e) =>
    createData(
      e.fname,
      e.state,
      e.profileUrl,
      e.bikeDetails.regNo,
      e.phoneNo,
      moment(e?.created_at).format("ll"),
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-",
      "",
      e._id,
      e
    )
  );

  const rows = [
    createData(
      "Lagos",
      "George Femi",
      "435",
      "NGN30,908",
      "WXHDGDJKGG",
      "Delivered",
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-"
    ),
    createData(
      "Lagos",
      "George Femi",
      "435",
      "NGN30,908",
      "WXHDGDJKGG",
      "Delivered",
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-"
    ),
    createData(
      "Lagos",
      "George Femi",
      "435",
      "NGN30,908",
      "WXHDGDJKGG",
      "Delivered",
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-"
    ),
    createData(
      "Lagos",
      "George Femi",
      "435",
      "NGN30,908",
      "WXHDGDJKGG",
      "Delivered",
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-"
    ),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const tableArray = [
    {
      image: gigLogo,
      name: "Nickky Samuel jonas  ",
      company: "GIG Logistics",
      Id: "2234456",
      ratings: "4",
    },

    {
      image: gigLogo,
      name: "John jimmy Samuel  ",
      company: "GIG Logistics",
      Id: "2234456",
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

  const handleShow = (e) => {
    setShow(true);
    setRoute(e);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    minHeight: "520px",
    bgcolor: "background.paper",
    borderRadius: "3%",
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }
  //  const useRowStyles = makeStyles({
  //   root: ({ open }) => ({
  //     backgroundColor: "pink"
  //   }),
  //   tableBody: {
  //     "& > :not(:last-child)": {
  //       borderBottom: "25px solid red"
  //     }
  //   }
  // });

  // const classes = useRowStyles();

  return (
    <div>
      <ToDoorSearch />
      {!show && (
        <div className="">
          <div sx={{ minWidth: 650 }} aria-label="simple table">
            <div className="mt-3">
              {raws?.map((row) => (
                <div
                  onClick={() => {
                    setUserId(row.id);
                  }}
                  className="flex my-5"
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    marginTop: 10,
                    backgroundColor: "",
                  }}
                >
                  <div
                    onClick={() => setOpens(true)}
                    className="w-1/5 border3b px-3 py-3 flex gap-2 items-center  text-center"
                  >
                    <Avatar
                      className="w-[52px] h-[52px] rounded-full"
                      src={row?.image}
                    />

                    <div>
                      <Button className="h-7 bg-primary-main">
                        {row.origin}
                      </Button>
                      <p className="font-semibold my-2">{row.place}</p>
                    </div>
                  </div>
                  <div className="w-1/5  px-3 py-3  border3b text-center">
                    <p className="text-[#959595] text-[11px] h-6">
                      Bike Reg No.
                    </p>
                    <p className="font-semibold my-2">{row.destination}</p>
                  </div>
                  <div className="w-1/5  px-3 py-3  border3b text-center">
                    <p className="text-[#959595] text-[11px] h-6">
                      Phone Number
                    </p>
                    <p className="font-semibold my-2">{row.rider}</p>
                  </div>
                  <div className="w-1/5  px-3 py-3  border3b text-center">
                    <p className="text-[#959595] text-[11px] h-6">Reg Date</p>
                    <p className="font-semibold my-2">{row.orderId}</p>
                    {/* <Rating className="my-2" value={4} /> */}
                  </div>
                  <div className="w-1/5 cursor-pointer flex gap-5 items-center px-3 py-3  border3b text-center">
                    <div class="ml-16">
                      <GiTrashCan
                        className="mt-2 ml-2 "
                        style={{ color: "#888888" }}
                        size={26}
                        onClick={() => toDelete(row.id)}
                      />

                      <p className="text-[#959595] text-[11px] text-left mt-1">
                        Remove
                      </p>
                    </div>{" "}
                    <div>
                      <BorderColorIcon
                        className="mt-2 ml-2 "
                        style={{ color: "#888888" }}
                        size={26}
                        onClick={() => toEdit(row)}
                      />
                      <p className="text-[#959595] text-[11px] text-left mt-1 ml-3">
                        Edit
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* <Button variant="outlined" onClick={}>
              Open alert dialog
            </Button> */}
            <Dialog
              open={open}
              onClose={handleClose}
              fullWidth
              maxWidth="lg"
              style={{ width: "" }}
              className=""
              // aria-labelledby="alert-dialog-title"
              // aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Edit Rider"}</DialogTitle>
              <DialogContent className="w-full ">
                <EditBikes
                  handleClose={handleClose}
                  editbikeObj={editbikeObj}
                />
              </DialogContent>
              {/* <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                  Agree
                </Button>
              </DialogActions> */}
            </Dialog>
          </div>
        </div>
      )}

      {/* <ManageTripsTable tableArray={tableArray} /> */}

      {show && (
        <div>
          <div>
            <div
              onClick={() => setShow(!show)}
              className="flex items-center mb-8 cursor-pointer w-16 p-2"
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
              <p style={{ color: "#494949" }} className="text-base">
                Back
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="w-full flex items-center justify-center">
        <TripsMap route={route} width={show} />
      </div>

      <Modal
        // open={true}
        open={opens}
        onClose={() => setOpens(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style}>
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
                </div>
                <div className="mt-4">
                  <Typography className="font-bold" variant="h5">
                    {user?.fname}
                  </Typography>
                </div>
              </div>
              <Divider className="my-8" />
              <div class="flex gap-20">
                <div className=" gap-16 font-semibold">
                  <Typography className="my-3 font-semibold">
                    Total Earnings
                  </Typography>
                  <Typography className="font-semibold text-primary-main">
                    {" "}
                    XXXXXXX
                  </Typography>
                </div>
                <div className=" font-semibold">
                  <Typography className="my-3 font-semibold">
                    No Of Rides
                  </Typography>
                  <Typography className="font-semibold text-primary-main">
                    XXXXX
                  </Typography>
                </div>
              </div>
              <Divider className="my-8" />
              <div class="flex gap-16 ">
                <div className="flex flex-col gap-3 font-semibold">
                  <Typography className="font-semibold">Address:</Typography>
                  <Typography className="font-semibold">
                    Phone Number:
                  </Typography>
                  <Typography className="font-semibold">
                    Email address:
                  </Typography>
                  <Typography className="font-semibold">ID Card:</Typography>
                  <Typography className="font-semibold">
                    Last Login Image
                  </Typography>
                </div>
                <div className="flex flex-col gap-3">
                  <Typography>{user?.city}</Typography>
                  <Typography>{user?.phoneNo}</Typography>
                  <Typography>{user?.email}</Typography>
                  <Typography>{"****"}</Typography>
                  <Typography>{"***"}</Typography>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default Trips;
