import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGZmYWJkNDFmNWRiNGQwMmRlNmNmYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjE3NDk4MSwiZXhwIjoxNjQyNDM0MTgxfQ.r1RiZrealkxEj_oQ6d9TNg_533dKaRNq8GWF_io7rc4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
