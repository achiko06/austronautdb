import NextAuth, { NextAuthOptions } from "next-auth";
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import CredentialsProvider from "next-auth/providers/credentials";
import { client } from '@/utils/client';
import { singleUserQuery } from "@/utils/queries";
import { BASE_URL } from "@/utils";
import axios from "axios";

const authOptions: NextAuthOptions = {
  providers: [
    SanityCredentials(client),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform you login logic
        // find out user from db - validate if credentials are correct
        if (email !== "testuser2@test.com" || password !== "testing") {
          throw new Error("invalid credentials");
        }

        {/*
        const query = singleUserQuery(email);
        console.log(query)
        const createOrGetUser = async () => {
          const tetstt = await client.fetch(query);
          return tetstt
        }* */}
  

        
        
      
        // if everything is fine -> return the user from sanity db
        return {
          id: "1234",
          name: "John Doe1",
          email: "testuser2@test.com",
          role: "admin",
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: SanityAdapter(client),
  pages: {
    signIn: "/auth/credentials",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    jwt(params) {
      // update token
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      // return final_token
      return params.token;
    },
  },
};

export default NextAuth(authOptions);