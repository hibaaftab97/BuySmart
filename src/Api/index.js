import {base_url} from './config';
import {
  dataToQueryParameter,
  getConfigs,
  getMessage,
  handleResponse,
  performNetworkRequest,
} from './HelperFunctions';
export const post = async (endpoint, body, formdata,queryParams) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);
  console.log('url', endpoint, body,formdata);
  const configs = getConfigs('POST', body);

  console.log('configs ', configs);
  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);
    return Promise.resolve(result);
  } catch (e) {
    // console.log('e ',e);
    const message = getMessage(e);
    return Promise.reject(message);
  }
};
export const get = async (endpoint, queryParams = false) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);
  const configs = getConfigs('GET');

  // console.log('url ',url);

  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);
    return Promise.resolve(result);
  } catch (e) {
    const message = getMessage(e);
    console.log('message', message);
    return Promise.reject(message);
  }
};
export const put = async (endpoint, body, formData, queryParams) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);
  const configs = getConfigs('PUT', body, formData);
  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);
    return Promise.resolve(result);
  } catch (e) {
    const message = getMessage(e);
    return Promise.reject(message);
  }
};
export const deleteRequest = async (endpoint, queryParams) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);
  const configs = getConfigs('DELETE');
  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);
    return Promise.resolve(result);
  } catch (e) {
    const message = getMessage(e);
    return Promise.reject(message);
  }
};
const Api = {
  post: post,
  get: get,
  put: put,
  delete: deleteRequest,
};
export default Api;