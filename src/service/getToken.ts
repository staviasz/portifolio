import { HttpClientContract } from "@/adapter/axiosResponse";

export default async function getToken(httpClient: HttpClientContract) {
  try {
    const response = await httpClient.request({
      route: "/login",
      method: "post",
      body: {
        email: process.env.EMAIL_USER,
        password: process.env.PASSWORD_USER,
      },
    });
    process.env.TOKEN_USER = response.body.token;
    return response.body.token;
  } catch (error) {
    throw error;
  }
}
