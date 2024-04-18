import { HttpClientContract } from "@/adapter/axiosResponse";

export default async function getPost(
  httpClient: HttpClientContract,
  postId: number,
) {
  try {
    const response = await httpClient.request({
      route: `/post/${postId}`,
      method: "get",
    });
    return response.body;
  } catch (error) {
    throw error;
  }
}
