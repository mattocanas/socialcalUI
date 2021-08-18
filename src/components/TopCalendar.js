import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

export default function TopCalendar({updateDate}) {
  const [date, setDate] = useState(new Date());

  return (
    <CalendarStrip
      calendarHeaderStyle={{color: 'transparent'}}
      selectedDate={date}
      highlightDateNumberContainerStyle={{
        backgroundColor: '#334963',
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
      }}
      highlightDateNumberStyle={{
        color: '#f5faff',
      }}
      highlightDateNameStyle={{color: '#334963'}}
      onDateSelected={selectedDate =>
        updateDate(selectedDate.toLocaleString().slice(0, 15))
      }
      style={{
        width: '100%',
        marginTop: 30,
        height: 150,
        marginLeft: -290,
      }}
    />
  );
}

const styles = StyleSheet.create({});
