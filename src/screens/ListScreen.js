import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 25 },
    { name: 'Friend #2', age: 28 },
    { name: 'Friend #3', age: 35 },
    { name: 'Friend #4', age: 19 },
    { name: 'Friend #5', age: 18 },
    { name: 'Friend #6', age: 37 },
    { name: 'Friend #7', age: 25 },
    { name: 'Friend #8', age: 35 },
    { name: 'Friend #9', age: 25 },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 40,
    marginHorizontal: 30
  },
});

export default ListScreen;
