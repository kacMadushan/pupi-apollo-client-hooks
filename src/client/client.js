import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const API = process.env.REACT_APP_API_KEY;
const link = new HttpLink({ uri: API });
const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

export default client;