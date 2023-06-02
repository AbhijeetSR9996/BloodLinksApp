import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {COLOR} from '../constants/colorConstants';
const StatusTopBar = props => {
  return (
    <SafeAreaView>
      <StatusBar animated={true} backgroundColor={COLOR.SPLASH} />
    </SafeAreaView>
  );
};

export default StatusTopBar;
