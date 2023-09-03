import { UserProvider } from "@auth0/nextjs-auth0/client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApolloWrapper } from "./lib/ApolloWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cookids",
  // description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <UserProvider>
        <ApolloWrapper>
          <body>{children}</body>
        </ApolloWrapper>
      </UserProvider>
    </html>
  );
}
