import { View } from 'react-native'
import CharacterList from './CharacterList'

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      <CharacterList />
    </View>
  )
}