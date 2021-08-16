import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ReactionsTab from '../components/ReactionsTab';
import Moment from 'react-moment';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import TaggingAlongQuickMessages from '../components/TaggingAlongQuickMessages';

export default function Post({data, user}) {
  const [tagAlong, setTagAlong] = useState(false);

  const onPressTagAlong = () => {
    setTagAlong(true);
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={{uri: user.photo}} style={styles.profileImage} />
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.username}>
              @{user.username} | {user.city}
            </Text>
          </View>
        </View>

        <View style={styles.postContainer}>
          <View>
            {/* <Text style={styles.postUsername}>{user.username}</Text> */}
            <Text style={styles.post}>{data.description}</Text>
            {data.eventType == 'Class' && data.exam ? (
              <View style={styles.examBubble}>
                <Text style={styles.examText}>Exam today</Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.locationContainer}>
          <MaterialIcon name="location-on" size={16} color={'#334963'} />
          <TouchableOpacity>
            <Text style={styles.address}>{data.address}</Text>
          </TouchableOpacity>
        </View>
        <ReactionsTab
          eventType={data.eventType}
          data={data}
          onPressTagAlong={onPressTagAlong}
        />
      </View>
      <View style={styles.timeContainer}>
        <Moment
          element={Text}
          date={data.time}
          format={'LT'}
          style={styles.time}
        />
      </View>
      {data.taggers[0] ? (
        <TouchableOpacity style={styles.taggersContainer}>
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
        </TouchableOpacity>
      ) : null}

      {tagAlong ? <TaggingAlongQuickMessages /> : null}
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
    marginTop: 30,
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
    marginTop: 14,
  },

  post: {
    fontSize: 16,
    color: '#302d2d',
    fontWeight: '500',
  },
  timeContainer: {
    position: 'absolute',
    right: 24,
    top: 34,
    borderBottomWidth: 1,
    borderBottomColor: '#334963',
    justifyContent: 'center',
  },
  time: {
    fontSize: 18,
    fontWeight: '500',
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
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 30,
    alignItems: 'center',
  },
  taggerText: {
    marginLeft: 15,
    fontSize: 12,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  address: {
    color: '#334963',
    textDecorationLine: 'underline',
    fontSize: 10,
  },
  examBubble: {
    height: 24,
    padding: 2,
    width: '28%',
    backgroundColor: '#b04f57',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 4,
  },
  examText: {
    color: '#f5faff',
  },
});
