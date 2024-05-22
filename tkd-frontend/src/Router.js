import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
import makeStyles from "@mui/styles/makeStyles";
import SignIn from "./component/login";
import Home from "./component/home";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    padding: 0,
    height: "100vh",
  },
}));

const Routers = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.content} maxWidth={false}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Container>
  );
};

export default Routers;
