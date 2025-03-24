import { View, Text, Image, StyleSheet } from 'react-native'

interface CharacterItemProps {
  item: Character
}

export default function CharacterItem({ item }: CharacterItemProps) {
  const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    text: {
      fontSize: 16,
    },
  });

  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: item.image}}/>
      <Text>{item.name}</Text>
    </View>
  )
}