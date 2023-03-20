import React, { useEffect, useState } from "react";
import useAuthUser from "hooks/useAuthUser";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import ToDoorSearch from "common/ToDoorSearch";
import { RiArrowLeftSLine } from "react-icons/ri";
import { get } from "services/fetch";

function Trips({ switsh }) {
  const authUser = useAuthUser()
  const [map, setMap] = useState(/** @type google.maps.map*/ (null));
  const [distance, setDistance] = useState(/** @type google.maps.map*/ (null));
  const [duration, setDuration] = useState(/** @type google.maps.map*/ (null));
  const [directionResponse, setDirectionResponse] = useState(
    /** @type google.maps.map*/ (null)
  );
  


  const history = useNavigate();

   useEffect(() => {
     const fetchData = async () => {
       const res = await get({
         endpoint: `api/payment/getAllBanks`,
         auth: true,
       });
     };

     const intervalId = setInterval(fetchData, 3000);
     return () => clearInterval(intervalId);
   }, []);


  

  

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
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default Trips;
