import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

export default function TopCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <CalendarStrip
        calendarHeaderStyle={{color: 'white'}}
        selectedDate={date}
        highlightDateNumberContainerStyle={{
          backgroundColor: '#5d769e',
          height: 30,
          width: 30,
          borderRadius: 15,
          justifyContent: 'center',
        }}
        highlightDateNumberStyle={{
          color: '#f5faff',
        }}
        highlightDateNameStyle={{color: '#5d769e'}}
        onDateSelected={selectedDate =>
          console.log(selectedDate.format('DDMYYYY'))
        }
        style={{height: 150, paddingTop: 20, paddingBottom: 10, marginTop: 60}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
