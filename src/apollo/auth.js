import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignIn($phoneNumber: String!, $password: String!) {
    signIn(phoneNumber: $phoneNumber, password: $password) {
      data {
        email
        phoneNumber
        id
      }
      tokens {
        access_token
        refresh_token
      }
    }
  }
`;
