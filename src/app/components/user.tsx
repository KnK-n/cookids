"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Header } from "./header/header";
import { LogedInHeader } from "./header/logedInHeader";

export default function UserComponent() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <LogedInHeader />
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }
  return (
    <>
      <Header />
      <a href="/api/auth/login">Login</a>
    </>
  );
}
