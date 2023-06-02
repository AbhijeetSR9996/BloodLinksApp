import React from 'react';
import { View } from 'react-native';
import { OTPInputView } from 'react-native-otp-autocomplete';

const OTPScreen = () => {
  const handleOTPChange = (otp) => {
    console.log('OTP:', otp);
    // Perform your logic with the entered OTP
  };

  return (
    <View>
      <OTPInputView
        pinCount={4}
        autoFocusOnLoad
        codeInputFieldStyle={{ width: 50, height: 50 }}
        onCodeFilled={handleOTPChange}
      />
    </View>
  );
};

export default OTPScreen;
