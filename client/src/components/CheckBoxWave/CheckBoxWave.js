import React from "react";
import Grid from "@material-ui/core/Grid";


const CheckBoxWave = () => {
  return (
    <div className="container">
      <Grid container spacting={1} alignItems="left">
        <div className="grid">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1"> I have a bike</label>
          <br />
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label for="vehicle2"> I have a car</label>
          <br />
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3"> I have a boat</label>
            <br />
      </div>
      </Grid>
        </div>

  );
}

export default CheckBoxWave;