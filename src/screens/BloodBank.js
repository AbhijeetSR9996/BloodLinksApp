import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  LogBox,
} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import DrawerHeader from '../Components/DrawerHeader';
import StatusTopBar from '../Components/StatusTopBar';
import {PhoneCall} from '../Components/PhoneCall';
import {onShare} from '../Components/ShareCom';
import {ComponentMap} from '../Components/MapsComp';
import image from '../assets/Images';
import Autocomplete from 'react-native-autocomplete-input';
import {useFocusEffect} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const BloodBank = props => {
  const navigation = props.navigation;
  const [hospitalboollist, sethospitalboollist] = useState([]);
  const [CityList, setCityList] = useState([]);
  const [PinList, setPinList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);

  const [City, setCity] = useState({});
  const [Pincode, setPincode] = useState(null);
  const [heightt, setheightt] = useState(0);
  const [filteredFilms, setFilteredFilms] = useState([]);

  const reset = () => {
    setIsLoading(true);
    fetch('https://bloodlinks.in/bloodbank_list')
      .then(response => response.json())
      .then(response => {
        var states = Object.keys(response).length;

        console.log(
          'response api data blood list reset function----->>>>>',
          states,
        );
        sethospitalboollist(response);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('catch api error', error);
      });
    services_list();
    setCity({});
  };

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

    reset();
    fetch('https://bloodlinks.in/bloodbank_list')
      .then(response => response.json())
      .then(response => {
        setIsLoading(false);
        var states = Object.keys(response).length;

        console.log('response api data blood list useffect----->>>>>', states);
        sethospitalboollist(response);
      })
      .catch(error => {
        console.error('catch api error', error);
      });
    services_list();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        CityEffect();
      }, 1000);
    }, []),
  );
  
  const CityEffect = () => {
    fetch('https://bloodlinks.in/bloodbankcity_pincode_list')
      .then(response => response.json())
      .then(response => {
        // console.log('response pin code api ----->>>>>', response)
        var states = Object.keys(response).length;
        console.log('length api data states----->>>>>', states);
        console.log('heelleb focus');

        let CityArray = [];
        for (var i = 0; i < 5; i++) {
          CityArray.push({
            value: response[i].city_name,
            label: response[i].city_name,
          });
        }
        console.log('heelleb focus', CityArray);
        setCityList(CityArray);
      })
      .catch(error => {
        console.error('catch api error', error);
      });
  };

  const Filter = () => {
    let url = `https://bloodlinks.in/searchbloodbank_list?filter_city=${City.value}&filter_pin=${Pincode}`; //API to
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    let data = {
      filter_city: City.value,
      filter_pin: Pincode,
    };
    console.log('filter custom data', data);
    fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        filter_city: City.value,
        filter_pin: Pincode,
      }),
      headers: headers,
    })
      .then(Response => Response.json())
      .then(Response => {
        console.log('RESPONSE apiiii Filter-------------->>>>', Response);
        sethospitalboollist(Response);
      })
      .catch(error => {
        console.error('ERROR FOUND' + error);
        alert('Server Error !');
      });
  };

  const searchText = text => {
    let matches = [];
    if (text) {
      matches = CityList.filter(res => {
        const regex = new RegExp(`${text.trim()}`, 'i');
        return res.label.match(regex);
      });
      setFilteredFilms(matches);
    } else {
      setFilteredFilms([]);
    }
  };

  const Heiggt = text => {
    if (text == null) {
      setheightt(0);
      // {text.split('').map((word) => word && heightt ++).join('')}
    } else {
      setheightt(120);
      if (text == 0) {
        setheightt(0);
      }
    }
  };

  const services_list = () => {
    hospitalboollist;
  };

  const listEmptyComponent = () => {
    return (
      <View
        style={{
          height: height * 0.3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black'}}>List is Empty</Text>
      </View>
    );
  };

  const LatLongOpen = item => {
    var latitude = item.latitude;
    var longitude = item.longitude;
    ComponentMap(latitude, longitude);
  };

  const ShareComponent = item => {
    var name = 'Blood Bank Name';
    var address = 'Blood Bank Address';
    onShare(item, name, address);
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.textContent}>
        <View
          style={{
            width: scale(70),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={image.bloodDrop}
            style={styles.cardImage}
            resizeMode="cover"
          />
        </View>
        <View style={{width: '73%', padding: scale(5)}}>
          <Text numberOfLines={1} style={styles.cardtitle}>
            {item.name}
          </Text>
          <Text numberOfLines={2} style={styles.cardDescription}>
            {item.address_1}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: scale(40),
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => LatLongOpen(item)}
          style={{
            height: scale(35),
            width: scale(45),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={image.google}
            style={{
              tintColor: '#93121B',
              width: scale(24),
              height: scale(24),
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => ShareComponent(item)}
          style={{
            height: scale(35),
            width: scale(45),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={image.share}
            style={{
              tintColor: '#93121B',
              width: scale(24),
              height: scale(24),
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: scale(35),
            width: scale(45),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => PhoneCall()}>
          <Image
            source={image.phone}
            style={{
              tintColor: 'black',
              width: scale(24),
              height: scale(24),
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <StatusTopBar />
      <DrawerHeader name={'Blood Banks'} />
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: moderateScale(20),
            marginBottom: moderateScale(80),
          }}>
          <View
            style={{
              flexDirection: 'column',
              height: moderateScale(75),
              width: '90%',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 1,
              }}>
              <Autocomplete
                autoCapitalize="none"
                autoCorrect={false}
                containerStyle={[
                  styles.input,
                  {
                    justifyContent: 'center',
                    marginRight: scale(10),
                    borderWidth: scale(1.05),
                  },
                ]}
                inputContainerStyle={{
                  backgroundColor: 'white',
                  height: scale(45),
                  padding: scale(4),
                  borderColor: 'black',

                  flex: 1,
                }}
                listContainerStyle={{
                  zIndex: -10,
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  position: 'absolute',
                  width: '100%',
                  top: 57,
                  transform: [{scale: 1}],
                  backgroundColor: '#E5E4E2',
                  height: scale(heightt),
                }}
                // listStyle={{position:'relative'}}
                onChangeText={text => {
                  searchText(text);
                  Heiggt(text);
                }}
                placeholder="Select City"
                placeholderTextColor="black"
                data={filteredFilms}
                defaultValue={JSON.stringify(City) === '{}' ? '' : City.label}
                flatListProps={{
                  nestedScrollEnable: 'true',
                  keyboardShouldPersistTaps: 'always',

                  renderItem: ({item}) => (
                    // <ScrollView keyboardShouldPersistTaps={false}>
                    <TouchableOpacity
                      style={{
                        flex: 2,
                        height: scale(30),
                        width: scale(160),
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        borderBottomWidth: 1,
                      }}
                      onPress={() => {
                        setCity(item);
                        setheightt(null);
                        setFilteredFilms([]);
                      }}>
                      <Text
                        style={{
                          textTransform: 'lowercase',
                          fontSize: scale(12),
                          fontFamily: 'bold',
                        }}>
                        {item.label}
                        {/* {console.log('heelelelelelel', City)} */}
                      </Text>
                    </TouchableOpacity>
                  ),
                  // </ScrollView>
                }}
              />

              <TextInput
                style={[
                  styles.input,
                  {padding: width * 0.03, backgroundColor: 'white'},
                ]}
                value={Pincode}
                onChangeText={setPincode}
                keyboardType={'decimal-pad'}
                placeholder={'Pin Code'}
                maxLength={6}
                placeholderTextColor="black"
              />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              height: moderateScale(50),
              width: '100%',
              marginTop: moderateScale(5),
              marginBottom: moderateScale(15),
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
                onPress={() => reset()}
                style={{
                  height: moderateScale(40),
                  width: '45%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#93121B',
                  borderRadius: moderateScale(2),
                  marginRight: moderateScale(5),
                }}>
                <Text
                  style={{
                    fontSize: scale(16),
                    textAlign: 'center',
                    color: 'white',
                  }}>
                  Reset
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Filter()}
                style={{
                  height: moderateScale(40),
                  width: '45%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'black',
                  borderRadius: moderateScale(2),
                  marginLeft: moderateScale(5),
                }}>
                <Text
                  style={{
                    fontSize: scale(16),
                    textAlign: 'center',
                    color: 'white',
                  }}>
                  Filter
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              scrollEnabled={true}
              data={hospitalboollist}
              renderItem={renderItem}
              ListEmptyComponent={() => listEmptyComponent()}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BloodBank;
const styles = StyleSheet.create({
  placeholderStyle: {
    fontSize: 16,
  },

  selectedTextStyle: {
    fontSize: 16,
  },

  inputSearchStyle: {
    height: 45,
    fontSize: 18,
    width: '82%',
    marginLeft: 16,
  },

  input: {
    height: height * 0.07,
    width: scale(150),
    borderWidth: scale(1.4),
    fontSize: scale(11.5),
    fontWeight: '400',
    color: 'black',
    marginBottom: scale(15),
  },

  card: {
    elevation: 2,
    borderWidth: 0.8,
    borderColor: 'grey',
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(10),
    backgroundColor: 'white',
    // marginHorizontal:moderateScale(25),
    shadowColor: '#93121B',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: moderateScale(170),
    width: scale(295),
    overflow: 'hidden',
  },

  textContent: {
    height: moderateScale(120),
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardImage: {
    width: scale(45),
    height: scale(45),
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardtitle: {
    fontSize: scale(15),
    fontWeight: 'bold',
  },

  cardDescription: {
    fontSize: scale(14),
    color: '#444',
  },
});
