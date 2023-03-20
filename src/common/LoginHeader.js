import React from "react";
import toDoorLogo from "images/ToDoorLogo.png";
import { useNavigate } from "react-router-dom";

const LoginHeader = (prop) => {
  const history = useNavigate();
  const redirect = () => {
    history("/");
  };
  return (
    <div className="flex ">
      <div className="flex items-center">
        <div className="flex relative items-center">
          <img
            src={toDoorLogo}
            alt="softwork logo"
            className="cursor-pointer w-36"
            onClick={redirect}
          />
        </div>
      </div>
    </div>
  );
};
export default LoginHeader;
