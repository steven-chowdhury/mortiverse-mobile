import { FlatList } from 'react-native'
import CharacterItem from './CharacterItem'

export default function CharacterList() {
    const data = [
      { id: 1, name: 'Rick Sanchez', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
      { id: 1, name: 'Rick Sanchez', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
      { id: 1, name: 'Rick Sanchez', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
      { id: 1, name: 'Rick Sanchez', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
      { id: 1, name: 'Rick Sanchez', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
    ]

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
         <CharacterItem item={item} />
        )
      }}
    />
  )
}