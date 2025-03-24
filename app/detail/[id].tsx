import { Image, View, Text, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function CharacterDetail() {
  const { image, name, species, location, status } = useLocalSearchParams()

  let imageSource = image as string

  const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 250,
      marginBottom: 10
    },
    text: {
      fontSize: 18,
      marginBottom: 10,
      marginLeft: 10
    }
  })

  return (
    <View>
      <Image style={styles.image} source={{ uri: imageSource }} />
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Species: {species}</Text>
      <Text style={styles.text}>Status: {status}</Text>
      <Text style={styles.text}>Location: {location}</Text>
    </View>
  )
}