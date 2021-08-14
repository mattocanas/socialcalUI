import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Moment from 'react-moment';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function FitnessPost({data, user}) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={{uri: user.photo}} style={styles.profileImage} />
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.username}>@{user.username}</Text>
          </View>
        </View>

        <View style={styles.postContainer}>
          <View style={{flexDirection: 'row'}}>
            {/* <Text style={styles.postUsername}>{user.username}</Text> */}
            <Text style={styles.post}>{data.description}</Text>
          </View>
        </View>
        <View style={styles.taggersContainer}>
          <Image
            source={{uri: data.taggers[0].photo}}
            style={styles.taggerImage1}
          />
          <Image
            source={{uri: data.taggers[1].photo}}
            style={styles.taggerImage2}
          />
          <Text style={styles.taggerText}>
            {data.taggers[1].username} and {data.taggers.length - 1} others are
            tagging along
          </Text>
        </View>
      </View>
      <View style={styles.timeContainer}>
        <Moment
          element={Text}
          date={data.time}
          format={'LT'}
          style={styles.time}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d5dde6',
    borderRadius: 8,
    width: '94%',
    padding: 12,
    paddingBottom: 6,
    marginHorizontal: 12,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 10,
    marginRight: 6,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    color: '#334963',
  },
  username: {
    fontSize: 13,
    fontWeight: '500',
    color: '#999999',
  },
  postContainer: {
    marginTop: 7,
    marginLeft: 46,
  },

  post: {
    fontSize: 18,
    color: '#334963',
    fontWeight: '500',
  },
  timeContainer: {
    position: 'absolute',
    right: 20,
    top: 6,
  },
  time: {
    fontSize: 18,
    fontWeight: '700',
    color: '#334963',
  },
  taggerImage1: {
    height: 24,
    width: 24,
    borderRadius: 20,
  },
  taggerImage2: {
    height: 24,
    width: 24,
    borderRadius: 20,
    marginLeft: -36,
  },
  taggersContainer: {
    marginTop: 16,
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  taggerText: {
    marginLeft: 15,
    fontSize: 12,
  },
});
