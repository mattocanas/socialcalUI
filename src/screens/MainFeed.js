import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import Moment from 'react-moment';
import dummyEventData from '../../assets/dummyEventData';
import FitnessPost from '../components/FitnessPost';
import StudyPost from '../components/StudyPost';
export default function MainFeed() {
  const currentTime = new Date().getHours();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.dateContainer}>
          <Moment element={Text} format={'MMMM Do'} style={styles.dateHeader}>
            <Text>{new Date().toDateString()} </Text>
          </Moment>
        </View>

        <Text style={styles.dateHeader}>
          {' '}
          {currentTime < 12
            ? '⛅️'
            : currentTime > 12 && currentTime < 18
            ? '☀️'
            : '🪐'}
        </Text>
      </View>

      <FlatList
        style={styles.flatlist}
        data={dummyEventData}
        keyExtractor={item => item.postId}
        renderItem={({item}) => (
          <View>
            {/* // 9 AM Fitness Posts */}
            {item.time.getHours() == 9 && item.eventType === 'Fitness' ? (
              <FitnessPost user={item.user} data={item} />
            ) : null}

            {/* // 5 PM Study Posts */}

            {item.time.getHours() == 17 && item.eventType === 'Study' ? (
              <StudyPost user={item.user} data={item} />
            ) : null}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5faff',
  },
  dateHeader: {
    fontSize: 36,
    fontWeight: '800',
    marginTop: 20,
    color: '#334963',
    fontFamily: 'Futura',
  },
  headerContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 24,
  },
  dateContainer: {
    borderBottomWidth: 0,
    borderBottomColor: '#2b2b2b',
    padding: 0,
  },
  flatlist: {
    alignSelf: 'flex-start',
    width: '100%',
  },
  postDateHeader: {
    height: 44,
    width: 44,
    borderRadius: 40,
    backgroundColor: 'white',
    marginRight: 6,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
    borderColor: '#5d769e',
    borderWidth: 2,
  },
  postDate: {
    fontWeight: '600',
    color: '#5d769e',
    fontSize: 12,
  },
});
