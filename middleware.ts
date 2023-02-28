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
        return (token?.role === "admin" ? true : false);
      },
    },
  }
);

export const config = { matcher: ["/", "/profile", "/settings/user"] };