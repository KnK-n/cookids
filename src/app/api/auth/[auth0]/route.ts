import {
  AppRouteHandlerFnContext,
  handleAuth,
  handleCallback,
  handleLogin,
} from "@auth0/nextjs-auth0";
import { NextRequest } from "next/server";

export const GET = handleAuth();