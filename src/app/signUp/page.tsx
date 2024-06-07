// "use client";
// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Typography,
//   Container,
//   Card,
//   CardContent,
//   CardActions,
//   Grid,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { CircularProgress } from "@mui/material";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../style/signUp.css";
// import Link from "next/link";
// import Navbar from "../component/Navbar";
// import Footer from "../pages/footer";
// const Signup: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [notification, setNotification] = useState({ type: "", message: "" });

//   //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   //     const { name, value } = event.target;
//   //     setPayload((prevPayload) => ({
//   //       ...prevPayload,
//   //       [name]: value,
//   //     }));

//   //     if (name === "password") {
//   //       const passwordValue = value;
//   //       const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;

//   //       if (!passwordPattern.test(passwordValue)) {
//   //         setNotification({
//   //           type: "error",
//   //           message:
//   //             "Password must be at least 8 characters long, contain one uppercase letter, one special symbol, and one number.",
//   //         });
//   //       } else {
//   //         setNotification({ type: "", message: "" });
//   //       }
//   //     }
//   //   };

//   //   const handleSubmit = async (event: any) => {
//   //     event.preventDefault();
//   //     setIsLoading(true);

//   //     try {
//   //       const userCredential = await createUserWithEmailAndPassword(
//   //         auth,
//   //         payload.email,
//   //         payload.password
//   //       );
//   //       console.log(userCredential);
//   //       addDoc(collection(db, "users"), {
//   //         userEmail: payload.email,
//   //         password: payload.password,
//   //         uid: userCredential.user.uid,
//   //         name: payload.username,
//   //       });
//   //       toast.success("User Successfully created!", { autoClose: 1500 });
//   //       setTimeout(() => {
//   //         navigate("/");
//   //       }, 1500);
//   //     } catch (error) {
//   //       console.log("error", error);
//   //       toast.error("Email Already in use. Please use another email.");
//   //     } finally {
//   //       setIsLoading(false);
//   //       setPayload({
//   //         email: "",
//   //         username: "",
//   //         password: "",
//   //       });
//   //     }
//   //   };

//   return (
//     <>
//       <div className="container">
//         <Navbar />
//         <ToastContainer
//           position="top-right"
//           autoClose={1500}
//           hideProgressBar={false}
//           closeOnClick
//           pauseOnHover
//           draggable
//         />

//         <Container component="main" maxWidth="xs">
//           <Card className="card">
//             <CardContent>
//               <Typography component="h1" variant="h5">
//                 Register
//               </Typography>
//               {/* <form onSubmit={handleSubmit}> */}
//               <form>
//                 <TextField
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="email"
//                   label="email"
//                   name="email"
//                   autoComplete="email"
//                   autoFocus
//                   // value={payload.email}
//                   // onChange={handleInputChange}
//                 />
//                 <TextField
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="username"
//                   label="username"
//                   name="username"
//                   autoComplete="username"
//                   autoFocus
//                   // value={payload.username}
//                   // onChange={handleInputChange}
//                 />
//                 <TextField
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   id="password"
//                   autoComplete="current-password"
//                   // value={payload.password}
//                   // onChange={handleInputChange}
//                   error={notification.type === "error"}
//                   helperText={notification.message}
//                   type="password"
//                 />

//                 <CardActions className="cardActions">
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                     startIcon={
//                       isLoading ? (
//                         <CircularProgress size={20} color="inherit" />
//                       ) : null
//                     }
//                   >
//                     {isLoading ? "Creating Account..." : "Submit"}
//                   </Button>
//                 </CardActions>
//               </form>
//             </CardContent>
//             <CardContent>
//               <Link href="/login">Already signed up? Login here</Link>
//             </CardContent>
//           </Card>
//         </Container>
//         <Grid item xs={6} sm={6} md={6} lg={6}>
//           <img
//             src="https://brandroofsolutions.com/wp-content/uploads/2020/12/cms-and-ecommerce.gif"
//             alt="Background"
//           />
//         </Grid>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Signup;

"use client";
import React, { useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../pages/footer";
import "../style/signUp.css";
import Image from "next/image";
const Signup: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ type: "", message: "" });

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
                Register
              </Typography>
              <form>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  id="password"
                  autoComplete="current-password"
                  error={notification.type === "error"}
                  helperText={notification.message}
                  type="password"
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
                    {isLoading ? "Creating Account..." : "Submit"}
                  </Button>
                </CardActions>
              </form>
            </CardContent>
            <CardContent>
              <Link href="/login">Already signed up? Login here</Link>
            </CardContent>
          </Card>
        </Container>
        {/* <Grid item xs={12} className="image-container"> */}
        <Grid item xs={6} sm={6} md={6} lg={6} className="image-container">
          <Image
            src="https://brandroofsolutions.com/wp-content/uploads/2020/12/cms-and-ecommerce.gif"
            alt="Background"
            className="image"
            width={205}
            height={205}
          />
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
