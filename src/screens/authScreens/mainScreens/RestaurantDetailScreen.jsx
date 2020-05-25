import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Icon_map,
  Icon_bookmark,
  Icon_contact,
  Icon_web,
} from '../../../components/Icon/TestLogo';
import Swiper from 'react-native-swiper';
import { Icon_Claim } from '../../../components/Icon/TestLogo';
import Colors from '../../../constants/Colors';
const RestaurantDetailScreen = ({ navigation }) => {
  const dayAndTime = [
    {
      day: 'Mon',
      time: '8:00 am - 17:00 pm',
    },
    {
      day: 'Tue',
      time: '8:00 am - 17:00 pm',
    },
    {
      day: 'Wed',
      time: '8:00 am - 17:00 pm',
    },
    {
      day: 'Thu',
      time: '8:00 am - 17:00 pm',
    },
    {
      day: 'Fri',
      time: '8:00 am - 17:00 pm',
    },
    {
      day: 'Sat',
      time: '8:00 am - 17:00 pm',
    },
    {
      day: 'Sun',
      time: '8:00 am - 17:00 pm',
    },
  ];
  const listComment = [
    {
      image: 'https://i.ibb.co/16NqdWg/2.jpg',
      name: 'Nhật Quang',
      vote: 4,
      date: '2020-5-14',
      comment:
        'lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus',
    },
    {
      image: 'https://i.ibb.co/tpG0mJY/1.jpg',
      name: 'Vũ Đức',
      vote: 5,
      date: '2020-4-24',
      comment:
        'lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus',
    },
  ];
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <ScrollView>
      <Swiper
        loop={false}
        height={height / 3.5}
        showsPagination={true}
        activeDot={<View style={styles.activeDot} />}
      >
        <View style={styles.opacity_img}>
          <ImageBackground
            source={require('../../../../assets/images/res1.jpg')}
            style={{
              flex: 1,
              height: height / 3.5,
              opacity: 0.4,
            }}
            resizeMode="sketch"
          />
          <View style={{ ...styles.box_intro, height: height / 3.5 }}>
            <Icon_Claim />
            <Text
              style={{
                color: '#ffffff',
                fontFamily: 'open-sans-bold',
                fontSize: 28,
              }}
            >
              Shushi House
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../../../../assets/images/stars/extra_large_5.png')}
                style={{ height: 20, width: 90 }}
                resizeMode="stretch"
              />
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 15,
                  marginLeft: 10,
                }}
              >
                217
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.opacity_img}>
          <ImageBackground
            source={require('../../../../assets/images/res3.jpg')}
            style={{
              flex: 1,
              height: height / 3,
              opacity: 0.4,
            }}
            resizeMode="sketch"
          />
          <View style={{ ...styles.box_intro, height: height / 3 }}>
            <Icon_Claim />
            <Text
              style={{
                color: '#ffffff',
                fontFamily: 'open-sans-bold',
                fontSize: 28,
              }}
            >
              Shushi House
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../../../../assets/images/stars/extra_large_5.png')}
                style={{ height: 20, width: 90 }}
                resizeMode="stretch"
              />
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 15,
                  marginLeft: 10,
                }}
              >
                217
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.opacity_img}>
          <ImageBackground
            source={require('../../../../assets/images/res2.jpg')}
            style={{
              flex: 1,
              height: height / 3,
              opacity: 0.4,
            }}
            resizeMode="sketch"
          />
          <View style={{ ...styles.box_intro, height: height / 3 }}>
            <Icon_Claim />
            <Text
              style={{
                color: '#ffffff',
                fontFamily: 'open-sans-bold',
                fontSize: 28,
              }}
            >
              Shushi House
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../../../../assets/images/stars/extra_large_5.png')}
                style={{ height: 20, width: 90 }}
                resizeMode="stretch"
              />
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 15,
                  marginLeft: 10,
                }}
              >
                217
              </Text>
            </View>
          </View>
        </View>
      </Swiper>
      <Ionicons
        name="md-arrow-round-back"
        size={30}
        color="white"
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          position: 'absolute',
        }}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.layout}>
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 20,
          }}
        >
          <Text style={styles.title}>Sushi House in Sydney</Text>
          <Text
            style={{
              color: '#8996a6',
              fontSize: 15,
            }}
          >
            $$, Shushi, Japanese
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#39b54a',
                fontSize: 15,
                marginTop: 10,
              }}
            >
              Still open
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            // marginHorizontal: 10,
            marginVertical: 30,
            marginLeft: 20,
          }}
        >
          {/* <View  style={ flexDirection: 'column'}> */}
          <TouchableOpacity style={{ flexDirection: 'column' }}>
            <Icon_contact />
            <Text style={styles.icon_text}>CALL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'column', marginLeft: 10 }}>
            <Icon_web />
            <Text style={styles.icon_text}>WEB</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'column', marginLeft: 15 }}>
            <Icon_map />
            <Text style={styles.icon_text}>MAP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: 'column', alignItems: 'center' }}
          >
            <Icon_bookmark />
            <Text style={styles.icon_text}>BOOKMARK</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.layout}>
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.title}>Location & Hours</Text>
          {/* <Image
            source={require('../../../../assets/images/canhngusac.jpg')}
            style={{ marginHorizontal: 20, marginVertical: 15 }}
          /> */}

          <View style={styles.map}>
            <Text>map</Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={styles.title}>From your place</Text>
              <Text style={styles.distance}>0.1km</Text>
            </View>
            {dayAndTime.map((data, index) => (
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: width / 4,
                }}
                key={index}
              >
                <Text style={styles.day}>{data.day} </Text>
                <Text style={styles.time}>{data.time}</Text>
              </View>
            ))}
          </View>
          <LinearGradient
            colors={Colors.reservation}
            start={[0, 1.5]}
            end={[0.5, 0]}
            style={styles.button}
          >
            <TouchableOpacity>
              <Text style={styles.reservation_text}>
                Make your reservation now !!
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>

      <View style={{ ...styles.layout, marginBottom: 20 }}>
        <Text style={{ ...styles.title, marginLeft: 15 }}>
          Review Highlights
        </Text>
        {listComment.map((data, index) => (
          <View style={styles.comment_box} key={index}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={{ uri: `${data.image}` }}
                style={{ width: 50, height: 50, borderRadius: '50%' }}
              />
              <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                <Text style={styles.customer_name}>{data.name}</Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                  {data.vote === 5 ? (
                    <Image
                      source={require('../../../../assets/images/stars/extra_large_5.png')}
                      style={{ height: 20, width: 90 }}
                      resizeMode="stretch"
                    />
                  ) : data.vote === 4 ? (
                    <Image
                      source={require('../../../../assets/images/stars/extra_large_4.png')}
                      style={{ height: 20, width: 90 }}
                      resizeMode="stretch"
                    />
                  ) : data.vote === 3 ? (
                    <Image
                      source={require('../../../../assets/images/stars/extra_large_3.png')}
                      style={{ height: 20, width: 90 }}
                      resizeMode="stretch"
                    />
                  ) : data.vote === 2 ? (
                    <Image
                      source={require('../../../../assets/images/stars/extra_large_2.png')}
                      style={{ height: 20, width: 90 }}
                      resizeMode="stretch"
                    />
                  ) : data.vote === 1 ? (
                    <Image
                      source={require('../../../../assets/images/stars/extra_large_1.png')}
                      style={{ height: 20, width: 90 }}
                      resizeMode="stretch"
                    />
                  ) : (
                    <Image
                      source={require('../../../../assets/images/stars/extra_large_0.png')}
                      style={{ height: 20, width: 90 }}
                      resizeMode="stretch"
                    />
                  )}

                  <Text
                    style={{
                      color: '#8996a6',
                      fontSize: 13,
                      fontFamily: 'open-sans',
                      marginLeft: 10,
                    }}
                  >
                    {data.date}
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.comment}>{data.comment}</Text>
          </View>
        ))}
        <View style={styles.input_box}>
          <Image
            source={{ uri: 'https://i.ibb.co/FJrKNV1/3.jpg' }}
            style={{ width: 50, height: 50, borderRadius: '50%' }}
          />
          <View style={{ flexDirection: 'column', marginLeft: 20 }}>
            <Text style={styles.customer_name}>Bùi Quang Huy</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <TextInput
                style={styles.input_cmt}
                value="Start your own review ..."
              />

              <Image
                source={require('../../../../assets/images/stars/extra_large_0.png')}
                style={{ height: 20, width: 70 }}
                resizeMode="stretch"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  opacity_img: {
    backgroundColor: '#212529',
  },
  layout: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 15,
    marginHorizontal: 15,
  },
  // layout3: {
  //   marginTop: 15,
  //   marginLeft: 20,
  //   backgroundColor: '#ffffff',
  //   marginHorizontal: 15,
  //   borderColor: '#ffffff',
  //   borderWidth: 1,
  //   borderRadius: 15,
  // },
  // layout4: {
  //   marginTop: 15,
  //   marginVertical: 20,
  //   backgroundColor: '#ffffff',
  //   marginHorizontal: 15,
  //   borderColor: '#ffffff',
  //   borderWidth: 1,
  //   borderRadius: 15,
  // },
  title: {
    color: '#44566c',
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    marginTop: 15,
    // marginLeft: 20,
  },

  icon_text: {
    marginTop: 10,
    color: '#44566c',
    fontFamily: 'open-sans-bold',
    fontSize: 15,
    textAlign: 'center',
  },
  day: {
    color: '#44566c',
    fontFamily: 'open-sans',
    fontSize: 15,
  },
  time: {
    color: '#44566c',
    fontFamily: 'open-sans',
    fontSize: 15,
    marginLeft: 50,
  },
  button: {
    height: 40,
    backgroundColor: '#009245',
    borderRadius: 20,
    paddingVertical: 7,
    marginHorizontal: 30,
    marginVertical: 20,
    marginLeft: 10,
  },
  reservation_text: {
    color: '#ffffff',
    fontFamily: 'open-sans-bold',
    fontSize: 15,
    textAlign: 'center',
  },
  map: {
    flex: 1,
    height: 100,
    backgroundColor: 'red',
    marginTop: 15,
  },
  distance: {
    color: '#44566c',
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    marginTop: 15,
  },
  customer_name: {
    color: '#44566c',
    fontFamily: 'open-sans-bold',
    fontSize: 15,
  },
  comment: {
    color: '#44566c',
    fontFamily: 'open-sans',
    fontSize: 15,
    marginVertical: 15,
  },
  comment_box: {
    marginLeft: 20,
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: '#e1e5e9',
    marginRight: 15,
  },
  input_cmt: {
    color: '#44566c',
    fontFamily: 'open-sans',
    fontSize: 15,
    opacity: 0.5,
    marginRight: 5,
  },
  input_box: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 40,
  },

  box_intro: {
    flexDirection: 'column',
    marginLeft: 30,
    marginTop: 60,
  },
  activeDot: {
    backgroundColor: '#ffffff',
    width: 8,
    height: 8,
    borderRadius: 4,
    opacity: 0.5,
  },
});

export default RestaurantDetailScreen;
