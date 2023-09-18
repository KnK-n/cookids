import { UserProvider } from "@auth0/nextjs-auth0/client";
import type { Metadata } from "next";

import { ApolloWrapper } from "./lib/ApolloWrapper";
import { ThemeRegistry } from "./components/layout/themeRegistry";
import { ReactQueryProvider } from "./lib/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Cookids",
  // description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <ThemeRegistry>
        <UserProvider>
          <ApolloWrapper>
            <ReactQueryProvider>
              <body>{children}</body>
            </ReactQueryProvider>
          </ApolloWrapper>
        </UserProvider>
      </ThemeRegistry>
    </html>
  );
}
