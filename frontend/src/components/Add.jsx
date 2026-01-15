import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [inputs, setInputs] = useState({
    EmpName: "",
    designation: "",
    empId: "",
    img_url: "",
  });

  // Load old data if UPDATE
  useEffect(() => {
    if (id) {
      axios.get("http://localhost:3001/get/" + id).then((res) => {
        setInputs(res.data);
      });
    }
  }, []);

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const saveData = () => {
    if (id) {
      axios.put("http://localhost:3001/update/" + id, inputs).then(() => {
        alert("Employee Updated");
        navigate("/");
      });
    } else {
      axios.post("http://localhost:3001/add", inputs).then(() => {
        alert("Employee Added");
        navigate("/");
      });
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}>
      <Box sx={{ display: "flex", flexDirection: "column", width: "450px", gap: 2 }}>
        <TextField name="EmpName" value={inputs.EmpName} onChange={inputHandler} placeholder="Employee Name" />
        <TextField name="designation" value={inputs.designation} onChange={inputHandler} placeholder="Designation" />
        <TextField name="empId" value={inputs.empId} onChange={inputHandler} placeholder="Employee Id" />
        <TextField name="img_url" value={inputs.img_url} onChange={inputHandler} placeholder="Photo URL" />
        <Button sx={{ backgroundColor: "#9c27b0" }} variant="contained" onClick={saveData}>
          {id ? "UPDATE" : "ADD"}
        </Button>
      </Box>
    </Box>
  );
};

export default Add;
