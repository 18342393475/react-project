import axios from "axios";
import axiosRetry from "axios-retry";
const instance = axios.create();
axiosRetry(instance, { retries: 0 });
instance.interceptors.request.use(function (config) {

});
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance;