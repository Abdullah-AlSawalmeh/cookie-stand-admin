import Card from "./Card";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import hours from "../data";

const CookieStandAdmin = () => {
  const [reports, setReports] = useState([]);
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
          <CreateForm setReports={setReports} />
        </Card>
        <ReportTable reports={reports} hours={hours} />
      </main>
      <Footer reports={reports} />
    </div>
  );
};

export default CookieStandAdmin;
