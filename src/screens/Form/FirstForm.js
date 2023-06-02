import React, {useState, useContext, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {moderateScale, scale} from 'react-native-size-matters';
import {MultiSelect} from 'react-native-element-dropdown';
import color from '../../styles/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import DrawerHeader from '../../Components/DrawerHeader';

const FirstForm1 = ({}) => {
  const [checked, setChecked] = useState('other_day');
  const [checked1, setChecked1] = useState('no');
  const [checked2, setChecked2] = useState('yes');
  const [checked3, setChecked3] = useState('yes');
  const [checked4, setChecked4] = useState('no');
  const [checked5, setChecked5] = useState('yes');
  const [checked6, setChecked6] = useState('yes');
  const [checked7, setChecked7] = useState('yes');
  const [checked8, setChecked8] = useState('yes');

  const [checkedA, setCheckedA] = useState(null);
  const [checkedB, setCheckedB] = useState(null);
  const [checkedC, setCheckedC] = useState(null);
  // const [checked1, setChecked1] = React.useState(false);
  const [shouldShow, setShouldShow] = useState(null);
  const [OtherDay, setOtherDay] = useState(true);
  const [isFocus3, setIsFocus3] = useState(false);

  // PICKER STATE

  const [value3, setValue3] = useState([]);

  const [value4, setValue4] = useState([]);

  const [value5, setValue5] = useState([]);

  const [value6, setValue6] = useState([]);

  const [value7, setValue7] = useState([]);

  const [value8, setValue8] = useState([]);

  useEffect(() => {
    Test();
    Test2('no');
    Test3('no');
    Test5('no');
    Test6('no');
    Test7('no');
    Test8('no');
    // setChecked8('no')
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        IdUser();
        FirstFormId();
      }, 10);
    }, []),
  );

  const IdUser = async () => {
    const IdUser = await AsyncStorage.getItem('User');
    // setId(IdUser)
    // console.log('heelooo------------>', IdUser);
  };
  const FirstFormId = async (FormId, gander) => {
    try {
      await AsyncStorage.setItem('FormId1', FormId);
      await AsyncStorage.setItem('Gender', gander);
    } catch (e) {
      // saving error
    }
  };

  const Test = value => {
    if (value == 'today') {
      setChecked('today');
      // alert('hello')
      setShouldShow(true);
      setOtherDay(true);
    } else {
      // alert('hello guys')
      setChecked('other_day');
      setShouldShow(true);
      setOtherDay(false);
    }
  };

  const [dropdounHide8, setdropdounHide8] = useState(true);
  const [disable1, setdisable1] = useState(false);
  const [disable2, setdisable2] = useState(false);
  const [disable3, setdisable3] = useState(false);
  const [disable4, setdisable4] = useState(false);
  const [disable5, setdisable5] = useState(false);
  const [disable6, setdisable6] = useState(false);
  const [disable7, setdisable7] = useState(false);
  const [disable8, setdisable8] = useState(false);

  const Test1 = value => {
    if (value == 'yes') {
      setChecked1('yes');
      setdisable1(false);
    } else {
      setChecked1('no');
      setSelectedValue([]);
      setdisable1(true);
    }
  };
  const Test2 = value => {
    if (value == 'yes') {
      setChecked2('yes');
      setdisable2(false);
    } else {
      setChecked2('no');
      setValue2([]);
      setdisable2(true);
    }
  };
  const Test3 = value => {
    if (value == 'yes') {
      setChecked3('yes');
      setdisable3(false);
    } else {
      setChecked3('no');
      setValue3([]);
      setdisable3(true);
    }
  };
  const Test4 = value => {
    if (value == 'yes') {
      setChecked4('yes');
      setdisable4(false);
    } else {
      setChecked4('no');
      setValue4([]);
      setdisable4(true);
    }
  };
  const Test5 = value => {
    if (value == 'yes') {
      setChecked5('yes');
      setdisable5(false);
    } else {
      setChecked5('no');
      setValue5([]);
      setdisable5(true);
    }
  };
  const Test6 = value => {
    if (value == 'yes') {
      setChecked6('yes');
      setdisable6(false);
    } else {
      setChecked6('no');
      setValue6([]);
      setdisable6(true);
    }
  };
  const Test7 = value => {
    if (value == 'yes') {
      setChecked7('yes');
      setdisable7(false);
    } else {
      setChecked7('no');
      setValue7([]);
      setdisable7(true);
    }
  };
  const Test8 = value => {
    if (value == 'yes') {
      // setModalVisible(true)
      setdisable8(false);
      setChecked8('yes');
    } else {
      setChecked8('no');
      setValue8([]);
      setdisable8(true);
    }
  };
  const SafeSex = value => {
    if (value == 'yes') {
      setChecked8('yes');
      setModalVisible(true);
    } else {
      setValue8([]);
      setModalVisible(false);
      setChecked8('no');
      setdisable8(true);
    }
  };
  const SafeSex1 = value => {
    setValue8([value]);
    setModalVisible(true);
    // console.log('select item', value8);
  };
  const [isActive, setIsActive] = useState(true);
  const [TextHide, setTextHide] = useState(true);

  const NaviChangeColor = value => {
    if (value == 'hello') {
      setIsActive(false);
      setTextHide(false);
      navigation.navigate('Home');
    }
  };

  const [selectedValue, setSelectedValue] = useState([]);
  const [value2, setValue2] = useState([]);

  const handleCheckboxClick1 = value => {
    if (selectedValue.includes(value)) {
      setSelectedValue(selectedValue.filter(item => item !== value));
    } else {
      setSelectedValue([...selectedValue, value]);
    }
    // console.log('Q 3 value check', selectedValue);
  };
  const handleCheckboxClick2 = value => {
    if (value2.includes(value)) {
      setValue2(value2.filter(item => item !== value));
    } else {
      setValue2([...value2, value]);
    }
  };
  const handleCheckboxClick3 = value => {
    if (value3.includes(value)) {
      setValue3(value3.filter(item => item !== value));
    } else {
      setValue3([...value3, value]);
    }
  };
  const handleCheckboxClick4 = value => {
    if (value4.includes(value)) {
      setValue4(value4.filter(item => item !== value));
    } else {
      setValue4([...value4, value]);
    }
  };
  const handleCheckboxClick5 = value => {
    if (value5.includes(value)) {
      setValue5(value5.filter(item => item !== value));
    } else {
      setValue5([...value5, value]);
    }
  };

  const handleCheckboxClick6 = value => {
    if (value6.includes(value)) {
      setValue6(value6.filter(item => item !== value));
    } else {
      setValue6([...value6, value]);
    }
  };

  const handleCheckboxClick7 = value => {
    if (value7.includes(value)) {
      setValue7(value7.filter(item => item !== value));
    } else {
      setValue7([...value7, value]);
    }
  };
  const handleCheckboxClick8 = value => {
    if (value8.includes(value)) {
      setModalVisible(true);
      setValue8(value8.filter(item => item !== value));
    } else {
      // setModalVisible(true)
      SafeSex1(value);
    }
  };

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const firstFormApi = async () => {
    const IdUser = await AsyncStorage.getItem('User');
    // console.log(IdUser,"user id in firstform")
    
    let url = `https://bloodlinks.in/donation_Appointment`;

    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    let data = {
      dts: checked,
      well_feeling: checkedA,
      fed_in_last_4_hrs: checkedB,
      well_slept_last_night: checkedC,
      // 1 point
      has_general_differs: checked1,
      general_differs: selectedValue.join(','),
      // 2 point
      has_taken_medicines: checked2,
      medicines_taken: value2,
      // 3 point
      has_vaccinated: checked3,
      vaccinated_with: value3,
      // 4 point
      has_last_2_week_differs: checked4,
      weeked_differs: value4,
      // 5 point
      has_last_3_month_differs: checked5,
      three_months_differs: value5,
      // 6 point
      has_recent_difers: checked6,
      six_months_differs: value6,
      // 7 point
      has_last_12_month_differs: checked7,
      twelve_months_diffres: value7,
      // 8 point
      has_perm_differ: checked8,
      permanent_differs: value8,
      user_id: IdUser,
      form_step: 'step_1',
    };
    // console.log('form data in first form', data);

    fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify(data),
      headers: headers,
    })
      .then(Response => Response.json())
      .then(async Response => {
        // console.log('RESPONSE in first form', Response);
        // <Steper Resp={Response} />
        // console.log('RESPONSE in first form == form id', Response.form_id);
        // await AsyncStorage.setItem('FormId1', Response.form_id)
        if (Response.status == true) {
          // alert('First Form successfully submit !')
          var gander = Response.gender;
          FirstFormId(gander);
          if (Response.gender == 'male') {
            navigation.navigate('SecondForm', {
              form_id: Response.form_id,
            });
          } else {
            navigation.navigate('WomenForm', {
              form_id: Response.form_id,
            });
          }
        } else {
          alert('First Form fail !');
        }
      })

      .catch(error => {
        console.error('ERROR FOUND' + error);
      });
  };
  // var district = Object.keys(value1).length;
  // console.log('length item selected ----->>>>>', value1)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
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
        <Text style={{fontSize: scale(18), color: 'white'}}>Step 1</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '200',
              top: scale(5),
              color: 'black',
            }}>
            Criteria For Blood Donation
          </Text>
          <View
            style={{
              height: moderateScale(80),
              width: '100%',
              flexDirection: 'column',
              margin: scale(7),
            }}>
            <Text style={{fontSize: scale(14), color: 'black'}}>
              1. When you Donate The Blood ?
            </Text>
            <View
              style={{
                height: moderateScale(55),
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 40,
              }}>
              <RadioButton
                style={{height: 0, width: 20}}
                value="today"
                color={color.red}
                status={checked === 'today' ? 'checked' : 'unchecked'}
                onPress={() => Test('today')}
              />
              <Text style={{fontSize: 15}}>TODAY</Text>

              <RadioButton
                value="other_day"
                color={color.red}
                status={checked === 'other_day' ? 'checked' : 'unchecked'}
                onPress={() => Test('other_day')}
              />
              <Text style={{fontSize: 15}}>SOME OTHER DAY</Text>
            </View>
          </View>
          {shouldShow ? (
            <View
              style={{
                alignItems: 'center',
                height: 'auto',
                width: '100%',
                marginBottom: moderateScale(159),
              }}>
              {OtherDay ? (
                <>
                  <View
                    style={{
                      height: moderateScale(80),
                      width: '100%',
                      flexDirection: 'column',
                    }}>
                    <Text style={{fontSize: scale(14), color: 'black'}}>
                      A) Are you Feeling Well Today To Donate Blood?
                    </Text>
                    <View
                      style={{
                        height: moderateScale(55),
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 40,
                      }}>
                      <RadioButton
                        value="yes"
                        color={color.red}
                        status={checkedA === 'yes' ? 'checked' : 'unchecked'}
                        onPress={() => setCheckedA('yes')}
                      />
                      <Text style={{fontSize: 15}}>Yes</Text>

                      <RadioButton
                        value="no"
                        color={color.red}
                        status={checkedA === 'no' ? 'checked' : 'unchecked'}
                        onPress={() => setCheckedA('no')}
                      />
                      <Text style={{fontSize: 15}}>No</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: moderateScale(80),
                      width: '100%',
                      flexDirection: 'column',
                    }}>
                    <Text style={{fontSize: scale(14), color: 'black'}}>
                      B) Did You Have Anything To Eat In Last 4 Hours?
                    </Text>
                    <View
                      style={{
                        height: moderateScale(55),
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 40,
                      }}>
                      <RadioButton
                        value="yes"
                        color={color.red}
                        status={checkedB === 'yes' ? 'checked' : 'unchecked'}
                        onPress={() => setCheckedB('yes')}
                      />
                      <Text style={{fontSize: 15}}>Yes</Text>

                      <RadioButton
                        value="no"
                        color={color.red}
                        status={checkedB === 'no' ? 'checked' : 'unchecked'}
                        onPress={() => setCheckedB('no')}
                      />
                      <Text style={{fontSize: 15}}>No</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: moderateScale(80),
                      width: '100%',
                      flexDirection: 'column',
                    }}>
                    <Text style={{fontSize: scale(14), color: 'black'}}>
                      C) Did You Sleep Well Last Night?
                    </Text>
                    <View
                      style={{
                        height: moderateScale(55),
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 40,
                      }}>
                      <RadioButton
                        value="yes"
                        color={color.red}
                        status={checkedC === 'yes' ? 'checked' : 'unchecked'}
                        onPress={() => setCheckedC('yes')}
                      />
                      <Text style={{fontSize: 15}}>Yes</Text>

                      <RadioButton
                        value="no"
                        color={color.red}
                        status={checkedC === 'no' ? 'checked' : 'unchecked'}
                        onPress={() => setCheckedC('no')}
                      />
                      <Text style={{fontSize: 15}}>No</Text>
                    </View>
                  </View>
                </>
              ) : null}
              <View
                style={{
                  width: '95%',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  marginBottom: scale(20),
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    paddingBottom: scale(10),
                  }}>
                  <Text style={{fontSize: scale(14), color: 'black'}}>
                    2. Are You Suffering From :
                  </Text>
                  <View
                    style={{
                      height: moderateScale(35),
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: 30,
                    }}>
                    <RadioButton
                      value="yes"
                      color={color.red}
                      status={checked1 === 'yes' ? 'checked' : 'unchecked'}
                      onPress={() => Test1('yes')}
                    />
                    <Text style={{fontSize: 15}}>Yes</Text>
                    <RadioButton
                      value="no"
                      color={color.red}
                      status={checked1 === 'no' ? 'checked' : 'unchecked'}
                      onPress={() => Test1('no')}
                    />
                    <Text style={{fontSize: 15}}>No</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-evenly',
                  }}>
                  <View
                    style={{
                      width: '40%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick1('66')}
                      value={selectedValue.includes('66')}
                      disabled={disable1}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Common Cold{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '25%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick1('67')}
                      value={selectedValue.includes('67')}
                      disabled={disable1}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Fever{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '30%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick1('68')}
                      value={selectedValue.includes('68')}
                      disabled={disable1}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Sinusitis{' '}
                    </Text>
                  </View>
                </View>
              </View>
              {/* second Question */}
              <View
                style={{
                  width: '95%',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  marginBottom: scale(20),
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    paddingBottom: scale(10),
                  }}>
                  <Text style={{fontSize: scale(14), color: 'black'}}>
                    3. Have You Taking Or Have Taken Medicine In Last 72 Hours
                    Any Of The Following:
                  </Text>
                  
                  <View
                    style={{
                      height: moderateScale(40),
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: 30,
                    }}>
                    <RadioButton
                      value="yes"
                      color={color.red}
                      status={checked2 === 'yes' ? 'checked' : 'unchecked'}
                      onPress={() => Test2('yes')}
                    />
                    <Text style={{fontSize: 15}}>Yes</Text>
                    <RadioButton
                      value="no"
                      color={color.red}
                      status={checked2 === 'no' ? 'checked' : 'unchecked'}
                      onPress={() => Test2('no')}
                    />
                    <Text style={{fontSize: 15}}>No</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-evenly',
                  }}>
                  <View
                    style={{
                      width: '40%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick2('1')}
                      value={value2.includes('1')}
                      disabled={disable2}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Antibiotic{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '25%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick2('2')}
                      value={value2.includes('2')}
                      disabled={disable2}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Alcohol{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '30%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick2('3')}
                      value={value2.includes('3')}
                      disabled={disable2}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Asprin{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '41%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick2('4')}
                      value={value2.includes('4')}
                      disabled={disable2}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Steroid{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '56%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick2('5')}
                      value={value2.includes('5')}
                      disabled={disable2}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Any Other{' '}
                    </Text>
                  </View>
                </View>
              </View>
              {/* third Question */}
              <View
                style={{
                  width: '95%',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  marginBottom: scale(20),
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    paddingBottom: scale(10),
                  }}>
                  <Text style={{fontSize: scale(14), color: 'black'}}>
                    4. In The Last 2 Weeks Have You Been Vaccinated/Immunized
                    For Any Of The Following:
                  </Text>
                  <View
                    style={{
                      height: moderateScale(55),
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: 40,
                    }}>
                    <RadioButton
                      value="yes"
                      color={color.red}
                      status={checked3 === 'yes' ? 'checked' : 'unchecked'}
                      onPress={() => Test3('yes')}
                    />
                    <Text style={{fontSize: 15}}>Yes</Text>

                    <RadioButton
                      value="no"
                      color={color.red}
                      status={checked3 === 'no' ? 'checked' : 'unchecked'}
                      onPress={() => Test3('no')}
                    />
                    <Text style={{fontSize: 15}}>No</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-evenly',
                  }}>
                  <View
                    style={{
                      width: '40%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick3('1')}
                      value={value3.includes('1')}
                      disabled={disable3}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Diphtheria{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '25%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick3('2')}
                      value={value3.includes('2')}
                      disabled={disable3}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Tetanus{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '30%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick3('3')}
                      value={value3.includes('3')}
                      disabled={disable3}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Plague{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '41%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick3('4')}
                      value={value3.includes('4')}
                      disabled={disable3}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Rabies Prophylaxis{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '56%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick3('5')}
                      value={value3.includes('5')}
                      disabled={disable3}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Polio Injectable{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '41%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick3('6')}
                      value={value3.includes('6')}
                      disabled={disable3}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Hepatitis B Vaccine{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '56%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick3('7')}
                      value={value3.includes('7')}
                      disabled={disable3}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Papilloma Virus{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '41%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick3('8')}
                      value={value3.includes('8')}
                      disabled={disable3}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Cholera{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '56%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick3('9')}
                      value={value3.includes('9')}
                      disabled={disable3}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Pneumcoccal{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-evenly',
                  }}>
                  <View
                    style={{
                      width: '34%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick3('10')}
                      value={value3.includes('10')}
                      disabled={disable3}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Pertussis{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '22%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick3('11')}
                      value={value3.includes('11')}
                      disabled={disable3}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Typhoid{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '40%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick3('12')}
                      value={value3.includes('12')}
                      disabled={disable3}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Meningoceccal{' '}
                    </Text>
                  </View>
                </View>
              </View>
              {/* fourth Question */}
              <View
                style={{
                  width: '95%',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  marginBottom: scale(20),
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    paddingBottom: scale(10),
                  }}>
                  <Text style={{fontSize: scale(14), color: 'black'}}>
                    5. In The Last 2 Weeks Did You Suffer From Any Of The
                    Following Diseases:
                  </Text>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: 40,
                    }}>
                    <RadioButton
                      value="yes"
                      color={color.red}
                      status={checked4 === 'yes' ? 'checked' : 'unchecked'}
                      onPress={() => Test4('yes')}
                    />
                    <Text style={{fontSize: 15}}>Yes</Text>

                    <RadioButton
                      value="no"
                      color={color.red}
                      status={checked4 === 'no' ? 'checked' : 'unchecked'}
                      onPress={() => Test4('no')}
                    />
                    <Text style={{fontSize: 15}}>No</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '41%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick4('41')}
                      value={value4.includes('41')}
                      disabled={disable4}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Chicken Pox{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '57%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick4('42')}
                      value={value4.includes('42')}
                      disabled={disable4}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Cystitis:Urinary Tract Infection{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-evenly',
                  }}>
                  <View
                    style={{
                      width: '40%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick4('43')}
                      value={value4.includes('43')}
                      disabled={disable4}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Mumps{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '25%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick4('44')}
                      value={value4.includes('44')}
                      disabled={disable4}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Measles{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '30%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick4('45')}
                      value={value4.includes('45')}
                      disabled={disable4}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Diarrhoea{' '}
                    </Text>
                  </View>
                </View>
              </View>
              {/* five Question */}
              <View
                style={{
                  width: '95%',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  marginBottom: scale(20),
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    FpaddingBottom: scale(10),
                  }}>
                  <Text style={{fontSize: scale(14), color: 'black'}}>
                    6. In The Last 3 Months Have You Had Any Of The Following :
                  </Text>
                  <View
                    style={{
                      height: moderateScale(55),
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: 40,
                    }}>
                    <RadioButton
                      value="yes"
                      color={color.red}
                      status={checked5 === 'yes' ? 'checked' : 'unchecked'}
                      onPress={() => Test5('yes')}
                    />
                    <Text style={{fontSize: 15}}>Yes</Text>

                    <RadioButton
                      value="no"
                      color={color.red}
                      status={checked5 === 'no' ? 'checked' : 'unchecked'}
                      onPress={() => Test5('no')}
                    />
                    <Text style={{fontSize: 15}}>No</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '41%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick5('46')}
                      value={value5.includes('46')}
                      disabled={disable5}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Dental Extraction{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '57%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick5('47')}
                      value={value5.includes('47')}
                      disabled={disable5}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Malaria{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '41%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick5('48')}
                      value={value5.includes('48')}
                      disabled={disable5}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Minor Surgery{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '57%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick5('49')}
                      value={value5.includes('49')}
                      disabled={disable5}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Zika / West Nile IntectIon(S){' '}
                    </Text>
                  </View>
                </View>
              </View>
              {/* six Question */}
              <View
                style={{
                  width: '95%',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  marginBottom: scale(20),
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    paddingBottom: scale(10),
                  }}>
                  <Text style={{fontSize: scale(14), color: 'black'}}>
                    7. In The Last 6 Months Have You Had Any Of The Following :
                  </Text>
                  <View
                    style={{
                      height: moderateScale(55),
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: 40,
                    }}>
                    <RadioButton
                      value="yes"
                      color={color.red}
                      status={checked6 === 'yes' ? 'checked' : 'unchecked'}
                      onPress={() => Test6('yes')}
                    />
                    <Text style={{fontSize: 15}}>Yes</Text>

                    <RadioButton
                      value="no"
                      color={color.red}
                      status={checked6 === 'no' ? 'checked' : 'unchecked'}
                      onPress={() => Test6('no')}
                    />
                    <Text style={{fontSize: 15}}>No</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '41%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick6('37')}
                      value={value6.includes('37')}
                      disabled={disable6}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Anemia{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '57%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick6('38')}
                      value={value6.includes('38')}
                      disabled={disable6}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Accidental Needle Prick{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '41%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick6('39')}
                      value={value6.includes('39')}
                      disabled={disable6}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Dengue{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '57%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick6('40')}
                      value={value6.includes('40')}
                      disabled={disable6}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Penpheral Stem Cells{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '41%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick6('50')}
                      value={value6.includes('50')}
                      disabled={disable6}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Tattooing{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '57%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick6('51')}
                      value={value6.includes('51')}
                      disabled={disable6}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'justify',
                      }}>
                      {' '}
                      Localized Skin Cancer That Was Removed{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '41%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick6('52')}
                      value={value6.includes('52')}
                      disabled={disable6}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Chikungunya{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '57%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick6('53')}
                      value={value6.includes('53')}
                      disabled={disable6}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Repeated Diarrhea{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '56%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(3),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick6('54')}
                      value={value6.includes('54')}
                      disabled={disable6}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Blood Transfusion{' '}
                    </Text>
                  </View>
                </View>
              </View>
              {/* Question 7*/}
              <View
                style={{
                  width: '95%',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  marginBottom: scale(20),
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    paddingBottom: scale(10),
                  }}>
                  <Text style={{fontSize: scale(14), color: 'black'}}>
                    8. In The Last 12 Months Have You Had Any Of The Following :
                  </Text>
                  <View
                    style={{
                      height: moderateScale(55),
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: 40,
                    }}>
                    <RadioButton
                      value="yes"
                      color={color.red}
                      status={checked7 === 'yes' ? 'checked' : 'unchecked'}
                      onPress={() => Test7('yes')}
                    />
                    <Text style={{fontSize: 15}}>Yes</Text>

                    <RadioButton
                      value="no"
                      color={color.red}
                      status={checked7 === 'no' ? 'checked' : 'unchecked'}
                      onPress={() => Test7('no')}
                    />
                    <Text style={{fontSize: 15}}>No</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '60%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(4),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick7('55')}
                      value={value7.includes('55')}
                      disabled={disable7}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Jaundice{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '78%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(4),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick7('56')}
                      value={value7.includes('56')}
                      disabled={disable7}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Organ / Tissue Or Bone Marrow Donation{' '}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '41%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick7('57')}
                      value={value7.includes('57')}
                      disabled={disable7}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Major Surgery{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '57%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick7('58')}
                      value={value7.includes('58')}
                      disabled={disable7}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Immunogtobutin{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '48%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick7('59')}
                      value={value7.includes('59')}
                      disabled={disable7}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Vaccination (Rabies){' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '50%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick7('60')}
                      value={value7.includes('60')}
                      disabled={disable7}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'justify',
                      }}>
                      {' '}
                      Typhoid{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '41%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick7('61')}
                      value={value7.includes('61')}
                      disabled={disable7}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Bone Or Skin Graft{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '57%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick7('62')}
                      value={value7.includes('62')}
                      disabled={disable7}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Hepatitis A/ E{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '41%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick7('63')}
                      value={value7.includes('63')}
                      disabled={disable7}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Body Piercing{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '57%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick7('64')}
                      value={value7.includes('64')}
                      disabled={disable7}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      GI Endoscopy{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '78%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(4),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick7('65')}
                      value={value7.includes('65')}
                      disabled={disable7}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Inmate Of Jail Or Any Other Confinement{' '}
                    </Text>
                  </View>
                </View>
              </View>
              {/* Question 8 */}
              <View
                style={{
                  width: '95%',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  marginBottom: scale(20),
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    paddingBottom: scale(10),
                  }}>
                  <Text style={{fontSize: scale(14), color: 'black'}}>
                    9. Have You Ever Had Any Of The Following (Permanent Defer)
                    :
                  </Text>
                  <View
                    style={{
                      height: moderateScale(55),
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: 40,
                    }}>
                    <RadioButton
                      value="yes"
                      color={color.red}
                      status={checked8 === 'yes' ? 'checked' : 'unchecked'}
                      onPress={() => Test8('yes')}
                    />
                    <Text style={{fontSize: 15}}>Yes</Text>

                    <RadioButton
                      value="no"
                      color={color.red}
                      status={checked8 === 'no' ? 'checked' : 'unchecked'}
                      onPress={() => Test8('no')}
                    />
                    <Text style={{fontSize: 15}}>No</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '60%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(4),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('1')}
                      value={value8.includes('1')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Heart Disease{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '90%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(4),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('2')}
                      value={value8.includes('2')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Recipient Of Organ / Stem Cells Transplantation{' '}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '58%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(3),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('3')}
                      value={value8.includes('3')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Cancer! Malignant Disease{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '48%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('4')}
                      value={value8.includes('4')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Chronic Liver Disease{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '50%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('5')}
                      value={value8.includes('5')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'justify',
                      }}>
                      {' '}
                      Tuberculosis{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '48%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('6')}
                      value={value8.includes('6')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Hepatitis B/C Infection{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '50%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('7')}
                      value={value8.includes('7')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'justify',
                      }}>
                      {' '}
                      Any Swollen Gland{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '48%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('8')}
                      value={value8.includes('8')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Convulsion{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '50%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('9')}
                      value={value8.includes('9')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'justify',
                      }}>
                      {' '}
                      Acute Kidney Infection{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '48%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('10')}
                      value={value8.includes('10')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Leprosy{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '50%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('11')}
                      value={value8.includes('11')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'justify',
                      }}>
                      {' '}
                      Endocrine Disorders{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '78%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(4),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('12')}
                      value={value8.includes('12')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Chronic Respiratory Disease{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '78%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(4),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('13')}
                      value={value8.includes('13')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Diabetes (Contsolled On Insulin){' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '48%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('14')}
                      value={value8.includes('14')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Polycythemia{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '50%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('15')}
                      value={value8.includes('15')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'justify',
                      }}>
                      {' '}
                      Schizophrenia{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '48%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('16')}
                      value={value8.includes('16')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Asthma On Steroids{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '50%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('17')}
                      value={value8.includes('17')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'justify',
                      }}>
                      {' '}
                      Epilepsy{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '48%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('18')}
                      value={value8.includes('18')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Hemolytic Anemia{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '50%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('19')}
                      value={value8.includes('19')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'justify',
                      }}>
                      {' '}
                      Psychiatric Disorder{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '78%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(4),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('20')}
                      value={value8.includes('20')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Abnormal Bleeding Tendency{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '78%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(4),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('21')}
                      value={value8.includes('21')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Cardiac Vascular Disease{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '86%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(4),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('22')}
                      value={value8.includes('22')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Open Heart Surgery Including By-Pass Surgery{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '78%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(4),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('23')}
                      value={value8.includes('23')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Severe Allergic Disease{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '48%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('24')}
                      value={value8.includes('24')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Stomach Unfcer{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '50%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('25')}
                      value={value8.includes('25')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'justify',
                      }}>
                      {' '}
                      Lung Disease{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '48%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('26')}
                      value={value8.includes('26')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Autoimmune Disorder{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '50%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('27')}
                      value={value8.includes('27')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'justify',
                      }}>
                      {' '}
                      Kala - Azar{' '}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '78%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(4),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('28')}
                      value={value8.includes('28')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Sexually Transmitted Diseases{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '78%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(4),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('29')}
                      value={value8.includes('29')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Unexplained Weight Loss{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '78%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(4),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('30')}
                      value={value8.includes('30')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      Thyrotoxicosis Due To Graves Disease{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: '78%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: scale(4),
                    }}>
                    <CheckBox
                      tintColors={{true: '#93121B'}}
                      boxType={'square'}
                      onValueChange={() => handleCheckboxClick8('31')}
                      value={value8.includes('31')}
                      disabled={disable8}
                    />
                    <Text
                      style={{
                        fontSize: scale(11),
                        color: 'black',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}>
                      {' '}
                      History Of Malignant Thyroid Tumours{' '}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ) : null}
        </View>
      </ScrollView>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          height: moderateScale(50),
          width: '100%',
          marginBottom: moderateScale(20),
          position: 'relative',
        }}>
        <View
          style={{
            height: moderateScale(50),
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              height: moderateScale(50),
              width: '45%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#bb3039',
              borderRadius: moderateScale(10),
              marginRight: moderateScale(5),
            }}>
            <Text
              style={{
                fontSize: scale(16),
                textAlign: 'center',
                color: 'white',
              }}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => firstFormApi()}
            style={{
              height: moderateScale(50),
              width: '45%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#bb3039',
              borderRadius: moderateScale(10),
              marginLeft: moderateScale(5),
            }}>
            <Text
              style={{
                fontSize: scale(16),
                textAlign: 'center',
                color: 'white',
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 290,
              width: '90%',
              borderRadius: 25,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <View
              style={{
                height: moderateScale(40),
                width: '100%',
                flexDirection: 'row',
                borderBottomWidth: 0.3,
              }}>
              <View
                style={{
                  height: moderateScale(40),
                  width: '70%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: scale(19),
                    color: 'black',
                    fontWeight: '350',
                    color: '#808080',
                  }}>
                  Permanent Defer
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'flex-start',
                flexDirection: 'column',
                flexDirection: 'row',
                width: '94%',
                height: moderateScale(160),
                backgroundColor: isActive ? '#f7d9db' : '#bee2c5',
                padding: 15,
                borderRadius: 10,
                marginTop: moderateScale(10),
                marginBottom: moderateScale(10),
              }}>
              {TextHide ? (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    width: '100%',
                    height: moderateScale(170),
                  }}>
                  <View
                    style={{
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      width: '100%',
                      height: moderateScale(30),
                    }}>
                    <Text
                      style={{
                        fontSize: scale(17),
                        textAlign: 'center',
                        color: '#994145',
                      }}>
                      Sorry you are not eligible to donate
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      width: '100%',
                      height: moderateScale(25),
                    }}>
                    <Text
                      style={{
                        fontSize: scale(16),
                        textAlign: 'center',
                        color: '#994145',
                      }}>
                      blood for the following reason:
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      width: '100%',
                    }}>
                    <Text
                      style={{
                        fontSize: scale(17),
                        textAlign: 'center',
                        color: '#660e0e',
                      }}>
                      {value8}
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      width: '100%',
                      height: moderateScale(40),
                    }}>
                    <Text style={{fontSize: scale(16), color: '#994145'}}>
                      You can refer someone else to donate blood.
                    </Text>
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    width: '100%',
                    height: moderateScale(170),
                  }}>
                  <View
                    style={{
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      width: '100%',
                      height: moderateScale(30),
                    }}>
                    <Text
                      style={{
                        fontSize: scale(17),
                        textAlign: 'center',
                        color: '#196827',
                      }}>
                      Sorry you are not eligible to donate
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      width: '100%',
                      height: moderateScale(25),
                    }}>
                    <Text
                      style={{
                        fontSize: scale(16),
                        textAlign: 'center',
                        color: '#196827',
                      }}>
                      blood for but data has been{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      width: '100%',
                    }}>
                    <Text
                      style={{
                        fontSize: scale(17),
                        textAlign: 'center',
                        color: '#196827',
                      }}>
                      collected.
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      width: '100%',
                      height: moderateScale(40),
                    }}>
                    <Text style={{fontSize: scale(16), color: '#196827'}}>
                      You can refer someone else to donate blood.
                    </Text>
                  </View>
                </View>
              )}
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                width: '100%',
                height: moderateScale(40),
              }}>
              <TouchableOpacity
                onPress={() => SafeSex('none')}
                style={{
                  height: moderateScale(40),
                  width: '40%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: color.red,
                  borderRadius: moderateScale(6),
                  marginRight: moderateScale(15),
                }}>
                <Text
                  style={{
                    fontSize: scale(16),
                    textAlign: 'center',
                    color: 'white',
                  }}>
                  Modify
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => NaviChangeColor('hello')}
                style={{
                  height: moderateScale(40),
                  width: '40%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: color.red,
                  borderRadius: moderateScale(6),
                }}>
                <Text
                  style={{
                    fontSize: scale(16),
                    textAlign: 'center',
                    color: 'white',
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default FirstForm1;
const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    backgroundColor: 'white',
    borderWidth: scale(1),
    padding: scale(15),
    borderRadius: 5,
    letterSpacing: 1,
    fontSize: scale(15),
    fontWeight: '400',
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 12,
    color: 'black',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },
});
