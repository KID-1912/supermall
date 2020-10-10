import axios from 'axios'

// 请求模块
export function request(config){
  const instance = axios.create({
    timeout: 5000,
    baseURL: "http://152.136.185.210:8000/api/w6"
  });

  instance.interceptors.response.use(result => {
    return result.data;
  },error => {
    return error
  })

  return instance(config)
}

