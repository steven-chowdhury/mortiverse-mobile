import { Text, View, FlatList, StyleSheet, Image } from "react-native";

export default function Index() {
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
  
  const data = [
    { id: 1, title: 'Rick Sanchez', imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
    { id: 1, title: 'Rick Sanchez', imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
    { id: 1, title: 'Rick Sanchez', imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
    { id: 1, title: 'Rick Sanchez', imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
    { id: 1, title: 'Rick Sanchez', imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
  ]
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <Image style={styles.image} source={{ uri: item.imageUrl}}/>
              <Text>{item.title}</Text>
            </View>
            
          )
        }}
      />
    </View>
  );
}
