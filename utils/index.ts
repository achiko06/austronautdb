import axios from 'axios';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// to be changed to email and password auth verstion instead of google login
export const createOrGetUser = async (response: any, addUser: any) => {
  var base64Url = response.credential.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  
  const { name, picture, sub } = JSON.parse(jsonPayload)

  const userId = sub
  const res = await axios.get(`${BASE_URL}/api/profile/${userId}`);
  const usertype = res.data.user?.usertype || "customer"
  
  const user = {
    _id: sub,
    _type: 'user',
    userName: name,
    image: picture,
    usertype: usertype
  };
  
  addUser(user);

  await axios.post(`${BASE_URL}/api/auth`, user);
};