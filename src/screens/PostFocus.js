import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import data from '../../assets/dummyEventData';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function PostFocus() {
  const dummyData = data[0];
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{uri: dummyData.user.photo}}
          style={styles.profilePhoto}
        />
        <View style={{justifyContent: 'center', marginLeft: 6}}>
          <Text style={styles.name}>{dummyData.user.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.username}>@{dummyData.user.username}</Text>
            <Text style={styles.city}> | {dummyData.user.city}</Text>
          </View>
        </View>
      </View>

      <View style={styles.postContainer}>
        <Text>{dummyData.description}</Text>
        {dummyData.photo ? (
          <Image source={{uri: dummyData.photo}} style={styles.postPhoto} />
        ) : null}
        <View style={styles.locationContainer}>
          <MaterialIcon name="location-on" size={16} color={'#334963'} />
          <Text>{dummyData.address}</Text>
        </View>
      </View>

      {dummyData.taggers[0] ? (
        <TouchableOpacity style={styles.taggersContainer}>
          <Image
            source={{uri: dummyData.taggers[0].photo}}
            style={styles.taggerImage1}
          />
          <Image
            source={{uri: dummyData.taggers[1].photo}}
            style={styles.taggerImage2}
          />
          <Text style={styles.taggerText}>
            {dummyData.taggers[1].username} and {dummyData.taggers.length - 1}{' '}
            others are tagging along
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profilePhoto: {
    height: 60,
    width: 60,
    borderRadius: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: 100,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
  },
  username: {
    fontSize: 14,
  },
  city: {
    fontSize: 14,
  },
});
