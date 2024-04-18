import CustomErrorApi from "@/error/customErrorApi";
import axios, { AxiosError, AxiosResponse } from "axios";

interface RequestContract {
  route: string;
  method: "get" | "put" | "post" | "delete";
  body?: any;
  headers?: any;
  query?: any;
  params?: any;
}
export interface HttpClientContract {
  request: (data: RequestContract) => Promise<any>;
}

export class AxiosAdapter implements HttpClientContract {
  async request(data: RequestContract) {
    let axiosResponse: AxiosResponse;
    const baseUrl = "https://portfolio-api-ovvr.onrender.com";

    const url = data.query
      ? `${baseUrl}${data.route}?${data.query}`
      : `${baseUrl}${data.route}`;
    console.log(process.env.EMAIL_USER, process.env.PASSWORD_USER);

    try {
      const token = await axios
        .post(baseUrl + "/login", {
          email: process.env.EMAIL_USER,
          password: process.env.PASSWORD_USER,
        })
        .then(res => res.data.token);

      axiosResponse = await axios.request({
        url,
        method: data.method,
        data: data.body,
        headers: {
          ...data.headers,
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      const { response } = error as AxiosError;

      throw new CustomErrorApi(
        response?.status || 500,
        response?.data || "Internal server error",
      );
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse?.data,
    };
  }
}
