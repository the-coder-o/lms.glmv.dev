import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from 'axios'
import { APP_LINK } from '@/constants'
import { Methods } from '@/types'
import { endpoints } from './endpoints'
import { INetworkConfig, Response } from './types'

const TIME_OUT = 60_000

class Instance {
  protected readonly instance: AxiosInstance
  protected baseURL = ''

  public constructor(params?: INetworkConfig) {
    const { baseURL, timeout } = params || { baseURL: APP_LINK, timeout: TIME_OUT }

    this.instance = axios.create({
      baseURL,
      timeout,
    })
    // @ts-ignore
    this.instance.interceptors.request.use(this.handleRequest)
    this.instance.interceptors.response.use(this.handleResponse, this.handleResponseError)
    this.baseURL = baseURL!
  }

  handleResponse = <T>(response: AxiosResponse<Response<T>>) => response

  private handleResponseError = (error: AxiosError<Response<unknown>>) => {
    if (error.response?.status === 400) {
      console.error('400')
      window.location.reload()

      return null
    }

    if (error.response?.status === 401) {
      console.error('401')

      window.location.reload()

      return null
    }

    if (error.response?.status === 500) {
      console.error('500')

      window.location.reload()

      return null
    }

    throw error
  }

  private handleRequest = ({ headers, ...restConfig }: AxiosRequestConfig) => ({
    headers: {
      ...headers,
    },
    ...restConfig,
  })

  public async get<T>(url: string, params?: unknown, cancelTokenSource?: CancelTokenSource) {
    const response = await this.instance.get<T>(url, {
      ...(params || {}),
      method: Methods.GET,
      cancelToken: cancelTokenSource ? cancelTokenSource.token : undefined,
    })

    return response
  }

  public async post<T>(
    url: string,
    params?: unknown,
    config?: AxiosRequestConfig,
    cancelTokenSource?: CancelTokenSource
  ) {
    const response = await this.instance.post<T>(url, params, {
      ...config,
      method: Methods.POST,
      cancelToken: cancelTokenSource ? cancelTokenSource.token : undefined,
    })

    return response
  }

  public async put<T>(
    url: string,
    params?: unknown,
    config?: AxiosRequestConfig,
    cancelTokenSource?: CancelTokenSource
  ) {
    const response = await this.instance.put<T>(url, params, {
      ...config,
      method: Methods.PUT,
      cancelToken: cancelTokenSource ? cancelTokenSource.token : undefined,
    })

    return response
  }

  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
    cancelTokenSource?: CancelTokenSource
  ) {
    const response = await this.instance.delete<T>(url, {
      ...config,
      method: Methods.DELETE,
      cancelToken: cancelTokenSource ? cancelTokenSource.token : undefined,
    })

    return response
  }
}

export const axiosInstance = new Instance({ baseURL: `${APP_LINK}${endpoints.base}` })
