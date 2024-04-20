import { AxiosAdapter, HttpClientContract } from "@/adapter/axiosResponse";
import CustomErrorApi from "@/error/customErrorApi";
import getToken from "@/service/getToken";

type FunctionType = (
  httpClient: HttpClientContract,
  authorization: string,
  id?: number,
) => Promise<any>;

export default async function executeService(func: FunctionType, id?: number) {
  let authorization = process.env.TOKEN_USER as string;

  if (authorization) {
    try {
      return await func(new AxiosAdapter(), authorization, id);
    } catch (error) {
      const { statusCode } = error as CustomErrorApi;
      if (statusCode === 401) {
        try {
          authorization = await getToken(new AxiosAdapter());

          return await func(new AxiosAdapter(), authorization, id);
        } catch (error) {
          throw error;
        }
      }
    }
  }

  try {
    authorization = await getToken(new AxiosAdapter());

    return await func(new AxiosAdapter(), authorization, id);
  } catch (error) {
    throw error;
  }
}
