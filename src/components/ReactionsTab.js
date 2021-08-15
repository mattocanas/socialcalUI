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
  const [tagAlong, setTagAlong] = useState(false);

  onPressTag = () => {
    onPressTagAlong();
    setTagAlong(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.likes}>
        <TouchableOpacity style={styles.likeCircle}>
          <Ionicon
            name="md-heart"
            color={'#9c4e5d'}
            size={16}
            style={{marginLeft: 0.5, marginTop: 0.5}}
          />
        </TouchableOpacity>
        <Text style={styles.reactionNumber}>20</Text>
      </View>

      {/* //Muscle reaction for fitness event */}
      {eventType == 'Fitness' && (
        <View style={styles.muscles}>
          <TouchableOpacity>
            <Text style={{fontSize: 20}}>🏋🏽</Text>
          </TouchableOpacity>
          <Text style={styles.reactionNumber}>12</Text>
        </View>
      )}

      {/* // book reaction for study event */}
      {eventType == 'Study' && (
        <View style={styles.muscles}>
          <TouchableOpacity>
            <Text style={{fontSize: 20}}>📚</Text>
          </TouchableOpacity>
          <Text style={styles.reactionNumber}>12</Text>
        </View>
      )}

      {/* // Food reaction for food event */}
      {eventType == 'FoodDrink' && (
        <View style={styles.muscles}>
          <TouchableOpacity>
            <Text style={{fontSize: 20}}>🍽</Text>
          </TouchableOpacity>
          <Text style={styles.reactionNumber}>12</Text>
        </View>
      )}

      {/* //  reaction for work event */}
      {eventType == 'Work' && (
        <View style={styles.muscles}>
          <TouchableOpacity>
            <Text style={{fontSize: 20}}>📑</Text>
          </TouchableOpacity>
          <Text style={styles.reactionNumber}>12</Text>
        </View>
      )}

      {eventType == 'Party' && (
        <View style={styles.muscles}>
          <TouchableOpacity>
            <Text style={{fontSize: 20}}>🍾</Text>
          </TouchableOpacity>
          <Text style={styles.reactionNumber}>38</Text>
        </View>
      )}

      {/* // luck reaction for Class event */}
      {eventType == 'Class' && (
        <View style={styles.muscles}>
          <TouchableOpacity>
            {data.exam ? (
              <Text style={{fontSize: 20}}>🍀</Text>
            ) : (
              <Text style={{fontSize: 20}}>📝</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.reactionNumber}>12</Text>
        </View>
      )}

      {tagAlong ? (
        <View style={styles.tagConfirmationContainer}>
          <Ionicon name="checkmark-circle" color={'#52749c'} size={18} />
          <Text style={styles.tagConfrimationMessage}>On your schedule!</Text>
        </View>
      ) : (
        <TouchableOpacity style={styles.tagAlong} onPress={onPressTag}>
          <Ionicon name="ios-pricetag" color={'#52749c'} size={18} />
          <Text style={styles.reactionNumber}>Tag along?</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
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
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 50,
  },
  tagAlong: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  likeCircle: {
    height: 22,
    width: 22,
    borderRadius: 20,
    backgroundColor: '#ebbcc4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goodLuckButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 160,
  },
  tagConfirmationContainer: {
    position: 'absolute',
    alignItems: 'center',
    right: 0,
    flexDirection: 'row',
  },
  tagConfrimationMessage: {
    color: '#334963',
  },
});
