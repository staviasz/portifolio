import { HttpClientContract } from "@/adapter/axiosResponse";
import dotenv from "dotenv";
dotenv.config();

export default async function loginUser(httpClient: HttpClientContract) {
  try {
    const response = await httpClient.request({
      route: "/login",
      method: "post",
      body: {
        email: process.env.EMAIL_USER,
        password: process.env.PASSWORD_USER,
      },
    });

    return response.body.token;
  } catch (error) {
    throw error;
  }
}
