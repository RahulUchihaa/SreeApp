import axios, {AxiosResponse} from 'axios';
import {BASE_URL} from './Constants';

interface User {
  name: string;
  email: string;
  mobile: number;
  is_consumer: boolean;
}

interface ApiResponse {
  user_data: any;
  message: any;
}

export const registerUser = async (
  user: User,
): Promise<AxiosResponse<ApiResponse>> => {
  try {
    const response = await axios.post<ApiResponse>(
      BASE_URL + 'register_user',
      user,
    );
    return response;
  } catch (error) {
    return error as AxiosResponse<ApiResponse>;
  }
};

interface data {
  mobile: number;
}

interface ApiResponses {
  usersdata: any;
  message: any;
}

export const loginUser = async (
  data: data,
): Promise<AxiosResponse<ApiResponses>> => {
  try {
    const response = await axios.get<ApiResponses>(BASE_URL + 'fetchuser', {
      params: data,
    });
    return response;
  } catch (error) {
    return error as AxiosResponse<ApiResponses>;
  }
};
