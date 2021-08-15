import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TaggingAlongQuickMessages from './TaggingAlongQuickMessages';

export default function ReactionsTab({eventType, data, onPressTagAlong}) {
  return (
    <View style={styles.container}>
      <View style={styles.likes}>
        <TouchableOpacity style={styles.likeCircle}>
          <Ionicon name="md-heart" color={'#9c4e5d'} size={20} />
        </TouchableOpacity>
        <Text style={styles.reactionNumber}>20</Text>
      </View>

      {/* //Muscle reaction for fitness event */}
      {eventType == 'Fitness' && (
        <View style={styles.muscles}>
          <TouchableOpacity>
            <Text style={{fontSize: 22}}>🏋🏽</Text>
          </TouchableOpacity>
          <Text style={styles.reactionNumber}>12</Text>
        </View>
      )}

      {/* // book reaction for study event */}
      {eventType == 'Study' && (
        <View style={styles.muscles}>
          <TouchableOpacity>
            <Text style={{fontSize: 22}}>📚</Text>
          </TouchableOpacity>
          <Text style={styles.reactionNumber}>12</Text>
        </View>
      )}

      <TouchableOpacity style={styles.tagAlong} onPress={onPressTagAlong}>
        <Ionicon name="pricetag" color={'#52749c'} size={18} />
        <Text style={styles.reactionNumber}>Tag along?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
  },
  reactionNumber: {
    fontSize: 14,
    marginLeft: 4,
    fontWeight: '600',
    color: '#334963',
  },
  muscles: {
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  tagAlong: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 54,
  },
  likeCircle: {
    height: 26,
    width: 26,
    borderRadius: 20,
    backgroundColor: '#ebbcc4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
