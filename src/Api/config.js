export const urls = {
  // v1: `http://dev12.onlinetestingserver.com/praiseradio-app/api`,
  v1: `https://shopeaseservice.herokuapp.com/api`,
  // v1Sockekt: `https://dev74.onlinetestingserver.com:5092/`,
};
export const base_url = urls.v1;
//   export const socket_url = urls.v1Sockekt;

export const endpoints = {
  auth: {
    login: '/users/login',
    register: '/users/register',

  },
  vendor: {
    registershop: "/shops/register",
    updatestatus:'/shops/setShopStatus'
  },
  profile: {
    getProfile: '/users/profile',
    about:'/users/about',
    contact:'/users/contactAdmin'
  },
customer:{
  shops:"/shops",
  
}

};
export default configs = {
  endpoints: endpoints,
  base_url: base_url,
};