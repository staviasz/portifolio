import { HttpClientContract } from "@/adapter/axiosResponse";
import loginUser from "./login";

export default async function getUser(httpClient: HttpClientContract) {
  try {
    const token = await loginUser(httpClient);

    const response = await httpClient.request({
      route: "/user/profile",
      method: "get",
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.body;
  } catch (error) {
    // throw error;
    return error;
  }
}
