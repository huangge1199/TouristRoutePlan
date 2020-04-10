import axios from 'axios'
/** axios实例化 */
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 30000
})

/** request拦截器 */
service.interceptors.request.use(config => {
  console.log(`REQUEST-URL>>>${process.env.BASE_API+config.url}`);
  if (config.url.indexOf("file/upload") >= 0) {
    config.url = 'http://221.203.29.44:7700/file/upload/'

  }
  if (config.url.indexOf("jtb/uploadingWaybill") >= 0) {
    config.url = 'http://39.96.202.181:9000/jtb/uploadingWaybill'

  }


  return config
}), error => {
  console.log(error);
}

/** respone拦截器 */
service.interceptors.response.use(response => {
    console.log(response);
    const res = response.data
    console.log('HTTP >>>>> ', response.request.responseURL, response.request.status, response.data)
    return res
  }),
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }

export default service
