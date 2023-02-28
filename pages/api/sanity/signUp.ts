import { signUpHandler } from 'next-auth-sanity';
import { client } from '@/utils/client';

export default signUpHandler(client);