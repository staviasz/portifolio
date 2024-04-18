import { HttpClientContract } from "@/adapter/axiosResponse";

export default async function getUser(httpClient: HttpClientContract) {
  try {
    const response = await httpClient.request({
      route: "/user/profile",
      method: "get",
    });
    return response.body;
  } catch (error) {
    console.log(error);

    // throw error;
    return error;
  }
}
