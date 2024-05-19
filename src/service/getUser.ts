import { HttpClientContract } from "@/adapter/axiosResponse";

export default async function getUser(httpClient: HttpClientContract) {
  try {
    const response = await httpClient.request({
      route: "/user/1",
      method: "get",
    });
    return response.body;
  } catch (error) {
    throw error;
  }
}
