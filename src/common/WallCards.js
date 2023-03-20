import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";
import LoginHeader from "common/LoginHeader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import toDoorLogo from "images/Ellipse 30.png";
import background from "images/background.png";

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import snake from "images/Mask group.png";
import trustedBy3 from "images/Rectangle 106.png";
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
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function WallCards(props) {
 
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

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

  return (
    <div className="relative">
      <Card
        className={
          props.rider
            ? "riders-bg text-white text-center mr-3"
            : props.plain
            ? "plain-bg"
            : props.green
            ? "bg-primary-main text-white"
            : props.big
            ? "text-left border "
            : " text-white text-center"
        }
        sx={{
          minWidth: 155,
          minHeight: !props.short && 120,
          maxHeight: props.short && 105,
        }}
       
      >
        
        <CardContent className={props.big ? "pr-24" : ""}>
          <div>
            <Typography
              className={
                props.plain || props.green
                  ? " text-left text-white z-10"
                  : props.dashboard
                  ? "text-left text-secondary-light z-10"
                  : "text-left text-primary-main font-bold z-10"
              }
              style={{ fontSize: 14, zIndex: 100 }}
            >
              {props.name || "Total Companies"}
            </Typography>
          </div>
          <div>
            <Typography
              variant={"h5"}
              className={
                props.green
                  ? "text-white text-left font- z-10"
                  : props.short
                  ? "text-left font- text-primary-main mb-3 z-10"
                  : props.small
                  ? "text-left font- text-primary-main mt-4"
                  : "text-left font- text-primary-main z-10 "
              }
            >
              {props.count} <span className="text-ssm">Naira</span>
            </Typography>

            {props.button && (
              <div class="mt-4 ">
                <Button
                  onClick={() => props.openModal()}
                  className="bg-[#F7AD2B] px-16 text-white"
                >
                  Withdraw
                </Button>
              </div>
            )}
          </div>
        </CardContent>

      </Card>
    </div>
  );
}

export default WallCards;
