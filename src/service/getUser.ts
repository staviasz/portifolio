import { HttpClientContract } from "@/adapter/axiosResponse";

export default async function getUser(
  httpClient: HttpClientContract,
  authorization: string,
) {
  try {
    const response = await httpClient.request({
      route: "/user/profile",
      method: "get",
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    });
    return response.body;
  } catch (error) {
    throw error;
  }
}
