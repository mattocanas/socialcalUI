import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ReactionsTab({eventType}) {
  return (
    <View style={styles.container}>
      <View style={styles.likes}>
        <Ionicon name="md-heart" color={'#9c4e5d'} size={24} />
      </View>
      {eventType == 'Fitness' && (
        <View style={styles.muscles}>
          <MaterialCommunityIcon
            name="weight-lifter"
            color={'#52749c'}
            size={24}
          />
          <Text style={styles.reactionNumber}>12</Text>
        </View>
      )}
      <View style={styles.tagAlong}>
        <Ionicon name="pricetag" color={'#52749c'} size={20} />
        <Text style={styles.reactionNumber}>Tag along?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reactionNumber: {
    fontSize: 16,
    marginLeft: 4,
    fontWeight: '600',
    color: '#334963',
  },
  muscles: {
    marginLeft: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagAlong: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
});
