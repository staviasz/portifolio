import { HttpClientContract } from "@/adapter/axiosResponse";

export default async function getPosts(httpClient: HttpClientContract) {
  try {
    const response = await httpClient.request({
      route: `/post`,
      method: "get",
    });
    return response.body;
  } catch (error) {
    console.log(error);

    throw error;
  }
}
