import FormTextInput from "./FormTextInput";
import React, { useState } from "react";
import axios from "axios";

const CreateForm = ({ setReports, token }) => {
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
    const config = { headers: { Authorization: "Bearer " + token } };
    let data = {
      location: cookie.location,
      description: "",
      hourly_sales: numberOfCustomersHourlyArray,
      minimum_customers_per_hour: cookie.minCustomer,
      maximum_customers_per_hour: cookie.maxCusomter,
      average_cookies_per_sale: cookie.avgCookies,
      owner: 1,
    };
    axios.post(
      "https://cookie-stand-api.herokuapp.com/api/v1/cookie-stands/",
      data,
      config
    );
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
            value="Create Stand"
          />
        </div>
      </div>
    </form>
  );
};

export default CreateForm;
