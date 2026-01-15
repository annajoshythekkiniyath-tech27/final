import { useEffect, useState } from "react";
import { Card, CardContent, CardActions, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    axios.get("http://localhost:3001/view").then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = (id) => {
    axios.delete("http://localhost:3001/delete/" + id).then(fetchData);
  };

  return (
    <Grid container spacing={4} sx={{ padding: 5 }}>
      {data.map((val) => (
        <Grid item md={4} key={val._id}>
          <Card sx={{ padding: 2 }}>
            <CardContent>
              <img src={val.img_url} width="100%" />
              <Typography variant="h6">{val.EmpName}</Typography>
              <Typography>{val.designation}</Typography>
              <Typography>{val.empId}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", gap: 2 }}>
              <Button sx={{ backgroundColor: "#9c27b0" }} variant="contained" onClick={() => deleteData(val._id)}>
                DELETE
              </Button>
              <Button sx={{ backgroundColor: "#9c27b0" }} variant="contained" onClick={() => navigate("/add/" + val._id)}>
                UPDATE
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
