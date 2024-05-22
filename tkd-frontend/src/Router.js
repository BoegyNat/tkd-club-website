import React, { useEffect } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";

import Login from "./components/pages/LoginPage";

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
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/unauthorized" component={UnauthorizedPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Container>
  );
};

export default Routers;
