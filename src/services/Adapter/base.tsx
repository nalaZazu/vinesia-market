import axios from "./customAxios";

export function GET(url: any) {
  return axios.get(url);
}

export function POST(url: any, requestData?: any) {
  return axios.post(url, requestData);
}

export function PUT(url: any, requestData: any) {
  return axios.put(url, requestData);
}

export function PATCH(url: any, requestData: any) {
  return axios.patch(url, requestData);
}

export function DELETE(url: any) {
  return axios.delete(url);
}
