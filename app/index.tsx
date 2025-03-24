import { View } from 'react-native'
import CharacterList from './components/CharacterList'

export default function Index() {
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
  );
}
