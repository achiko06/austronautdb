import NextAuth, { NextAuthOptions } from "next-auth";
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import CredentialsProvider from "next-auth/providers/credentials";
import { client } from '@/utils/client';
import { BASE_URL } from "@/utils";
import axios from "axios";

const authOptions: NextAuthOptions = {
  providers: [
    SanityCredentials(client),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform you login logic
        // find out user from db - validate if credentials are correct
        if (email !== process.env.AUTHORIZED_EMAIL || password !== process.env.AUTHORIZED_PASS) {
          throw new Error("invalid credentials");
        } // hard coded for this demo, later we can validate password based on value stored in db. encode/decode, etc.

        // if everything is fine -> return the user from sanity db
        const res = await axios.get(`${BASE_URL}/api/user/${email}`);
        //console.log("ASYNC", res.data.user)
        const userData = res.data.user
        return userData
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: SanityAdapter(client),
  pages: {
    signIn: "/auth/login",
    // error: '/auth/error',
    // signOut: '/auth/signout'
    //newUser: "/auth/new-user"
  },
  callbacks: {
    jwt(params) {
      // update token
      if (params.user?.usertype) {
        params.token.role = params.user.usertype;
      }
      // return final_token
      return params.token;
    },
  },
};

export default NextAuth(authOptions);