import React from "react";

import "./AddTrip.css";

const AddTrip = () => {
  return (
    <div className="container add-trip-wrapper">
      <h1>Add Trip</h1>
      <form action="" className="add-trip">
        <label htmlFor="">Title trip</label>
        <div class="input-group">
          <input type="text" class="form-control" />
        </div>

        <label htmlFor="">Country</label>
        <div class="input-group">
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">Hongkong</option>
            <option value="2">Indonesia</option>
            <option value="3">Japan</option>
          </select>
        </div>

        <label htmlFor="">Accommodation</label>
        <div class="input-group">
          <input type="text" class="form-control" />
        </div>

        <label htmlFor="">Transportation</label>
        <div class="input-group">
          <input type="text" class="form-control" />
        </div>

        <label htmlFor="">Eat</label>
        <div class="input-group">
          <input type="text" class="form-control" />
        </div>

        <label htmlFor="">Duration</label>
        <div class="input-group">
          <input type="number" class="day" /> <span>Day</span>
          <input type="number" class="night" /> <span>Night</span>
        </div>

        <label htmlFor="">Date Trip</label>
        <div class="input-group">
          <input type="text" class="form-control" />
        </div>
        <label htmlFor="">Price</label>
        <div class="input-group">
          <input type="text" class="form-control" />
        </div>

        <label htmlFor="">Quota</label>
        <div class="input-group">
          <input type="text" class="form-control" />
        </div>

        <label htmlFor="">Eat</label>
        <div class="input-group">
          <textarea type="text" class="form-control" rows="5" />
        </div>

        <label htmlFor="">Image</label>
        <div class="input-group">
          <input type="file" />
        </div>

        <button className="reg income-trip" style={{ color: "#fff" }}>
          Add Trip
        </button>
      </form>
    </div>
  );
};

export default AddTrip;
