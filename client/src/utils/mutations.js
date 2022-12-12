import  {gql}  from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    createMatchup(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    createMatchup(username: $username, email: $email, password: $password) {
      token
      user {
        username
        _id
        email
      
      }
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
    removeBook(bookId: $bookId) {
        usernname
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