import { View } from 'react-native'
import CharacterList from './components/CharacterList'
import { ApolloClient,InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      <ApolloProvider client={client}>
        <CharacterList />
      </ApolloProvider>
    </View>
  );
}
