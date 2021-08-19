import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Moment from 'react-moment';

export default function UpdateFocus({data}) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />

      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: data.user.photo}} style={styles.profilePhoto} />
        <View style={styles.timeContainer}>
          <Moment
            element={Text}
            date={data.time}
            format={'LT'}
            style={styles.time}
          />
        </View>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.description}>{data.description}</Text>
        {data.photo ? (
          <Image source={{uri: data.photo}} style={styles.postPhoto} />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#334963',
    paddingBottom: 14,
  },
  line: {
    backgroundColor: '#6b6b6b',
    width: 2,
    height: 40,
    borderRadius: 5,
    marginLeft: 8,
  },
  timeContainer: {
    borderBottomWidth: 1,
    backgroundColor: '#334963',
    justifyContent: 'center',
    borderRadius: 10,
    width: '20%',
    alignItems: 'center',
    marginLeft: 6,
    height: 26,
    marginTop: 4,
  },
  time: {
    fontSize: 12,
    fontWeight: '600',
    color: '#f5faff',
  },
  profilePhoto: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: -10,
    marginTop: -2,
  },
  postContainer: {
    marginTop: 18,
  },
  description: {
    fontSize: 18,
    color: '#334963',
  },
  postPhoto: {
    height: 170,
    width: 320,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
    marginRight: 16,
  },
});
