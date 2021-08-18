import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import Moment from 'react-moment';
import dummyEventData from '../../assets/dummyEventData';

import Post from '../components/Post';
import TopCalendar from '../components/TopCalendar';
export default function MainFeed() {
  const currentHour = new Date().getH;
  const [date, setDate] = useState(new Date().toDateString());

  const data = dummyEventData.filter(
    element => element.time.toDateString() == date,
  );

  const updateDate = newDate => {
    setDate(newDate);
  };

  useEffect(() => {
    console.log(dummyEventData[3].time.toDateString());
  }, [date]);

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
        <TopCalendar updateDate={updateDate} />
      </View>

      <FlatList
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10, marginTop: -26}}
        data={data.sort(function (a, b) {
          return new Date(a.time) - new Date(b.time);
        })}
        keyExtractor={item => item.postId}
        renderItem={({item}) => (
          <View>
            {/* // 12 AM Work Posts */}
            {item.time.getHours() == 24 ? (
              <Post user={item.user} data={item} />
            ) : null}
            {/* // 1 AM Work Posts */}
            {item.time.getHours() == 1 ? (
              <Post user={item.user} data={item} />
            ) : null}
            {/* // 2 AM Work Posts */}
            {item.time.getHours() == 2 ? (
              <Post user={item.user} data={item} />
            ) : null}
            {/* // 3 AM Work Posts */}
            {item.time.getHours() == 3 ? (
              <Post user={item.user} data={item} />
            ) : null}
            {/* // 4 AM Work Posts */}
            {item.time.getHours() == 4 ? (
              <Post user={item.user} data={item} />
            ) : null}
            {/* // 5 AM Work Posts */}
            {item.time.getHours() == 5 ? (
              <Post user={item.user} data={item} />
            ) : null}
            {/* // 6 AM Work Posts */}
            {item.time.getHours() == 6 ? (
              <Post user={item.user} data={item} />
            ) : null}
            {/* // 7 AM Work Posts */}
            {item.time.getHours() == 7 ? (
              <Post user={item.user} data={item} />
            ) : null}
            {/* // 8 AM Work Posts */}
            {item.time.getHours() == 8 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* // 9 AM Fitness Posts */}
            {item.time.getHours() == 9 ? (
              <Post user={item.user} data={item} />
            ) : null}
            {/* // 10 AM Work Posts */}
            {item.time.getHours() == 10 ? (
              <Post user={item.user} data={item} />
            ) : null}
            {/* // 11 AM Work Posts */}
            {item.time.getHours() == 11 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* // 12 PM Study Posts */}

            {item.time.getHours() == 12 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* // 1 PM Study Posts */}

            {item.time.getHours() == 13 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* // 2 PM Study Posts */}

            {item.time.getHours() == 14 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* // 3 PM Study Posts */}

            {item.time.getHours() == 15 ? (
              <Post user={item.user} data={item} />
            ) : null}
            {/* // 4 PM Study Posts */}

            {item.time.getHours() == 16 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* // 5 PM Study Posts */}

            {item.time.getHours() == 17 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* // 6 PM Study Posts */}

            {item.time.getHours() == 18 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* // 7 PM Study Posts */}

            {item.time.getHours() == 19 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* //Party at 8 PM */}
            {item.time.getHours() == 20 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* //Meal at 9 PM */}
            {item.time.getHours() == 21 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* // 10 PM Study Posts */}

            {item.time.getHours() == 22 ? (
              <Post user={item.user} data={item} />
            ) : null}

            {/* // 11 PM Study Posts */}

            {item.time.getHours() == 23 ? (
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
