// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// // http://localhost:4000/
// //https:stackoverflow.com/questions/64223499/graphql-error-network-request-failed-only-in-android//
// // Initialize Apollo Client
// export const client = new ApolloClient({
//   uri: 'http://10.0.2.2:4000/',
//   cache: new InMemoryCache()
// });



import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-community/async-storage';

const URI = 'http://10.0.2.2:4000/';

const httpLink = createHttpLink({
  uri: URI,
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token || '',
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});