import React from 'react';
import {View, Text, Image} from 'react-native';

export default function NoPosts() {
  return (
    <View>
      <Image
        source={require('../../assets/images/relax.png')}
        style={{height: 100, width: 100, color: 'red'}}
      />
    </View>
  );
}
