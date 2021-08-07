import CookieStandAdmin from "../components/CookieStandAdmin";
import LoginForm from "../components/LoginForm";
import axios from "axios";
const baseUrl = "https://cookie-stand-api.herokuapp.com";
const tokenUrl = baseUrl + "/api/token/";
const refreshToken = baseUrl + "/api/token/refresh/";
import { useState } from "react";

export default function Home() {
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  async function getToken(credentials) {
    const fetchedToken = await axios.post(tokenUrl, credentials);
    setToken(fetchedToken.data.access);
    setRefreshToken(fetchedToken.data.refresh);
  }

  function loginHandler(credentials) {
    getToken(credentials);
  }

  if (!token) return <LoginForm loginHandler={loginHandler} />;
  return (
    <>
      <CookieStandAdmin token={token} />;
    </>
  );
}
