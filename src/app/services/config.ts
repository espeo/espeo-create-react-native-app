import axios, {
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios';
// linter disabled because of (hopefully temporary) incompatibility with Typescript - https://github.com/zetachang/react-native-dotenv/issues/76
// eslint-disable-next-line
// @ts-ignore
import { API_URL as baseURL } from 'react-native-dotenv';
import { ErrorCodes } from '../constants';
import asyncStorageService from './async-storage';

class ApiService {
  public request: AxiosInstance;

  constructor() {
    const config: AxiosRequestConfig = {
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...this.getHeaders(),
      },
    };

    this.request = axios.create(config);

    this.request.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        if (error && error.response) {
          const { status } = error.response;
          if (
            status === ErrorCodes.UNAUTHORIZED ||
            status === ErrorCodes.ACCESS_DENIED ||
            status === ErrorCodes.NOT_FOUND
          ) {
            // for example logout action here
          }
        }
        return Promise.reject(error);
      },
    );
  }

  public get<T>(url: string, params?: any, options?: {}): Promise<T> {
    const config = { params, ...options };
    return this.request.get(url, config);
  }

  public post<T>(url: string, data?: {}, options?: {}): Promise<T> {
    return this.request.post(url, data, options);
  }

  private getHeaders() {
    const token = asyncStorageService.get('token');

    let headers = {};

    if (token) {
      headers = {
        'x-auth-token': token,
      };
    }

    return {
      ...headers,
    };
  }
}

export default new ApiService();
