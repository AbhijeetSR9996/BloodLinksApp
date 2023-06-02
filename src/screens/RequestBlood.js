import React, {useState, useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  s,
  scale,
} from 'react-native-size-matters';
import DropDownPicker from 'react-native-dropdown-picker';
import {RadioButton, Checkbox} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';

import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import DrawerHeader from '../Components/DrawerHeader';
import color from '../styles/color';
//import ModalDropdown from 'react-native-modal-dropdown';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import {getUserData} from '../asyncstorage/details';

const RequestBlood = () => {
  const [disable, setdisable] = useState(false);
  // first screen
  const [Patient, setPatient] = useState('');
  const [Age, setAge] = useState('');
  const [Registration, setRegistration] = useState('');
  const [Ward, setWard] = useState('');
  const [Bed, setBed] = useState('');
  const [Father, setFather] = useState('');
  const [Hospital, setHospital] = useState('');
  const [PhoneHos, setPhoneHos] = useState('');
  const [Consultant, setConsultant] = useState('');
  const [PhoneConsul, setPhoneConsul] = useState('');
  const [open1, setopen1] = useState(false);
  const [value1, setValue1] = useState([]);
  const [items1, setItems1] = React.useState([]);
  // State second
  const [Clinical, setClinical] = useState('');
  const [Diagnosis, setDiagnosis] = useState('');
  const [HbGm, setHbGm] = useState('');
  const [Platelet, setPlatelet] = useState('');
  const [Reasons, setReasons] = useState('');
  const [InCase, setInCase] = useState('');
  const [checkedA, setCheckedA] = useState('');
  const [value2, setValue2] = useState([]);

  // state third
  const [checkedB, setCheckedB] = useState('yes');
  const [checkedB2, setCheckedB2] = useState('yes');
  const [checkedB3, setCheckedB3] = useState('yes');
  const [checkedB4, setCheckedB4] = useState('yes');
  const [checkedB5, setCheckedB5] = useState('yes');
  const [checkedB6, setCheckedB6] = useState('yes');

  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);
  const [isSelected5, setSelection5] = useState(false);
  const [isSelected6, setisSelected6] = useState(false);
  const [Input1, setInput1] = useState('');
  const [Input2, setInput2] = useState('');
  const [Input3, setInput3] = useState('');
  const [Input4, setInput4] = useState('');
  const [Input5, setInput5] = useState('');
  const [Input6, setInput6] = useState('');
  //  State fourth
  const [Check1, setCheck1] = useState(false);
  const [Check2, setCheck2] = useState(false);
  const [Check3, setCheck3] = useState(false);
  const [Check4, setCheck4] = useState(false);
  const [Check5, setCheck5] = useState(false);
  const [Check6, setCheck6] = useState(false);
  const [Check7, setCheck7] = useState(false);
  const [Check8, setCheck8] = useState(false);
  const [Check9, setCheck9] = useState(false);
  const [Check10, setCheck10] = useState(false);
  const [Check11, setCheck11] = useState(false);
  const [pickerMode, setPickerMode] = useState(null);
  const [pickerMode1, setPickerMode1] = useState(null);
  const [date1, setdate] = useState('MM/DD/YY');
  const [time, settime] = useState('HH/MM');
  const [modalVisible, setModalVisible] = useState(false);
  const [bloodV, setbloodV] = useState('');
  const [blood, setblood] = useState('Select Blood Group');

  const BloodModal = value => {
    if (value == 1) {
      setblood('A+');
      setbloodV('1');
      setModalVisible(false);
    } else if (value == 2) {
      setblood('A-');
      setbloodV('2');
      setModalVisible(false);
    } else if (value == 3) {
      setblood('AB+');
      setbloodV('3');
      setModalVisible(false);
    } else if (value == 4) {
      setblood('AB-');
      setbloodV('4');
      setModalVisible(false);
    } else if (value == 5) {
      setblood('B+');
      setbloodV('5');
      setModalVisible(false);
    } else if (value == 6) {
      setblood('B-');
      setbloodV('6');
      setModalVisible(false);
    } else if (value == 7) {
      setblood('O+');
      setbloodV('7');
      setModalVisible(false);
    } else {
      setblood('O-');
      setbloodV('8');
      setModalVisible(false);
    }
  };

  useEffect(() => {
    console.log('date---------->>>stor', date1);
    console.log('date---------->>>stor', time);
    time;
  }, [date1]);
  const showDatePicker1 = () => {
    setPickerMode1('time');
  };

  const hidePicker1 = () => {
    setPickerMode1(null);
  };

  const handleConfirm1 = time => {
    hidePicker1();
    settime(moment(time).format('LT'));
  };
  const showDatePicker = () => {
    setPickerMode('date');
  };

  const hidePicker = () => {
    setPickerMode(null);
  };

  const handleConfirm = date => {
    hidePicker();
    setdate(moment(date).format('L'));
  };

  const navigation = useNavigation();

  const LoginUserId = async city => {
    try {
      await AsyncStorage.setItem('RequestId', city);
    } catch (e) {
      // saving error
    }
  };
  const handleCity = async () => {
    const IdUser = await AsyncStorage.getItem('User');

    console.log(IdUser, 'user id ');

    let url = `https://bloodlinks.in/bloodrequest_form`; //API to render signup
    // let url = `http://hirectjob.in/hirectjob_api/user_register.php`
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    // console.log('heelooo------------>', IdUser);

    let formData = {
      p_name: Patient,
      age: Age,
      gender: value1,
      registration: Registration,
      ward: Ward,
      bed: Bed,
      f_name: Father,
      hospital: Hospital,
      phone: PhoneHos,
      consultant: Consultant,
      consultant_phone: PhoneConsul,
      // second
      clinical_history: Clinical,
      diagnosis: Diagnosis,
      hb: HbGm,
      platelet: Platelet,
      reasons: Reasons,
      history_previous: checkedA,
      blood_group: bloodV,
      female: InCase,
      // Third
      whole_blood_unit: Input1,
      whole_blood_test: checkedB,
      Cryo_Poor_Plasma_unit: Input2,
      Cryo_Poor_Plasma_test: checkedB2,
      Cryoprecipitate_unit: Input3,
      Cryoprecipitate_test: checkedB3,
      Fresh_Frozen_Plasma_unit: Input4,
      Fresh_Frozen_Plasma_test: checkedB4,
      Red_blood_cell_unit: Input5,
      Red_blood_cell_test: checkedB5,
      Platelet_rich_concentrate_unit: Input6,
      Platelet_rich_concentrate_test: checkedB6,
      // fourth
      required_date: date1,
      required_time: time,
      stat: Check1,
      urgent: Check2,
      routine: Check3,
      reserved: Check4,
      patient: Check5,
      identity: Check6,
      medical: Check7,
      completely: Check8,
      sample: Check9,
      match: Check10,
      sample_tube: Check11,
      user_id: IdUser,
    };

    console.log('formData', formData);

    fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify(formData),
      headers: headers,
    })
      .then(Response => Response.json())
      .then(Response => {
        console.log('RESPONSE of request blood', Response);
        if (Response.status == true) {
          navigation.navigate('RequestAppointment', {
            last_id: Response.last_id,
          });
          console.log(
            'RESPONSE Request FormId-------------->>>>',
            Response.form_id,
          );
          var city = Response.form_id;
          LoginUserId(city);
          alert('Request Appointment Book successfully !');
        } else {
          navigation.navigate('RequestBlood');
        }
      })
      .catch(error => {
        alert('Please All details fill After Submit');
        console.error('ERROR FOUND' + error);
      });
  };

  const onNextStep = () => {
    if (Patient == '') {
      // alert("Please Fill All Option The First Form !")
      setdisable(false);
      // nextBtnDisabled()
    }
    // alert('hello first')
  };
  const onNextStep2 = () => {
    if (HbGm == '') {
      // alert("Please Fill The Second Form All Option")
      // nextBtnDisabled()
    }
  };
  const onNextStep3 = () => {
    if (Input1 == '') {
      // alert("Please Fill The Third Form All Option")
      // nextBtnDisabled()
    }
  };
  const onNextStep4 = () => {
    if (date1 == 'MM/DD/YY') {
      alert('Please Fill The All Options and Submit');
    } else if (time == 'HH/MM') {
      alert('Please Fill The All Options and Submit');
    } else {
      handleCity();
    }
  };

  //     // get data from local storage
  //   const [idd,setIdd] = React.useState('');
  //   const getUserDetails = async () => {
  //     const idd = await getUserData('idd');
  //     setIdd(idd);
  //   };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <DrawerHeader name={'Request for Blood'} image1={false} />
      <ProgressSteps
        activeStepIconBorderColor={'#93121B'}
        completedProgressBarColor={'#93121B'}
        completedStepIconColor={'#93121B'}
        activeLabelColor={'#93121B'}>
        <ProgressStep
          label="First Step"
          onNext={onNextStep}
          // removeBtnRow={'true'}

          nextBtnStyle={{
            height: moderateScale(50),
            width: scale(110),
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#bb3039',
            borderRadius: moderateScale(10),
          }}
          nextBtnTextStyle={{
            fontSize: 16,
            textAlign: 'center',
            color: 'white',
          }}
          nextBtnDisabled={disable}
          // #93121B
        >
          <View
            style={{
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
              // flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'black',
                textTransform: 'capitalize',
                fontWeight: '400',
                fontSize: scale(15),
                letterSpacing: 1,
              }}>
              Patient Information
            </Text>
            <Text
              style={{
                fontSize: 14,
              }}>
              (all feilds are required)
            </Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{flex: 1, backgroundColor: 'white'}}>
            <KeyboardAvoidingView>
              <View style={styles.inputSave}>
                <TextInput
                  style={styles.input}
                  value={Patient}
                  onChangeText={setPatient}
                  placeholder="Patient Name"
                  placeholderTextColor={'black'}
                />
              </View>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
              <View style={styles.inputSave}>
                <TextInput
                  style={styles.input}
                  value={Age}
                  onChangeText={setAge}
                  keyboardType={'decimal-pad'}
                  placeholder="Age "
                  maxLength={2}
                  placeholderTextColor={'black'}
                />
              </View>
            </KeyboardAvoidingView>
            <View
              style={{
                height: scale(50),
                flexDirection: 'row',
                width: '100%',
                marginTop: scale(12),
              }}>
              <View
                style={{
                  zIndex: 1,
                  width: '80%',
                  marginLeft: scale(35),
                  justifyContent: 'center',
                  borderRadius: scale(10),
                  borderColor: 'grey',
                }}>
                <DropDownPicker
                  dropDownDirection="BOTTOM"
                  open={open1}
                  value={value1}
                  items={[
                    {label: 'Male', value: 'Male'},
                    {label: 'Female', value: 'Female'},
                  ]}
                  setOpen={setopen1}
                  setValue={setValue1}
                  setItems={setItems1}
                  placeholder="Gender"
                  zIndex={3000}
                  zIndexInverse={1000}
                  containerStyle={{
                    borderColor: 'blue',
                    position: 'relative',
                    bottom: scale(3),
                    height: scale(50),
                    borderRadius: scale(10),
                    borderColor: 'grey',
                  }}
                />
              </View>
            </View>
            <KeyboardAvoidingView>
              <View style={styles.inputSave}>
                <TextInput
                  style={styles.input}
                  value={Registration}
                  keyboardType={'decimal-pad'}
                  onChangeText={setRegistration}
                  placeholder="Hospital Registration No"
                  placeholderTextColor={'black'}
                />
              </View>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
              <View style={styles.inputSave}>
                <TextInput
                  style={styles.input}
                  value={Ward}
                  onChangeText={setWard}
                  keyboardType={'decimal-pad'}
                  placeholder="Ward No"
                  placeholderTextColor={'black'}
                />
              </View>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
              <View style={styles.inputSave}>
                <TextInput
                  style={styles.input}
                  value={Bed}
                  onChangeText={setBed}
                  keyboardType={'decimal-pad'}
                  placeholder="Bed No"
                  placeholderTextColor={'black'}
                />
              </View>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
              <View style={styles.inputSave}>
                <TextInput
                  style={styles.input}
                  value={Father}
                  onChangeText={setFather}
                  placeholder="Father’s Name"
                  placeholderTextColor={'black'}
                />
              </View>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
              <View style={styles.inputSave}>
                <TextInput
                  style={styles.input}
                  value={Hospital}
                  onChangeText={setHospital}
                  placeholder="Name of Hospital"
                  placeholderTextColor={'black'}
                />
              </View>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
              <View style={styles.inputSave}>
                <TextInput
                  style={styles.input}
                  value={PhoneHos}
                  onChangeText={setPhoneHos}
                  keyboardType={'decimal-pad'}
                  placeholder="Phone No. of Consultant"
                  placeholderTextColor={'black'}
                  maxLength={10}
                />
              </View>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
              <View style={styles.inputSave}>
                <TextInput
                  style={styles.input}
                  value={Consultant}
                  onChangeText={setConsultant}
                  placeholder="Name of Consultant "
                  placeholderTextColor={'black'}
                />
              </View>
            </KeyboardAvoidingView>
            {/* <KeyboardAvoidingView>
                            <View style={styles.inputSave}>
                                <TextInput
                                    style={styles.input}
                                    value={PhoneConsul}
                                    onChangeText={setPhoneConsul}
                                    placeholder="Phone No. of Consultant "
                                    placeholderTextColor={"black"}
                                />
                            </View>
                             
                        </KeyboardAvoidingView> */}
          </ScrollView>
        </ProgressStep>
        <ProgressStep
          label="Second Step"
          onNext={onNextStep2}
          nextBtnStyle={{
            height: moderateScale(50),
            width: scale(110),
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#bb3039',
            borderRadius: moderateScale(10),
          }}
          nextBtnTextStyle={{
            fontSize: 16,
            textAlign: 'center',
            color: 'white',
          }}
          previousBtnStyle={{
            height: moderateScale(50),
            width: scale(110),
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#bb3039',
            borderRadius: moderateScale(10),
          }}
          previousBtnTextStyle={{
            fontSize: 16,
            textAlign: 'center',
            color: 'white',
          }}
          previousBtnText={'Back'}>
          <View
            style={{
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
              // flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'black',
                textTransform: 'capitalize',
                fontWeight: '400',
                fontSize: scale(15),
                letterSpacing: 1,
              }}>
              Clinical Information
            </Text>
            <Text
              style={{
                fontSize: 14,
              }}>
              (all feilds are required)
            </Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{flex: 1, backgroundColor: 'white'}}>
            <View>
              <KeyboardAvoidingView>
                <View style={styles.inputSave}>
                  <TextInput
                    style={styles.input}
                    value={Clinical}
                    onChangeText={setClinical}
                    placeholder="Clinical History"
                    placeholderTextColor={'black'}
                  />
                </View>
              </KeyboardAvoidingView>
              <KeyboardAvoidingView>
                <View style={styles.inputSave}>
                  <TextInput
                    style={styles.input}
                    value={Diagnosis}
                    onChangeText={setDiagnosis}
                    placeholder="Diagnosis "
                    placeholderTextColor={'black'}
                  />
                </View>
              </KeyboardAvoidingView>
              <KeyboardAvoidingView>
                <View style={styles.inputSave}>
                  <TextInput
                    style={styles.input}
                    value={HbGm}
                    onChangeText={setHbGm}
                    placeholder="Hb gm%  "
                    placeholderTextColor={'black'}
                    keyboardType={'decimal-pad'}
                  />
                </View>
              </KeyboardAvoidingView>
              <KeyboardAvoidingView>
                <View style={styles.inputSave}>
                  <TextInput
                    style={styles.input}
                    value={Platelet}
                    onChangeText={setPlatelet}
                    placeholder="Platelet Count * "
                    placeholderTextColor={'black'}
                    keyboardType={'decimal-pad'}
                  />
                </View>
              </KeyboardAvoidingView>
              <KeyboardAvoidingView>
                <View style={styles.inputSave}>
                  <TextInput
                    style={styles.input}
                    value={Reasons}
                    onChangeText={setReasons}
                    placeholder="Reason for Transfusion"
                    placeholderTextColor={'black'}
                  />
                </View>
              </KeyboardAvoidingView>

              <KeyboardAvoidingView>
                <View
                  style={{
                    height: moderateScale(80),
                    width: '100%',
                    flexDirection: 'column',
                    marginTop: scale(12),
                    marginLeft: scale(35),
                  }}>
                  <Text
                    style={{
                      // textTransform: 'capitalize',
                      fontWeight: '400',
                      fontSize: scale(14),
                      color: 'black',
                    }}>
                    History of Previous Transfusion
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
              </KeyboardAvoidingView>
              <KeyboardAvoidingView>
                <View style={styles.inputSave}>
                  <TextInput
                    style={styles.input}
                    value={InCase}
                    onChangeText={setInCase}
                    placeholder="In case of Female(History of obstetric)"
                    placeholderTextColor={'black'}
                  />
                </View>
              </KeyboardAvoidingView>
              <View style={[styles.inputSave, {marginBottom: scale(30)}]}>
                <TouchableOpacity
                  style={[styles.input, {alignItems: 'flex-start'}]}
                  onPress={() => setModalVisible(true)}>
                  <Text>{blood}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ProgressStep>
        <ProgressStep
          label="Third Step"
          onNext={onNextStep3}
          nextBtnStyle={{
            height: moderateScale(50),
            width: scale(110),
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#bb3039',
            borderRadius: moderateScale(10),
          }}
          nextBtnTextStyle={{
            fontSize: 16,
            textAlign: 'center',
            color: 'white',
          }}
          previousBtnStyle={{
            height: moderateScale(50),
            width: scale(110),
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#bb3039',
            borderRadius: moderateScale(10),
          }}
          previousBtnTextStyle={{
            fontSize: 16,
            textAlign: 'center',
            color: 'white',
          }}
          previousBtnText={'Back'}>
          <View
            style={{
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'black',
                textTransform: 'capitalize',
                fontWeight: '400',
                fontSize: scale(15),
                letterSpacing: 1,
              }}>
              Blood component Requested{' '}
            </Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{flex: 1, backgroundColor: 'white', marginBottom: 20}}>
            <View style={styles.modal}>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  marginLeft: scale(15),
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}>
                <Text style={styles.componentName}>Components Name </Text>
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '80%'}}>
                  <Text style={styles.nameText}>Whole Blood</Text>
                </View>
                <View
                  style={{
                    width: '20%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 30,
                  }}>
                  <CheckBox
                    value={isSelected}
                    tintColors={{true: '#93121B'}}
                    boxType={'square'}
                    onValueChange={value => setSelection(!isSelected)}
                  />
                </View>
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '60%'}}>
                  <Text style={styles.nameText}>No.of Units Requested</Text>
                </View>
                {isSelected ? (
                  <View
                    style={{
                      width: '40%',
                      backgroundColor: '#F0F0F0',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 40,
                      borderRadius: 10,
                    }}>
                    <TextInput
                      style={{width: '60%', textAlign: 'center'}}
                      placeholderTextColor="#6B6B6B"
                      keyboardType="phone-pad"
                      onChangeText={setInput1}
                      maxLength={1}
                      value={Input1}
                    />
                  </View>
                ) : null}
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '60%'}}>
                  <Text style={styles.nameText}>NAT Tested Product</Text>
                </View>
                {isSelected ? (
                  <View
                    style={{
                      width: '40%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 30,
                      flexDirection: 'row',
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
                ) : null}
              </View>
            </View>
            {/* 2 */}
            <View style={styles.modal}>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  marginLeft: scale(15),
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}>
                <Text style={styles.componentName}>Components Name </Text>
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '80%'}}>
                  <Text style={styles.nameText}>Cryo Poor Plasma</Text>
                </View>
                <View
                  style={{
                    width: '20%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 30,
                  }}>
                  <CheckBox
                    value={isSelected2}
                    tintColors={{true: '#93121B'}}
                    boxType={'square'}
                    onValueChange={() => setSelection2(!isSelected2)}
                  />
                </View>
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '60%'}}>
                  <Text style={styles.nameText}>No.of Units Requested</Text>
                </View>
                {isSelected2 ? (
                  <View
                    style={{
                      width: '40%',
                      backgroundColor: '#F0F0F0',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 40,
                      borderRadius: 10,
                    }}>
                    <TextInput
                      style={{width: '60%', textAlign: 'center'}}
                      placeholderTextColor="#6B6B6B"
                      keyboardType="phone-pad"
                      onChangeText={setInput2}
                      maxLength={1}
                      value={Input2}
                    />
                  </View>
                ) : null}
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '60%'}}>
                  <Text style={styles.nameText}>NAT Tested Product</Text>
                </View>
                {isSelected2 ? (
                  <View
                    style={{
                      width: '40%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 30,
                      flexDirection: 'row',
                    }}>
                    <RadioButton
                      value="yes"
                      color={color.red}
                      status={checkedB2 === 'yes' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedB2('yes')}
                    />
                    <Text style={{fontSize: 15}}>Yes</Text>

                    <RadioButton
                      value="no"
                      color={color.red}
                      status={checkedB2 === 'no' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedB2('no')}
                    />
                    <Text style={{fontSize: 15}}>No</Text>
                  </View>
                ) : null}
              </View>
            </View>
            {/* 3 */}
            <View style={styles.modal}>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  marginLeft: scale(15),
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}>
                <Text style={styles.componentName}>Components Name </Text>
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '80%'}}>
                  <Text style={styles.nameText}>Cryoprecipitate</Text>
                </View>
                <View
                  style={{
                    width: '20%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 30,
                  }}>
                  <CheckBox
                    value={isSelected3}
                    tintColors={{true: '#93121B'}}
                    boxType={'square'}
                    onValueChange={() => setSelection3(!isSelected3)}
                  />
                </View>
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '60%'}}>
                  <Text style={styles.nameText}>No.of Units Requested</Text>
                </View>
                {isSelected3 ? (
                  <View
                    style={{
                      width: '40%',
                      backgroundColor: '#F0F0F0',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 40,
                      borderRadius: 10,
                    }}>
                    <TextInput
                      style={{width: '60%', textAlign: 'center'}}
                      placeholderTextColor="#6B6B6B"
                      keyboardType="phone-pad"
                      onChangeText={setInput3}
                      value={Input3}
                      maxLength={1}
                    />
                  </View>
                ) : null}
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '60%'}}>
                  <Text style={styles.nameText}>NAT Tested Product</Text>
                </View>
                {isSelected3 ? (
                  <View
                    style={{
                      width: '40%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 30,
                      flexDirection: 'row',
                    }}>
                    <RadioButton
                      value="yes"
                      color={color.red}
                      status={checkedB3 === 'yes' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedB3('yes')}
                    />
                    <Text style={{fontSize: 15}}>Yes</Text>

                    <RadioButton
                      value="no"
                      color={color.red}
                      status={checkedB3 === 'no' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedB3('no')}
                    />
                    <Text style={{fontSize: 15}}>No</Text>
                  </View>
                ) : null}
              </View>
            </View>

            {/* 4 */}
            <View style={styles.modal}>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  marginLeft: scale(15),
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}>
                <Text style={styles.componentName}>Components Name </Text>
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '80%'}}>
                  <Text style={styles.nameText}>Fresh Frozen Plasma</Text>
                </View>
                <View
                  style={{
                    width: '20%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 30,
                  }}>
                  <CheckBox
                    value={isSelected4}
                    tintColors={{true: '#93121B'}}
                    boxType={'square'}
                    onValueChange={() => setSelection4(!isSelected4)}
                  />
                </View>
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '60%'}}>
                  <Text style={styles.nameText}>No.of Units Requested</Text>
                </View>
                {isSelected4 ? (
                  <View
                    style={{
                      width: '40%',
                      backgroundColor: '#F0F0F0',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 40,
                      borderRadius: 10,
                    }}>
                    <TextInput
                      style={{width: '60%', textAlign: 'center'}}
                      placeholderTextColor="#6B6B6B"
                      keyboardType="phone-pad"
                      onChangeText={setInput4}
                      value={Input4}
                      maxLength={1}
                    />
                  </View>
                ) : null}
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '60%'}}>
                  <Text style={styles.nameText}>NAT Tested Product</Text>
                </View>
                {isSelected4 ? (
                  <View
                    style={{
                      width: '40%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 30,
                      flexDirection: 'row',
                    }}>
                    <RadioButton
                      value="yes"
                      color={color.red}
                      status={checkedB4 === 'yes' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedB4('yes')}
                    />
                    <Text style={{fontSize: 15}}>Yes</Text>

                    <RadioButton
                      value="no"
                      color={color.red}
                      status={checkedB4 === 'no' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedB4('no')}
                    />
                    <Text style={{fontSize: 15}}>No</Text>
                  </View>
                ) : null}
              </View>
            </View>

            {/* 5 */}
            <View style={styles.modal}>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  marginLeft: scale(15),
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}>
                <Text style={styles.componentName}>Components Name </Text>
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '80%'}}>
                  <Text style={styles.nameText}>Red blood cell</Text>
                </View>
                <View
                  style={{
                    width: '20%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 30,
                  }}>
                  <CheckBox
                    value={isSelected5}
                    tintColors={{true: '#93121B'}}
                    boxType={'square'}
                    onValueChange={() => setSelection5(!isSelected5)}
                  />
                </View>
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '60%'}}>
                  <Text style={styles.nameText}>No.of Units Requested</Text>
                </View>
                {isSelected5 ? (
                  <View
                    style={{
                      width: '40%',
                      backgroundColor: '#F0F0F0',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 40,
                      borderRadius: 10,
                    }}>
                    <TextInput
                      style={{width: '60%', textAlign: 'center'}}
                      placeholderTextColor="#6B6B6B"
                      keyboardType="phone-pad"
                      onChangeText={setInput5}
                      value={Input5}
                      maxLength={1}
                    />
                  </View>
                ) : null}
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '60%'}}>
                  <Text style={styles.nameText}>NAT Tested Product</Text>
                </View>
                {isSelected5 ? (
                  <View
                    style={{
                      width: '40%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 30,
                      flexDirection: 'row',
                    }}>
                    <RadioButton
                      value="yes"
                      color={color.red}
                      status={checkedB5 === 'yes' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedB5('yes')}
                    />
                    <Text style={{fontSize: 15}}>Yes</Text>

                    <RadioButton
                      value="no"
                      color={color.red}
                      status={checkedB5 === 'no' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedB5('no')}
                    />
                    <Text style={{fontSize: 15}}>No</Text>
                  </View>
                ) : null}
              </View>
            </View>
            {/* 6 */}

            <View style={styles.modal}>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  marginLeft: scale(15),
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}>
                <Text style={styles.componentName}>Components Name </Text>
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '80%'}}>
                  <Text style={styles.nameText}>Platelet rich concentrate</Text>
                </View>
                <View
                  style={{
                    width: '20%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 30,
                  }}>
                  <CheckBox
                    value={isSelected6}
                    tintColors={{true: '#93121B'}}
                    boxType={'square'}
                    onValueChange={() => setisSelected6(!isSelected6)}
                  />
                </View>
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '60%'}}>
                  <Text style={styles.nameText}>No.of Units Requested</Text>
                </View>
                {isSelected6 ? (
                  <View
                    style={{
                      width: '40%',
                      backgroundColor: '#F0F0F0',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 40,
                      borderRadius: 10,
                    }}>
                    <TextInput
                      style={{width: '60%', textAlign: 'center'}}
                      placeholderTextColor="#6B6B6B"
                      keyboardType="phone-pad"
                      onChangeText={setInput6}
                      value={Input6}
                      maxLength={1}
                    />
                  </View>
                ) : null}
              </View>
              <View
                style={{
                  height: 50,
                  width: '90%',
                  marginLeft: scale(10),
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <View style={{width: '60%'}}>
                  <Text style={styles.nameText}>NAT Tested Product</Text>
                </View>
                {isSelected6 ? (
                  <View
                    style={{
                      width: '40%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 30,
                      flexDirection: 'row',
                    }}>
                    <RadioButton
                      value="yes"
                      color={color.red}
                      status={checkedB6 === 'yes' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedB6('yes')}
                    />
                    <Text style={{fontSize: 15}}>Yes</Text>

                    <RadioButton
                      value="no"
                      color={color.red}
                      status={checkedB6 === 'no' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedB6('no')}
                    />
                    <Text style={{fontSize: 15}}>No</Text>
                  </View>
                ) : null}
              </View>
            </View>
          </ScrollView>
        </ProgressStep>
        <ProgressStep
          label="Fourth Step"
          onSubmit={onNextStep4}
          nextBtnStyle={{
            height: moderateScale(50),
            width: scale(110),
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#bb3039',
            borderRadius: moderateScale(10),
          }}
          nextBtnTextStyle={{
            fontSize: 16,
            textAlign: 'center',
            color: 'white',
          }}
          previousBtnStyle={{
            height: moderateScale(50),
            width: scale(110),
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#bb3039',
            borderRadius: moderateScale(10),
          }}
          previousBtnTextStyle={{
            fontSize: 16,
            textAlign: 'center',
            color: 'white',
          }}
          previousBtnText={'Back'}>
          <View
            style={{
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
              // flexDirection: 'row',
              marginBottom: 8,
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '400',
                textTransform: 'capitalize',

                fontSize: scale(15),
              }}>
              Product Requirement
            </Text>
            <Text
              style={{
                fontSize: 14,
              }}>
              (all feilds are required)
            </Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{flex: 1, backgroundColor: 'white', marginBottom: 20}}>
            <View
              style={{
                height: scale(20),
                width: '100%',
                justifyContent: 'flex-start',
                paddingLeft: scale(30),
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '400',
                  fontSize: scale(14),
                }}>
                Required Date
              </Text>
            </View>
            <KeyboardAvoidingView>
              {/* <View style={{
                                width: "80%",
                                justifyContent: "flex-start",
                                alignItems: 'center',
                                marginLeft: scale(35),
                                marginTop: scale(12),
                                flexDirection: 'row',
                                height: 50,
                                borderWidth: 0.8,
                                borderColor: 'black',
                                borderRadius: 6,
                                padding: scale(8),
                            }}>
                                <View style={{
                                    height: scale(40),
                                    width: "70%",
                                    justifyContent: "flex-start",
                                    paddingLeft: scale(8),
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}>
                                    <Text style={{
                                        color: 'black',
                                        fontWeight: '300',
                                        fontSize: scale(12.5),
                                    }}>{date1} </Text>
                                </View>
                                <DateTimePickerModal
                                    isVisible={pickerMode !== null}
                                    mode={pickerMode}
                                    onConfirm={handleConfirm}
                                    onCancel={hidePicker}
                                    display="default"

                                />
                                <View style={{
                                    height: scale(40),
                                    width: "30%",
                                    justifyContent: "center",
                                    paddingLeft: scale(10),
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}>
                                    <TouchableOpacity onPress={showDatePicker}>
                                        <Image
                                            resizeMode='contain'
                                            style={{ height: scale(45), width: scale(40) }}
                                            source={require('../assets/icons/Calender.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View> */}
              <TouchableOpacity
                style={{
                  width: '80%',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginLeft: scale(35),
                  marginTop: scale(12),
                  flexDirection: 'row',
                  height: 50,
                  borderWidth: 0.8,
                  borderColor: 'black',
                  borderRadius: 6,
                  padding: scale(8),
                }}
                onPress={showDatePicker}>
                <View
                  style={{
                    height: scale(40),
                    width: '70%',
                    justifyContent: 'flex-start',
                    paddingLeft: scale(8),
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '300',
                      fontSize: scale(12.5),
                    }}>
                    {date1}{' '}
                  </Text>
                </View>
                <DateTimePickerModal
                  isVisible={pickerMode !== null}
                  mode={pickerMode}
                  onConfirm={handleConfirm}
                  onCancel={hidePicker}
                  display="default"
                />
                <View
                  style={{
                    height: scale(40),
                    width: '30%',
                    justifyContent: 'center',
                    paddingLeft: scale(10),
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity onPress={showDatePicker}>
                    <Image
                      resizeMode="contain"
                      style={{height: scale(45), width: scale(40)}}
                      source={require('../assets/icons/Calender.png')}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </KeyboardAvoidingView>
            <View
              style={{
                height: scale(20),
                marginTop: 5,
                width: '100%',
                justifyContent: 'flex-start',
                paddingLeft: scale(30),
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '400',
                  fontSize: scale(14),
                }}>
                Required Time
              </Text>
            </View>
            <KeyboardAvoidingView>
              {/* <View style={{
                                width: "80%",
                                justifyContent: "flex-start",
                                alignItems: 'center',
                                marginLeft: scale(35),
                                marginTop: scale(12),
                                flexDirection: 'row',
                                height: 50,
                                borderWidth: 0.8,
                                borderColor: 'black',
                                borderRadius: 6,
                                padding: scale(8),
                            }}>
                                <View style={{
                                    height: scale(40),
                                    width: "70%",
                                    justifyContent: "flex-start",
                                    paddingLeft: scale(8),
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}>
                                    <Text style={{
                                        color: 'black',
                                        fontWeight: '300',
                                        fontSize: scale(12.5),
                                    }}>{time}</Text>
                                </View>
                                <DateTimePickerModal
                                    isVisible={pickerMode1 !== null}
                                    mode={pickerMode1}
                                    onConfirm={handleConfirm1}
                                    onCancel={hidePicker1}
                                    display="default"
                                />
                                <View style={{
                                    height: scale(40),
                                    width: "30%",
                                    justifyContent: "center",
                                    paddingLeft: scale(10),
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}>
                                    <TouchableOpacity onPress={showDatePicker1}>
                                        <Image
                                            resizeMode='contain'
                                            style={{ height: scale(70), width: scale(60) }}
                                            source={require('../assets/icons/Time.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View> */}
              <TouchableOpacity
                style={{
                  width: '80%',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginLeft: scale(35),
                  marginTop: scale(12),
                  flexDirection: 'row',
                  height: 50,
                  borderWidth: 0.8,
                  borderColor: 'black',
                  borderRadius: 6,
                  padding: scale(8),
                }}
                onPress={showDatePicker1}>
                <View
                  style={{
                    height: scale(40),
                    width: '70%',
                    justifyContent: 'flex-start',
                    paddingLeft: scale(8),
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '300',
                      fontSize: scale(12.5),
                    }}>
                    {time}
                  </Text>
                </View>
                <DateTimePickerModal
                  isVisible={pickerMode1 !== null}
                  mode={pickerMode1}
                  onConfirm={handleConfirm1}
                  onCancel={hidePicker1}
                  display="default"
                />
                <View
                  style={{
                    height: scale(40),
                    width: '30%',
                    justifyContent: 'center',
                    paddingLeft: scale(10),
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity onPress={showDatePicker1}>
                    <Image
                      resizeMode="contain"
                      style={{height: scale(70), width: scale(60)}}
                      source={require('../assets/icons/Time.png')}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </KeyboardAvoidingView>
            <View
              style={{
                height: moderateScale(40),
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <CheckBox
                value={Check1}
                tintColors={{true: '#93121B'}}
                boxType={'square'}
                onValueChange={() => setCheck1(!Check1)}
              />
              <Text style={{fontSize: 15}}>Stat(Within 15 mins)</Text>

              <CheckBox
                value={Check2}
                tintColors={{true: '#93121B'}}
                boxType={'square'}
                onValueChange={() => setCheck2(!Check2)}
              />
              <Text style={{fontSize: 15}}>Urgent(one hours)</Text>
            </View>
            <View
              style={{
                height: moderateScale(40),
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <CheckBox
                value={Check3}
                tintColors={{true: '#93121B'}}
                boxType={'square'}
                onValueChange={() => setCheck3(!Check3)}
              />

              <Text style={{fontSize: 15}}>Routine</Text>

              <CheckBox
                value={Check4}
                tintColors={{true: '#93121B'}}
                boxType={'square'}
                onValueChange={() => setCheck4(!Check4)}
              />
              <Text style={{fontSize: 15}}>Reserved</Text>
            </View>
            <View
              style={{
                height: scale(45),
                marginTop: 5,
                width: '100%',
                justifyContent: 'flex-start',
                paddingLeft: scale(30),
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '300',
                  fontSize: scale(16),
                }}>
                {' '}
                To be Completed by Person Drawing Blood Specimen
              </Text>
            </View>
            <View
              style={{
                height: moderateScale(50),
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <CheckBox
                value={Check5}
                tintColors={{true: '#93121B'}}
                boxType={'square'}
                onValueChange={() => setCheck5(!Check5)}
              />
              <View
                style={{
                  height: moderateScale(50),
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  paddingLeft: 20,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 15}}>
                  Patient(if concious)confirms to his and{' '}
                </Text>
                <Text style={{fontSize: 15}}>father's name</Text>
              </View>
            </View>
            <View
              style={{
                height: moderateScale(50),
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <CheckBox
                value={Check6}
                tintColors={{true: '#93121B'}}
                boxType={'square'}
                onValueChange={() => setCheck6(!Check6)}
              />
              <View
                style={{
                  height: moderateScale(50),
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  paddingLeft: 20,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 15}}>
                  If unconscious Relative(s)/Staff confirm
                </Text>
                <Text style={{fontSize: 15}}>the identity</Text>
              </View>
            </View>
            <View
              style={{
                height: moderateScale(60),
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <CheckBox
                value={Check7}
                tintColors={{true: '#93121B'}}
                boxType={'square'}
                onValueChange={() => setCheck7(!Check7)}
              />
              <View
                style={{
                  height: moderateScale(55),
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  paddingLeft: 20,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 15}}>
                  The Identity, Reg. No. checks with the medical
                </Text>
                <Text style={{fontSize: 15}}>
                  medical records and same is written{' '}
                </Text>
                <Text style={{fontSize: 15}}>on the requisitionform</Text>
              </View>
            </View>
            <View
              style={{
                height: moderateScale(60),
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <CheckBox
                value={Check8}
                tintColors={{true: '#93121B'}}
                boxType={'square'}
                onValueChange={() => setCheck8(!Check8)}
              />
              <View
                style={{
                  height: moderateScale(50),
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  paddingLeft: 20,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 15}}>
                  Requisition form is properly and{' '}
                </Text>
                <Text style={{fontSize: 15}}>completely filled </Text>
              </View>
            </View>
            <View
              style={{
                height: moderateScale(60),
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <CheckBox
                value={Check9}
                tintColors={{true: '#93121B'}}
                boxType={'square'}
                onValueChange={() => setCheck9(!Check9)}
              />
              <View
                style={{
                  height: moderateScale(50),
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  paddingLeft: 20,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 15}}>
                  Sample tube carries the patient's{' '}
                </Text>
                <Text style={{fontSize: 15}}>name, reg. no., ward no. </Text>
              </View>
            </View>

            <View
              style={{
                height: moderateScale(50),
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <CheckBox
                value={Check10}
                tintColors={{true: '#93121B'}}
                boxType={'square'}
                onValueChange={() => setCheck10(!Check10)}
              />
              <View
                style={{
                  height: moderateScale(50),
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  paddingLeft: 20,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 15}}>
                  These match with the medical records
                </Text>
              </View>
            </View>
            <View
              style={{
                height: moderateScale(50),
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <CheckBox
                value={Check11}
                tintColors={{true: '#93121B'}}
                boxType={'square'}
                onValueChange={() => setCheck11(!Check11)}
              />
              <View
                style={{
                  height: moderateScale(50),
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  paddingLeft: 20,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 15}}>
                  Phlebotomist has signed the sample tube
                </Text>
              </View>
            </View>
          </ScrollView>
        </ProgressStep>
      </ProgressSteps>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <Pressable
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <View
            style={{
              backgroundColor: '#E7E7E8',
              height: 200,
              width: '90%',
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
              }}>
              <View
                style={{
                  height: moderateScale(40),
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: scale(13.5),
                    color: 'black',
                    fontWeight: '400',
                  }}>
                  Select Blood Group{' '}
                </Text>
              </View>
              <View
                style={{
                  height: moderateScale(40),
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  onPress={() => setModalVisible(!modalVisible)}
                  style={{fontSize: scale(24), color: 'black'}}>
                  X
                </Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                width: '90%',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    padding: scale(5),
                    flexDirection: 'row',
                    width: scale(70),
                    height: scale(44),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => BloodModal(1)}
                    style={{
                      width: scale(60),
                      height: moderateScale(40),
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                    }}>
                    <Text style={{color: 'black', fontSize: scale(13)}}>
                      {'A+'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    padding: scale(5),
                    flexDirection: 'row',
                    width: scale(70),
                    height: scale(44),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => BloodModal(2)}
                    style={{
                      width: scale(60),
                      height: moderateScale(40),
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                    }}>
                    <Text style={{color: 'black', fontSize: scale(13)}}>
                      {'A-'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    padding: scale(5),
                    flexDirection: 'row',
                    width: scale(70),
                    height: scale(44),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => BloodModal(3)}
                    style={{
                      width: scale(60),
                      height: moderateScale(40),
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                    }}>
                    <Text style={{color: 'black', fontSize: scale(13)}}>
                      {'AB+'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    padding: scale(5),
                    flexDirection: 'row',
                    width: scale(70),
                    height: scale(44),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => BloodModal(4)}
                    style={{
                      width: scale(60),
                      height: moderateScale(40),
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                    }}>
                    <Text style={{color: 'black', fontSize: scale(13)}}>
                      {'AB-'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    padding: scale(5),
                    flexDirection: 'row',
                    width: scale(70),
                    height: scale(44),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => BloodModal(5)}
                    style={{
                      width: scale(60),
                      height: moderateScale(40),
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                    }}>
                    <Text style={{color: 'black', fontSize: scale(13)}}>
                      {'B+'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    padding: scale(5),
                    flexDirection: 'row',
                    width: scale(70),
                    height: scale(44),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => BloodModal(6)}
                    style={{
                      width: scale(60),
                      height: moderateScale(40),
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                    }}>
                    <Text style={{color: 'black', fontSize: scale(13)}}>
                      {'B-'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    padding: scale(5),
                    flexDirection: 'row',
                    width: scale(70),
                    height: scale(44),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => BloodModal(7)}
                    style={{
                      width: scale(60),
                      height: moderateScale(40),
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                    }}>
                    <Text style={{color: 'black', fontSize: scale(13)}}>
                      {'O+'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    padding: scale(5),
                    flexDirection: 'row',
                    width: scale(70),
                    height: scale(44),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => BloodModal(8)}
                    style={{
                      width: scale(60),
                      height: moderateScale(40),
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                    }}>
                    <Text style={{color: 'black', fontSize: scale(13)}}>
                      {'O-'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 50,
    // marginVertical: 5,
    borderWidth: 0.8,
    borderColor: 'black',
    borderRadius: 6,
    fontSize: 13,
    fontWeight: '300',
    padding: scale(8),
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor: 'white'
  },
  inputSave: {
    height: scale(48),
    width: '80%',
    marginLeft: scale(35),
    justifyContent: 'center',
    margin: scale(5),
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: moderateScale(350),
    height: moderateScale(180),
    backgroundColor: 'white',
    shadowColor: 'grey',
    borderWidth: 0.8,
    borderColor: 'grey',
    borderRadius: moderateScale(10),
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    elevation: 3,
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
    marginHorizontal: 10,
  },
  componentName: {
    fontWeight: '400',
    fontSize: scale(14),
    color: 'black',
  },
  nameText: {
    color: 'black',
    fontWeight: '300',
    fontSize: scale(12),
  },
});
export default RequestBlood;
