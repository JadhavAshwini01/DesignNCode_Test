import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";

const StudentLogin = () => {
  const navigate = useNavigate();

  // 🔹 Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 Error state
  const [errors, setErrors] = useState({});

  // 🔹 Validation function
  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Login handler
  const handleLogin = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // ✅ TEMP success (later replace with API call)
    console.log("Login Success", { email, password });

    navigate("/student/dashboard");
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE WRAPPER */}
      <Box
        sx={{
          minHeight: "100vh",
          background: "#f8fafc",
          pt: "100px"
        }}
      >
        <Container maxWidth="sm">
          <Paper elevation={6} sx={{ p: 4, borderRadius: 2 }}>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
            >
              Student Login
            </Typography>

            <Box component="form" onSubmit={handleLogin}>
              {/* EMAIL */}
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />

              {/* PASSWORD */}
              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />

              {/* LOGIN BUTTON */}
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 2 }}
              >
                Login
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default StudentLogin;
