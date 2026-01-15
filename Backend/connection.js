const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://annajoshythekkiniyath_db_user:f9vtRq7sC8LWp8N4@newproject.xz04cyr.mongodb.net/?appName=newproject")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
