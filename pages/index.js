import Head from "next/head";
import Card from "../components/Card";
import Form from "../components/Form";
import CookiesList from "../components/CookiesList";
import React, { useState } from "react";

export default function Home() {
  const [cookies, setCookie] = useState([]);
  return (
    <div className="">
      <Head>
        <title>Cookie Stand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-green-50 vh60 flex flex-col items-center">
        <Card>
          <h2 className="text-center text-xl font-bold mb-5">
            Create Cookie Stand
          </h2>
          <Form setCookie={setCookie} />
          <CookiesList cookies={cookies} />
        </Card>
      </main>
    </div>
  );
}
