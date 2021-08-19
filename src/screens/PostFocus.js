import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import data from '../../assets/dummyEventData';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import ReactionsTab from '../components/ReactionsTab';
import Moment from 'react-moment';
import UpdateFocus from '../components/UpdateFocus';

export default function PostFocus() {
  const dummyData = data[0];
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
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
      </View>

      <View style={styles.timeContainer}>
        <Moment
          element={Text}
          date={dummyData.time}
          format={'LT'}
          style={styles.time}
        />
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.post}>{dummyData.description}</Text>
        {dummyData.photo ? (
          <Image source={{uri: dummyData.photo}} style={styles.postPhoto} />
        ) : null}
        <View style={styles.locationContainer}>
          <MaterialIcon name="location-on" size={18} color={'#334963'} />
          <Text style={styles.address}>{dummyData.address}</Text>
        </View>
      </View>

      <View style={{width: '93%', marginLeft: 12, marginTop: 4}}>
        <ReactionsTab eventType={dummyData.eventType} />
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

      <View style={styles.divider} />

      <FlatList
        data={dummyData.updates}
        keyExtractor={item => item.id}
        renderItem={({item}) => <UpdateFocus data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5faff',
  },
  profilePhoto: {
    height: 50,
    width: 50,
    borderRadius: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: 70,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    color: '#334963',
    fontWeight: '500',
  },
  username: {
    fontSize: 14,
    fontWeight: '500',
    color: '#999999',
  },
  city: {
    fontSize: 14,
    fontWeight: '500',
    color: '#999999',
  },
  postContainer: {
    marginTop: 20,
    marginLeft: 16,
  },
  post: {
    fontSize: 18,
    color: '#334963',
    fontWeight: '500',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 26,
    marginLeft: -2,
  },
  taggersContainer: {
    marginTop: 30,
  },
  postPhoto: {
    height: 170,
    width: 320,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
    marginRight: 16,
  },
  address: {
    color: '#334963',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  taggerImage1: {
    height: 27,
    width: 27,
    borderRadius: 20,
  },
  taggerImage2: {
    height: 27,
    width: 27,
    borderRadius: 20,
    marginLeft: -36,
  },
  taggersContainer: {
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
  },
  taggerText: {
    marginLeft: 15,
    fontSize: 14,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#334963',
    marginTop: 10,
  },
  time: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f5faff',
  },
  timeContainer: {
    position: 'absolute',
    right: 24,
    top: 70,
    borderBottomWidth: 1,
    backgroundColor: '#334963',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
});
