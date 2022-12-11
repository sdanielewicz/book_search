import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    createMatchup(email: $email, password: $password) {
      token
      user
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    createMatchup(name: $name, email: $email, password: $password) {
      token
      user
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: saveBookInput) {
    createMatchup(input: $input) {
        name
        _id
        bookCount
        savedBooks {
          bookId
          authors
          image
          link
          title
          description
        }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    createMatchup(bookId: $bookId) {
        name
        _id
        bookCount
        savedBooks {
          bookId
          authors
          image
          link
          title
          description
        }
    }
  }
`;