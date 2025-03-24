import { FlatList, Text, View } from 'react-native'
import CharacterItem from './CharacterItem'
import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from '../lib/graphql/queries'

export default function CharacterList() {
  const { loading, error, data } = useQuery<CharacterResponse>(GET_CHARACTERS)

  if (error) {
    return (
      <View>
        <Text>Error fetching characters</Text>
      </View>
    )
  }

  if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    )
  }

  return (
    <FlatList
      style={{ width: '100%' }}
      data={data?.characters.results}
      renderItem={({ item }) => {
        return (
         <CharacterItem item={item} />
        )
      }}
    />
  )
}