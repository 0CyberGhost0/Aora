import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Trending = ({posts}) => {
    console.log(posts);
  return (
    <View>
      <Text>Trending</Text>
      <FlatList
        data={posts}
        keyExtractor={(item)=>item.id}
        renderItem={({ item }) => <Text className='text-3xl text-white'>{item.id}</Text>}
        horizontal
        >
      </FlatList>
    </View>
  )
}

export default Trending