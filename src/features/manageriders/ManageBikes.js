import React, { useEffect, useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import moment from "moment";
import { useSnackbar } from "notistack";
import gigLogo from "images/Ellipse 56.png";
import { GiTrashCan } from "react-icons/gi";

import BorderColorIcon from "@mui/icons-material/BorderColor";
import {
  Button,
  Typography,
  Modal,
  Box,
  Avatar,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ToDoorSearch from "common/ToDoorSearch";
import EditBikes from "./EditBikes";
import { get } from "services/fetLocation";

function Trips(props) {
  const [userId, setUserId] = React.useState();
  const [editbikeObj, setEditbikeObj] = React.useState();

  const [allBikez, setAllBikez] = React.useState([]);

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

  const redirect = () => {
    history("/complete-signUp");
  };

  useEffect(() => {
    getBikes();
  }, []);

  const getBikes = async () => {
    const res = await get({
      endpoint: `api/company/bikes`,
      auth: true,
    });
    setAllBikez(res?.data?.data?.sort((a, b) => a.created_at - b.created_at).reverse());
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
let raws =[]
 raws = allBikez?.length
   ? allBikez?.map((e) =>
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
     )
   : [];

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
      redirect();

      try {
        const data = await loginMuation({ data: values }).unwrap();
        // TODO extra login
        enqueueSnackbar("Logged in successful", { variant: "success" });
      } catch (error) {
        enqueueSnackbar(error?.data?.message, "Failed to login", {
          variant: "error",
        });
      }
    },
  });

 
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

  return (
    <div>
      <ToDoorSearch />
      <Typography variant="h5" className="my-8">
        Manage Riders/Bikes
      </Typography>

      {raws?.length <1 && <Typography className="text-center mt-36" variant="h3">No Registered Riders For This Company</Typography>}

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
            <Dialog
              open={open}
              onClose={handleClose}
              fullWidth
              maxWidth="lg"
              style={{ width: "" }}
              className=""
            >
              <DialogTitle id="alert-dialog-title">{"Edit Rider"}</DialogTitle>
              <DialogContent className="w-full ">
                <EditBikes
                  handleClose={handleClose}
                  editbikeObj={editbikeObj}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}


     
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
