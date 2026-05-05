import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  MenuItem
} from "@mui/material";
import Navbar from "../component/Navbar";

const StudentRegister = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    skillLevel: "",
    github: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* ================= REGISTER ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill all required fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/student/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        window.location.href = "/student/login";
      }

      setLoading(false);

    } catch {
      alert("Registration failed");
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <Box sx={{ minHeight: "100vh", background: "linear-gradient(135deg,#eef2ff,#f8fafc)", pt: "100px" }}>
        <Container maxWidth="sm">
          <Paper elevation={8} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h5" align="center" gutterBottom>
              Student Registration
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <TextField fullWidth label="Full Name" name="fullName" onChange={handleChange} margin="normal" />
              <TextField fullWidth label="Email" name="email" onChange={handleChange} margin="normal" />
              <TextField fullWidth label="Phone" name="phone" onChange={handleChange} margin="normal" />
              <TextField fullWidth label="College" name="college" onChange={handleChange} margin="normal" />

              <TextField fullWidth select label="Course" name="course" onChange={handleChange} margin="normal">
                <MenuItem value="MCA">MCA</MenuItem>
                <MenuItem value="BSc CS">BSc Computer Science</MenuItem>
                <MenuItem value="BCA">BCA</MenuItem>
                <MenuItem value="BTech">BTech</MenuItem>
              </TextField>

              <TextField fullWidth select label="Skill Level" name="skillLevel" onChange={handleChange} margin="normal">
                <MenuItem value="Beginner">Beginner</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
              </TextField>

              <TextField fullWidth label="GitHub Profile" name="github" onChange={handleChange} margin="normal" />
              <TextField fullWidth label="Password" type="password" name="password" onChange={handleChange} margin="normal" />
              <TextField fullWidth label="Confirm Password" type="password" name="confirmPassword" onChange={handleChange} margin="normal" />

              <Button fullWidth type="submit" variant="contained" sx={{ mt: 3 }}>
                {loading ? "Registering..." : "Register"}
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default StudentRegister;