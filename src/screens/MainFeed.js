import React, {useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import Moment from 'react-moment';
import dummyEventData from '../../assets/dummyEventData';

import Post from '../components/Post';
import TopCalendar from '../components/TopCalendar';
export default function MainFeed() {
  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getYear();
  const currentHour = new Date().getHours();
  const currentFullDate = `${currentDate}${currentMonth}${currentYear}`;

  const dataFind = dummyEventData.filter(
    element => element.time.toDateString() == new Date().toDateString(),
  );

  useEffect(() => {
    console.log(new Date().toISOString());
  }, []);

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
          {currentHour < 12
            ? '⛅️'
            : currentHour > 12 && currentHour < 18
            ? '☀️'
            : '🪐'}
        </Text>
        <TopCalendar />
      </View>

      <FlatList
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10, marginTop: -26}}
        data={dataFind.sort(function (a, b) {
          return new Date(a.time) - new Date(b.time);
        })}
        keyExtractor={item => item.postId}
        renderItem={({item}) => (
          <View>
            {/* // 8 AM Work Posts */}
            {item.time.getHours() == 8 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* // 9 AM Fitness Posts */}
            {item.time.getHours() == 9 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* // 5 PM Study Posts */}

            {item.time.getHours() == 17 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* // Class at 1 PM */}
            {item.time.getHours() == 13 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* //Party at 8 PM */}
            {item.time.getHours() == 20 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* //Meal at 12 PM */}
            {item.time.getHours() == 12 ? (
              <Post user={item.user} data={item} />
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
    marginTop: -20,
  },
});
