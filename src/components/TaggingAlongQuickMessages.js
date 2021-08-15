import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

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
          <TouchableOpacity style={styles.messageBubble}>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.message}>{item.emoji}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  messageBubble: {
    height: 24,
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
    marginTop: 12,
    marginLeft: 10,
    marginRight: 4,
  },
  message: {
    color: '#f5faff',
    fontSize: 10,
    marginRight: 2,
    fontWeight: '600',
  },
});
