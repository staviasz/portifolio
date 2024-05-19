import { HttpClientContract } from "@/adapter/axiosResponse";

export default async function getPost(
  httpClient: HttpClientContract,
  id?: number,
) {
  try {
    if (!id) {
      return "Id required";
    }
    const response = await httpClient.request({
      route: `/post/${id}`,
      method: "get",
    });
    return response.body;
  } catch (error) {
    throw error;
  }
}
