import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
//import { Checkbox } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import {moderateScale, scale} from 'react-native-size-matters';
import {RadioButton} from 'react-native-paper';
import DrawerHeader from '../../Components/DrawerHeader';
import color from '../../styles/color';
import COLORS from '../../styles/color';

const ThirdForm = ({route, navigation}) => {
  const {form_id} = route.params;
  // console.log('thid form form id =', form_id);

  // const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState('yes');
  const [checked3, setChecked3] = useState('yes');
  const [checked4, setChecked4] = useState('yes');
  const [value6, setValue6] = useState([]);
  const handleCheckboxClick6 = value => {
    if (value6.includes(value)) {
      setValue6(value6.filter(item => item !== value));
    } else {
      setValue6([value]);
    }
    // console.log('one item select', value6);
  };
  const firstFormApi = async () => {
    const IdUser = await AsyncStorage.getItem('User');
    const jsonValue = await AsyncStorage.getItem('Gender');
    let url = `https://bloodlinks.in/donation_Appointment`; //API to render signup
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        user_id: IdUser,
        form_step: 'step_3',
        form_id:form_id,
        gender: jsonValue,
        opportunity: checked2,
        refuse: checked3,
        regular: checked4,
        donor: value6,
      }),
      headers: headers,
    })
      .then(Response => Response.json())
      .then(Response => {
        // console.log('RESPONSE of third form', Response);
        // console.log(' second Id-------------->>>>', WomenId)
        if (Response.status == true) {
          // alert('Third Form successfully submit !')
          navigation.navigate('FourtForm',{
            form_id: Response.form_id,
          });
        } else {
          alert('First Form fail !');
        }
      })
      .catch(error => {
        console.error('ERROR FOUND catch' + error);
      });
  };

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
        <Text style={{fontSize: scale(18), color: 'white'}}>Step 3</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              height: 'auto',
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
                height: moderateScale(30),
                width: '95%',
                flexDirection: 'column',
                margin: scale(7),
              }}>
              <Text style={{fontSize: scale(16.5), color: color.red}}>
                Informed Consent:
              </Text>
            </View>
            <View
              style={{
                height: moderateScale(40),
                width: '95%',
                flexDirection: 'column',
              }}>
              <Text style={{fontSize: scale(18), color: 'black'}}>
                INFORMED CONSENT:
              </Text>
            </View>
            <View
              style={{
                height: moderateScale(420),
                width: '94%',
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontSize: scale(14),
                  color: 'grey',
                  marginBottom: moderateScale(2),
                }}>
                1) I have read and understood the intormation in the donor form
                and education material.
              </Text>
              <Text
                style={{
                  fontSize: scale(14),
                  color: 'grey',
                  marginBottom: moderateScale(2),
                }}>
                2) I confirm, that to my knowledge. I have answered all the
                questions accurately and truth fully and do not consider myself
                to be a person involved in any of the described activities that
                could please me at the risk of spreading HIV or Hepatitis.
              </Text>
              <Text
                style={{
                  fontSize: scale(14),
                  color: 'grey',
                  marginBottom: moderateScale(2),
                }}>
                3) I understand that any willful misrepresentation of the facts
                could endanger the patients receiving my blood.
              </Text>
              <Text
                style={{
                  fontSize: scale(14),
                  color: 'grey',
                  marginBottom: moderateScale(2),
                }}>
                4) I am aware that my blood will be screened for HIV. Hepatitis
                B. Hepatitis C. Malaria & Syphilis in addition to any other
                screening tests required to ensure blood safety
              </Text>
              <Text
                style={{
                  fontSize: scale(14),
                  color: 'grey',
                  marginBottom: moderateScale(2),
                }}>
                5) I understand that screening test are not diagnostics and may
                yield false positive results.I also understand further
                confirmatory test would be required in case of positive results
                and that for any positive results
              </Text>
            </View>
            <View
              style={{
                height: moderateScale(60),
                width: '95%',
                flexDirection: 'column',
                margin: moderateScale(2),
                justifyContent: 'flex-start',
              }}>
              <View
                style={{
                  height: moderateScale(30),
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: moderateScale(30),
                    width: '50%',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: scale(13),
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    {' '}
                    I May Be Contacted{' '}
                  </Text>
                </View>
                <View
                  style={{
                    height: moderateScale(30),
                    width: '50%',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <CheckBox
                    tintColors={{true: '#93121B'}}
                    boxType={'square'}
                    onValueChange={() => {
                      setChecked(!checked);
                    }}
                    value={checked}
                  />
                </View>
              </View>
              <View
                style={{
                  height: moderateScale(30),
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: moderateScale(30),
                    width: '50%',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: scale(13),
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    {' '}
                    I May Not Be Contacted{' '}
                  </Text>
                </View>
                <View
                  style={{
                    height: moderateScale(30),
                    width: '50%',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <CheckBox
                    tintColors={{true: '#93121B'}}
                    boxType={'square'}
                    onValueChange={() => {
                      setChecked1(!checked1);
                    }}
                    value={checked1}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                height: moderateScale(600),
                width: '94%',
                flexDirection: 'column',
                marginBottom: moderateScale(22),
              }}>
              <Text
                style={{
                  fontSize: scale(14),
                  color: 'grey',
                  marginBottom: moderateScale(2),
                }}>
                6) I understand that my blood will be utilized in accordance
                with regulatory guidelines including NBTC and drug and cosmetic
                act and regulations pertaining to it or its future replacements
              </Text>
              <Text
                style={{
                  fontSize: scale(14),
                  color: 'grey',
                  marginBottom: moderateScale(2),
                }}>
                7) I understand the blood donation procedure and possible risk
                (vaso-vagal reaction, hematoma etc.) involved as explained.
              </Text>
              <Text
                style={{
                  fontSize: scale(14),
                  color: 'grey',
                  marginBottom: moderateScale(2),
                }}>
                8) I confirm that I am over the age of 18 years
              </Text>
              <Text
                style={{
                  fontSize: scale(14),
                  color: 'grey',
                  marginBottom: moderateScale(2),
                }}>
                9) I understand that blood donation is totally voluntary act and
                no inducement or remuneration in cash or kind has been offered
                to me.
              </Text>
              <Text
                style={{
                  fontSize: scale(14),
                  color: 'grey',
                  marginBottom: moderateScale(2),
                }}>
                10) I prohibit any personal details (except demographic details)
                provided by me or about my donation to be disclosed to any
                individual or agency except asked by government.
              </Text>
              <Text
                style={{
                  fontSize: scale(14),
                  color: 'grey',
                  marginBottom: moderateScale(2),
                }}>
                11) I hereby declare that I am donating blood voluntarily
                without any pressure/force/cohesion/threat/false misconception
                from the Blood Bank.
              </Text>
              <Text
                style={{
                  fontSize: scale(14),
                  color: 'grey',
                  marginBottom: moderateScale(2),
                }}>
                12) I hereby volunteer to donate my Blood/Blood components which
                may be used for patient/scientific research/fractionation
                (surplus plasma).
              </Text>
              <Text
                style={{
                  fontSize: scale(14),
                  color: 'grey',
                  marginBottom: moderateScale(2),
                }}>
                13) My donated blood / components may be utilized beyond this
                Blood Bank
              </Text>
              <Text
                style={{
                  fontSize: scale(15),
                  color: 'grey',
                  marginBottom: moderateScale(2),
                  //marginBottom: moderateScale(20),
                  fontWeight: 'bold',
                }}>
                14) You would liked to be informed about any abnormal test
                results (HIV, HBsAg, HCV, Syphilis, Malaria parasite) at the
                address furnished by you.
              </Text>
            </View>
            <View
              style={{
                height: moderateScale(100),
                width: '95%',
                flexDirection: 'column',
              }}>
              <Text style={{fontSize: scale(14), color: 'black'}}>
                1. I Have Been Give In The Opportunity To Ask Question And They
                Have Been Answered In The Language Understand. By Me
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
                  color={COLORS.red}
                  status={checked2 === 'yes' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked2('yes')}
                />
                <Text style={{fontSize: 15}}>Yes</Text>

                <RadioButton
                  value="no"
                  color={COLORS.red}
                  status={checked2 === 'no' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked2('no')}
                />
                <Text style={{fontSize: 15}}>No</Text>
              </View>
            </View>
            <View
              style={{
                height: moderateScale(100),
                width: '95%',
                flexDirection: 'column',
                marginBottom: moderateScale(-15),
              }}>
              <Text style={{fontSize: scale(15), color: 'black'}}>
                2. I Have Given The Opportunity To Refuse The Blood Donation
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
                  color={COLORS.red}
                  status={checked3 === 'yes' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked3('yes')}
                />
                <Text style={{fontSize: 15}}>Yes</Text>

                <RadioButton
                  value="no"
                  color={COLORS.red}
                  status={checked3 === 'no' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked3('no')}
                />
                <Text style={{fontSize: 15}}>No</Text>
              </View>
            </View>
            <View
              style={{
                height: moderateScale(75),
                width: '95%',
                flexDirection: 'column',
              }}>
              <Text style={{fontSize: scale(15), color: 'black'}}>
                3. I Would Like To Be Regular Voluntary Donor :
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
                  color={COLORS.red}
                  status={checked4 === 'yes' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked4('yes')}
                />
                <Text style={{fontSize: 15}}>Yes</Text>

                <RadioButton
                  value="no"
                  color={COLORS.red}
                  status={checked4 === 'no' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked4('no')}
                />
                <Text style={{fontSize: 15}}>No</Text>
              </View>
            </View>
            {/*  */}
            <View
              style={{
                flexDirection: 'column',
                width: '96%',
                justifyContent: 'center',
              }}>
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
                    onValueChange={() => handleCheckboxClick6('Birthday')}
                    value={value6.includes('Birthday')}
                    // disabled={disable6}
                  />
                  <Text
                    style={{
                      fontSize: scale(11),
                      color: 'black',
                      fontWeight: '600',
                      textAlign: 'center',
                    }}>
                    {' '}
                    Birthday{' '}
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
                    onValueChange={() => handleCheckboxClick6('Marriage')}
                    value={value6.includes('Marriage')}
                    // disabled={disable6}
                  />
                  <Text
                    style={{
                      fontSize: scale(11),
                      color: 'black',
                      fontWeight: '600',
                      textAlign: 'justify',
                    }}>
                    {' '}
                    Marriage Anniversary{' '}
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
                    onValueChange={() => handleCheckboxClick6('After')}
                    value={value6.includes('After')}
                    // disabled={disable6}
                  />
                  <Text
                    style={{
                      fontSize: scale(11),
                      color: 'black',
                      fontWeight: '600',
                      textAlign: 'center',
                    }}>
                    {' '}
                    After 6 Month{' '}
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
                    onValueChange={() => handleCheckboxClick6('Once')}
                    value={value6.includes('Once')}
                    // disabled={disable6}
                  />
                  <Text
                    style={{
                      fontSize: scale(11),
                      color: 'black',
                      fontWeight: '600',
                      textAlign: 'center',
                    }}>
                    {' '}
                    Once Year{' '}
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
                    width: '60%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: scale(3),
                  }}>
                  <CheckBox
                    tintColors={{true: '#93121B'}}
                    boxType={'square'}
                    onValueChange={() => handleCheckboxClick6('Emergency')}
                    value={value6.includes('Emergency')}
                    // disabled={disable6}
                  />
                  <Text
                    style={{
                      fontSize: scale(11),
                      color: 'black',
                      fontWeight: '600',
                      textAlign: 'center',
                    }}>
                    {' '}
                    Emergency Requirement{' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>
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
    </View>
  );
};

export default ThirdForm;
