import axios from "axios";
require("dotenv").config();

const API = axios.create({
  baseURL: `${process.env.BASE_URL}/api`,
});

export default API;
