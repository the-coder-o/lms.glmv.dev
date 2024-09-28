export interface INetworkConfig {
  baseURL?: string
  timeout?: number
}

export type Response<T> = {
  data: T | null
  message: string
  statusCode?: number
}
