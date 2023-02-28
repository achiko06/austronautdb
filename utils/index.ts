import axios from 'axios';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getUser = async (email: any) => {
  const res = await axios.get(`${BASE_URL}/api/user/${email}`);
  return res.data
};