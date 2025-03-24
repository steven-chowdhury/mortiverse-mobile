import { ApolloClient,InMemoryCache, ApolloProvider } from '@apollo/client'
import Home from './components/Home'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

export default function Index() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
