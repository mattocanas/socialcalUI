import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import Moment from 'react-moment';
import dummyEventData from '../../assets/dummyEventData';
import FitnessPost from '../components/FitnessPost';
import StudyPost from '../components/StudyPost';
import ClassPost from '../components/ClassPost';
import PartyPost from '../components/PartyPost';
import FoodDrinkPost from '../components/FoodDrinkPost';
import WorkPost from '../components/WorkPost';
export default function MainFeed() {
  const currentTime = new Date().getHours();

  const sortData = () => {
    array.sort(function (a, b) {
      return new Date(b.time) - new Date(a.time);
    });
  };

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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}
        data={dummyEventData.sort(function (a, b) {
          return new Date(a.time) - new Date(b.time);
        })}
        keyExtractor={item => item.postId}
        renderItem={({item}) => (
          <View>
            {/* // 8 AM Work Posts */}
            {item.time.getHours() == 8 && item.eventType === 'Work' ? (
              <WorkPost user={item.user} data={item} />
            ) : null}

            {/* // 9 AM Fitness Posts */}
            {item.time.getHours() == 9 && item.eventType === 'Fitness' ? (
              <FitnessPost user={item.user} data={item} />
            ) : null}

            {/* // 5 PM Study Posts */}

            {item.time.getHours() == 17 && item.eventType === 'Study' ? (
              <StudyPost user={item.user} data={item} />
            ) : null}

            {/* // Class at 1 PM */}
            {item.time.getHours() == 13 && item.eventType === 'Class' ? (
              <ClassPost user={item.user} data={item} />
            ) : null}

            {/* //Party at 8 PM */}
            {item.time.getHours() == 20 && item.eventType === 'Party' ? (
              <PartyPost user={item.user} data={item} />
            ) : null}

            {/* //Meal at 12 PM */}
            {item.time.getHours() == 12 && item.eventType === 'FoodDrink' ? (
              <FoodDrinkPost user={item.user} data={item} />
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
