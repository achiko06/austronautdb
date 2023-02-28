import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  function middleware(req: NextRequest) {
    // return NextResponse
    return NextResponse.rewrite(new URL("/", req.url));
  },
  {
    callbacks: {
      authorized({ token }) {
        console.log("token", token)
        return (token?.role === "admin" ? true : false);
        //token?.role === "admin";
      },
    },
  }
);

export const config = { matcher: ["/", "/profile", "/settings/user"] };