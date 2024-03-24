import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/", 
    "/(api|trpc)(.*)", 
    "/product/(.*)", 
  ],
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
  ],
};
