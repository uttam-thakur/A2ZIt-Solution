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
//   CircularProgress,
// } from "@mui/material";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Link from "next/link";
// import Navbar from "../component/Navbar";
// import Footer from "../pages/footer";
// import "../style/signUp.css";
// import Image from "next/image";
// import signup from "../services/services";

// const Signup: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [notification, setNotification] = useState({ type: "", message: "" });
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//     password_confirmation: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       await signup(
//         form.username,
//         form.email,
//         form.password,
//         form.password_confirmation
//       );
//       toast.success("Account created successfully!");
//       // Redirect or clear the form as needed
//     } catch (error: any) {
//       toast.error(error.response?.data?.message || "Failed to create account");
//     } finally {
//       setIsLoading(false);
//     }
//   };

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
//               <form onSubmit={handleSubmit}>
//                 <TextField
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="username"
//                   label="Username"
//                   name="username"
//                   autoComplete="username"
//                   autoFocus
//                   value={form.username}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email"
//                   name="email"
//                   autoComplete="email"
//                   value={form.email}
//                   onChange={handleChange}
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
//                   type="password"
//                   value={form.password}
//                   onChange={handleChange}
//                   error={notification.type === "error"}
//                   helperText={notification.message}
//                 />
//                 <TextField
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Confirm Password"
//                   id="password"
//                   autoComplete="current-password"
//                   type="password"
//                   value={form.password_confirmation}
//                   onChange={handleChange}
//                   error={notification.type === "error"}
//                   helperText={notification.message}
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
//         <Grid item xs={6} sm={6} md={6} lg={6} className="image-container">
//           <Image
//             src="https://brandroofsolutions.com/wp-content/uploads/2020/12/cms-and-ecommerce.gif"
//             alt="Background"
//             className="image"
//             width={205}
//             height={205}
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
import signup from "../services/services";

const Signup: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ type: "", message: "" });
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNotification({ type: "", message: "" });

    if (form.password !== form.password_confirmation) {
      setNotification({ type: "error", message: "Passwords do not match" });
      return;
    }

    setIsLoading(true);

    try {
      await signup(
        form.username,
        form.email,
        form.password,
        form.password_confirmation
      );
      toast.success("Account created successfully!");
      // Redirect or clear the form as needed
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to create account");
    } finally {
      setIsLoading(false);
    }
  };

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
              <form onSubmit={handleSubmit}>
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
                  value={form.username}
                  onChange={handleChange}
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
                  value={form.email}
                  onChange={handleChange}
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
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  error={notification.type === "error"}
                  helperText={
                    notification.type === "error" && notification.message
                  }
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password_confirmation"
                  label="Confirm Password"
                  id="password_confirmation"
                  autoComplete="current-password"
                  type="password"
                  value={form.password_confirmation}
                  onChange={handleChange}
                  error={notification.type === "error"}
                  helperText={
                    notification.type === "error" && notification.message
                  }
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
