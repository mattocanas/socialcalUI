import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const messagaes = [
  {message: 'Can I bring anything?', emoji: '🛒'},
  {message: "I'm running late!", emoji: '🏃‍♀️'},
  {message: "I won't be able to make it", emoji: '😥'},
  {message: "I can't wait!", emoji: '🥳'},
];

export default function TaggingAlongQuickMessages() {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={messagaes}
        keyExtractor={item => item.message}
        renderItem={({item}) => (
          <View style={styles.messageBubble}>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.message}>{item.emoji}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  messageBubble: {
    height: 20,
    borderRadius: 10,
    backgroundColor: '#334963',
    flexDirection: 'row',
    padding: 3,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginRight: 5,
    resizeMode: 'contain',
  },
  container: {
    padding: 1,
    marginTop: 8,
    marginLeft: 10,
    marginRight: 4,
  },
  message: {
    color: '#d5dde6',
    fontSize: 10,
    marginRight: 2,
  },
});
