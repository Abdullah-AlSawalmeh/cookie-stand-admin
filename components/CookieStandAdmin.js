import Card from "./Card";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import hours from "../data";
import { useEffect } from "react";
import axios from "axios";

const CookieStandAdmin = ({ token }) => {
  const [reports, setReports] = useState([]);
  async function getAllCookies() {
    const config = { headers: { Authorization: "Bearer " + token } };
    const answers = await axios.get(
      "https://cookie-stand-api.herokuapp.com/api/v1/cookie-stands/",
      config
    );
    setReports(answers.data);
  }
  useEffect(() => {
    if (token) {
      getAllCookies();
    }
  }, [token, reports]);
  return (
    <div className="">
      <Head>
        <title>Cookie Stand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="bg-green-50 vh60 flex flex-col items-center">
        <Card>
          <h2 className="text-center text-xl font-bold mb-5">
            Create Cookie Stand
          </h2>
          <CreateForm setReports={setReports} token={token} />
        </Card>
        <ReportTable reports={reports} hours={hours} token={token} />
      </main>
      <Footer reports={reports} />
    </div>
  );
};

export default CookieStandAdmin;
