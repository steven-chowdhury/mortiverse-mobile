import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

interface CharacterItemProps {
  item: Character
}

export default function CharacterItem({ item }: CharacterItemProps) {
  const styles = StyleSheet.create({
    itemContainer: {
      flex: 1,
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
  })

  return (
    <TouchableOpacity
      onPress={() => router.push({ 
        pathname: `/detail/[id]`,
        params: { 
          id: item.id,
          name: item.name,
          image: item.image,
          species: item.species,
          status: item.status,
          location: item.location.name
        }
      })}
    >
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={{ uri: item.image}}/>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}