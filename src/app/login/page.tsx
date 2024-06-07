"use client";
import React, { useState } from "react";
import Link from "next/link";

import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  Grid,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/login.css";
import Navbar from "../component/Navbar";
import Footer from "../pages/footer";
import Image from "next/image";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  //   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     console.log("submitted");
  //   };

  return (
    <>
      <div className="container">
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
        />

        <Container component="main" maxWidth="xs">
          <Card className="card">
            <CardContent>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <form>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Email"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={(
                            e: React.MouseEvent<HTMLButtonElement>
                          ) => e.preventDefault()}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <CardActions className="cardActions">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={
                      isLoading ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : null
                    }
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </CardActions>
              </form>
            </CardContent>
            <CardContent>
              <Link href="/signUp">Or sign-up here</Link>
            </CardContent>
          </Card>
        </Container>
        <Grid item xs={6} sm={6} md={6} lg={6} className="image-container">
          <Image
            className="image"
            src="https://mosodigital.com/wp-content/uploads/2021/07/E-Commerce-Shopping-animated-graphic-green.gif"
            alt="Background"
            width={205}
            height={205}
            // layout="fill"
            // objectFit="cover"
          />
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Login;
