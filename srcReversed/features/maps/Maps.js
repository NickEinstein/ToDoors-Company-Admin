import React, { useEffect, useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { BsCircleFill } from "react-icons/bs";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { RouteEnum } from "constants/RouteConstants";
import LoginHeader from "common/LoginHeader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import toDoorLogo from "images/Ellipse 30.png";
// import ManageCompanyCard from 'common/ManageCompanyCard'

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import gigLogo from "images/Ellipse 56.png";
import trustedBy3 from "images/Rectangle 106.png";
import io from "socket.io-client";
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import {
  Button,
  TableBody,
  TableCell,
  Table,
  Input,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  Typography,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WallCards from "common/WallCards";
import ToDoorSearch from "common/ToDoorSearch";
import { RiArrowLeftSLine } from "react-icons/ri";
import { get } from "services/fetch";
// import ManageCompanyCard from '.features/manageCompanies/ManageCompanyCard';
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from '@mui/styles';

function Trips({ switsh }) {
  const authUser = useAuthUser()
  const [map, setMap] = useState(/** @type google.maps.map*/ (null));
  const [distance, setDistance] = useState(/** @type google.maps.map*/ (null));
  const [duration, setDuration] = useState(/** @type google.maps.map*/ (null));
  const [directionResponse, setDirectionResponse] = useState(
    /** @type google.maps.map*/ (null)
  );
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [data, setData] = useState(null);

  const history = useNavigate();

   useEffect(() => {
     const fetchData = async () => {
       // const deleteRider = async () => {
       const res = await get({
         endpoint: `api/payment/getAllBanks`,
         //  body: { ...payload },
         auth: true,
       });
       //  setAllBikez(res.data.data);
     };

     const intervalId = setInterval(fetchData, 3000);
     return () => clearInterval(intervalId);
   }, []);


  const redirect = () => {
    history("/complete-signUp");
  };
// http://todoorapp.com:3000?token=
  const socket = io.connect(`https://todoorapp.com:3000?token=${localStorage.getItem('token')}`);

  const toEmit = () => {
    let payload = {
      user: {
        _id:useAuthUser._id
      },
    };

    // socket.emit("adminMapSocket", payload);
  };

  function createData(
    destination,
    rider,
    orderId,
    status,
    fee,
    departureDate,
    arrivalDate,
    timeDelay
  ) {
    return {
      destination,
      rider,
      orderId,
      status,
      fee,
      departureDate,
      arrivalDate,
      timeDelay,
    };
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAssvIlc0TbayfgN6C3rfGtlCXQckeystQ",
    libraries: ["places"],
  });
  //   const {isLoaded} = useJsApiLoader({
  //     googleMapsApiKey:'AIzaSyB6dttqGcdoqUQYT4rt4ZEd9_UOwP4GoMc',
  //   })

  if (!isLoaded) {
    return <p>isloaded</p>;
  }

  const calculateRoute = async (origin, destination) => {
    if (origin == "" || destination == "") {
      return;
    }
    //eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const result = await directionService.route({
      origin: origin,
      destination: destination,
      //eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionResponse(result);
    setDistance(result.routes[0].legs[0].distance.text);
    setDuration(result.routes[0].legs[0].duration.text);
  };

  //eslint-disable-next-line no-undef

  const center = {
    lat: 6.458985,
    lng: 3.601521,
  };
  const containerStyle = {
    width: "100%",
    height: "45vw",
  };
  return isLoaded ? (
    <div className="w-full relative">
      {/* <Button>Emit</Button> */}
      <div className="absolute w-full top-10 left-8 z-50">
        <ToDoorSearch pad={true} hide={true} />

        <div
          class="w-1/3 mt-4 pl-8 flex items-cente cursor-pointer"
          onClick={switsh}
        >
          <div
            style={{ border: "1px solid #494949" }}
            className="border-solid w-5 mr-2 rounded flex justify-center items-center"
          >
            <RiArrowLeftSLine
              className=""
              style={{ fontSize: "22px", color: "#494949" }}
            />
          </div>
          <p
            // onClick={() => setOpen(!open)}
            style={{ color: "#494949" }}
            className="text-xl font-semibold"
          >
            Back
          </p>
        </div>
      </div>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
        //   onUnmount={onUnmount}
      >
        <Marker position={center} />
        {directionResponse && (
          <DirectionsRenderer directions={directionResponse} />
        )}
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default Trips;
