import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import data from '../../assets/dummyEventData';
import ProfilePost from '../components/ProfilePost';

const user = data[0].user;
const dummyData = data[0];

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{uri: user.photo}} style={styles.profilePhoto} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
        <View style={{flexDirection: 'row', marginTop: 6}}>
          <Text style={styles.city}>{user.city} | </Text>
          <Text style={styles.school}>{user.school}</Text>
        </View>
        <View style={styles.followContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.followNumber}>112</Text>
            <Text style={styles.followText}>Following</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.followNumber}>110</Text>
            <Text style={styles.followText}>Followers</Text>
          </View>
        </View>
      </View>

      <View style={styles.upcomingEventsContainer}>
        <Text style={styles.upcomingEvents}>Upcoming Events</Text>
        <View style={styles.underline} />
        <ProfilePost />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5faff',
  },
  profileContainer: {
    alignSelf: 'center',
    marginTop: 80,
    alignItems: 'center',
  },
  profilePhoto: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  name: {
    color: '#334963',
    fontWeight: '600',
    fontSize: 22,
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
    color: '#999999',
  },
  city: {fontSize: 18, fontWeight: '600', color: '#999999'},
  school: {fontSize: 18, fontWeight: '600', color: '#334963'},
  upcomingEventsContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  upcomingEvents: {
    fontSize: 28,
    fontWeight: '600',
    color: '#334963',
  },
  underline: {
    backgroundColor: '#334963',
    width: 225,
    height: 2,
  },
  followContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  followNumber: {
    fontSize: 20,
    color: '#334963',
    marginLeft: 10,
  },
  followText: {
    fontSize: 20,
    color: '#999999',
    marginLeft: 6,
  },
});
