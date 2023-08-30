
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: "https://glorious-bluegill-24.hasura.app/v1/graphql",
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
    }),
  });
});


// export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

// let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

// const createApolloClient = () => {
//   return new ApolloClient({
//     ssrMode: typeof window === "undefined", // serverSideで実行の時
//     link: new HttpLink({
//       uri: "https://glorious-bluegill-24.hasura.app/v1/graphql",
//     }),
//     cache: new InMemoryCache({}),
//   });
// };

// export const initializeApollo = (initialState = null) => {
//   const _apolloClient = apolloClient ?? createApolloClient() // ?? trueだと右辺が実行、falseは左辺が実行
  
//   // For SSG and SSR always create a new Apollo Client
//   if (typeof window === 'undefined') return _apolloClient
//   // Create the Apollo Client once in the client
//   if (!apolloClient) apolloClient = _apolloClient

//   return _apolloClient
// }

