import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      last_seen
      name
    }
  }
`;

// export const GET_USERS_LOCAL = gql`
//   query GetUsers {
//     users @Client {
//       id
//       last_seen
//       name
//     }
//   }
// `;

export const GET_USERIDS = gql`
  query GetUserId {
    users @Client {
      id
    }
  }
`;

export const GET_USERBY_ID = gql`
  query GetUserById {
    users @Client {
      id
      last_seen
      name
    }
  }
`;
