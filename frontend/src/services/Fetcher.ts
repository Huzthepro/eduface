import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

class Fetcher {
  private apiUrl: string
  private defaultHeaders: Record<string, string>

  constructor() {
    const domain = 'http://localhost:3000'
    this.apiUrl = `${domain}/api/`
    this.defaultHeaders = {
      // Example authorization header (update or uncomment as needed)
      // Authorization: "Bearer " + JSON.parse(localStorage.getItem("user"))?.token || "",
    }
  }

  async get(url: string) {
    return this.call(url, 'GET')
  }

  async post(url: string, data: Record<string, unknown>) {
    return this.call(url, 'POST', data)
  }

  async patch(url: string, data: Record<string, unknown>) {
    return this.call(url, 'PATCH', data)
  }

  async delete(url: string) {
    return this.call(url, 'DELETE')
  }

  private async call(url: string, method: string, data?: unknown) {
    const headers = { ...this.defaultHeaders }

    if (!(data instanceof FormData)) {
      headers['Content-Type'] = 'application/json'
    }

    const config: AxiosRequestConfig = {
      method: method as AxiosRequestConfig['method'],
      url: this.apiUrl + url,
      headers,
      data,
    }

    try {
      const response = await axios(config)
      if (response.data) {
        return response.data
      }
      return Promise.reject(response.data)
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error.response?.data || error.message || error)
      }
      return Promise.reject(error)
    }
  }
}

export default new Fetcher()