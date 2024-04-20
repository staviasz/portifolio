import { HttpClientContract } from "@/adapter/axiosResponse";

export default async function getPosts(
  httpClient: HttpClientContract,
  authorization: string,
) {
  try {
    const response = await httpClient.request({
      route: `/post`,
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
