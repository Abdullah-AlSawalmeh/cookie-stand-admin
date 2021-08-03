import FormTextInput from "./FormTextInput";
import React, { useState } from "react";

const CreateForm = ({ setReports }) => {
  function onCreate(e) {
    e.preventDefault();
    let cookie = {
      location: e.target.location.value,
      minCustomer: e.target.min_cus_hour.value,
      maxCusomter: e.target.max_cus_hour.value,
      avgCookies: e.target.avg_cks_sale.value,
    };
    let max_cus = cookie.maxCusomter;
    let min_cus = cookie.minCustomer;
    let numberOfCustomersHourlyLocationArray = [[cookie.location]];
    let numberOfCustomersHourlyArray = [];
    for (let i = 0; i < 14; i++) {
      numberOfCustomersHourlyArray.push(
        Math.floor(Math.random() * (max_cus - min_cus) + min_cus)
      );
    }
    numberOfCustomersHourlyLocationArray.push(numberOfCustomersHourlyArray);
    setReports((preState) => [
      ...preState,
      numberOfCustomersHourlyLocationArray,
    ]);
    event.target.reset();
  }
  return (
    <form className="flex flex-col " onSubmit={onCreate}>
      <div className="flex justify-content-center mb-4 ">
        <label className="w-1/12" for="location">
          Location
        </label>
        <input className="w-11/12" type="text" id="location" name="location" />
      </div>

      <div className="flex justify-between ">
        <FormTextInput
          label="Minimum Customers per Hour"
          id_name="min_cus_hour"
        ></FormTextInput>
        <FormTextInput
          label="Maximum Customers per Hour"
          id_name="max_cus_hour"
        ></FormTextInput>
        <FormTextInput
          label="Avgerage Cookies per Sale"
          id_name="avg_cks_sale"
        ></FormTextInput>
        <div className="flex items-center justify-center w-3/12 ">
          <input
            className=" bg-green-500 w-4/5 h-full cursor-pointer hover:bg-green-800 p-1"
            type="submit"
            id="my_input"
            name="my_input"
            value="Create"
          />
        </div>
      </div>
    </form>
  );
};

export default CreateForm;
