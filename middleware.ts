import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/events/:id", "/api/webhook/stripe", "/api/webhook/stripe", "api/uploadthing"],
  ignoredRoutes: ["/api/webhook/stripe", "/api/webhook/stripe", "api/uploadthing"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
