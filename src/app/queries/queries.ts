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

export const GET_USERS_IDS = gql`
  query GetUserId {
    users @Client {
      id
    }
  }
`;

export const GET_USERS_BY_ID = gql`
  query GetUserById {
    users @Client {
      id
      last_seen
      name
    }
  }
`;
