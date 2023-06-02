import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
//import CheckBox from '@react-native-community/checkbox';
import {moderateScale, scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
//import color from '../../styles/color';
import DrawerHeader from '../../Components/DrawerHeader';

const FourtForm = ({route}) => {
  const {form_id} = route.params;
  // console.log('fourth form form id =', form_id);
  const navigation = useNavigation();
  // const [checked, setChecked] = useState(false);
  // const [checked1, setChecked1] = useState(false);
  // const [checked2, setChecked2] = useState('no');
  // const [checked3, setChecked3] = useState('yes');
  // const [checked4, setChecked4] = useState('yes');
  // const [value6, setValue6] = useState([]);
  // const handleCheckboxClick6 = (value) => {
  //   if (value6.includes(value)) {
  //     setValue6(value6.filter(item => item !== value));
  //   } else {
  //     setValue6([value]);
  //   }
  //   console.log('one item select', value6)
  // };

  // const firstFormApi = async () => {
  //   const IdUser = await AsyncStorage.getItem('User')
  //    const jsonValue = await AsyncStorage.getItem('Gender')
  //   let url = `https://bloodlinks.in/donation_Appointment`   //API to render signup
  //   var headers = {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   };
  //   fetch(url, {
  //     method: 'POST',
  //     credentials: 'same-origin',
  //     mode: 'same-origin',
  //     body: JSON.stringify({
  //       user_id: IdUser,
  //       form_step: 'step_4',
  //       form_id:  route.params.form_id,
  //       gender: jsonValue,
  //       opportunity: checked2,
  //       refuse: checked3,
  //       regular: checked4,
  //       donor: value6,
  //     }),
  //     headers: headers,
  //   })
  //     .then((Response) => Response.json())
  //     .then((Response) => {
  //       console.log('RESPONSE apiiii fourt form-------------->>>>', Response)
  //       // console.log(' second Id-------------->>>>', WomenId)
  //       if (Response.status == true) {
  //         // alert('Third Form successfully submit !')
  //         navigation.navigate('ScheduleAppointment')
  //       } else {
  //         alert('First Form fail !')
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("ERROR FOUND catch" + error);
  //     })
  // }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <DrawerHeader name={'Donation Form'} image1={false} />
      <View
        style={{
          height: moderateScale(35),
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingLeft: moderateScale(10),
          backgroundColor: 'black',
        }}>
        <Text style={{fontSize: scale(18), color: 'white'}}>Step 4</Text>
      </View>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              width: '100%',
              marginBottom: moderateScale(159),
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '200',
                top: scale(5),
                color: 'black',
              }}>
              REQUEST FOR BLOOD DONATION
            </Text>
            <View
              style={{
                backgroundColor: 'white',
                height: moderateScale(300),
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: moderateScale(10),
                shadowColor: '#171717',
                shadowOffset: {width: -2, height: 12},
                shadowOpacity: 5,
                shadowRadius: moderateScale(10),
                elevation: 20,
                marginTop: moderateScale(80),
                paddingHorizontal: 25,
              }}>
              <Text style={{fontSize: scale(18), color: 'black'}}>
                Thanks for filling up the form
              </Text>
              <View
                style={{
                  height: moderateScale(100),
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: scale(18), color: 'black'}}>
                  Please click here to{' '}
                </Text>
              </View>
              <TouchableOpacity //onPress={() => firstFormApi()}
                onPress={() =>
                  navigation.navigate('ScheduleAppointment', {form_id: form_id})
                }
                style={{
                  backgroundColor: 'black',
                  height: moderateScale(60),
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: scale(17), color: 'white'}}>
                  schedule appointment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FourtForm;
