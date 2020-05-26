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
import SwiperBackground from '../../../components/SwiperBackground';
import CommentDetail from '../../../components/CommentDetail';
import Colors from '../../../constants/Colors';
import StarImages from '../../../utils/renderRating';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
      vote: 3,
      date: '2020-4-24',
      comment:
        'lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus lorem ispus',
    },
  ];

  return (
    <ScrollView>
      <StatusBar hidden={true} />
      <Swiper
        loop={false}
        height={height / 3.5}
        showsPagination={true}
        dot={<View style={{ ...styles.dot, backgroundColor: '#FFFFFF' }} />}
        activeDot={
          <View style={{ ...styles.dot, backgroundColor: '#D32323' }} />
        }
      >
        <SwiperBackground
          resName="Sushi House"
          imageUri="https://s3-media4.fl.yelpcdn.com/bphoto/zheMT_Y4dOj6DfNfTZdeOA/o.jpg"
          ratingStar={4.5}
          rating={227}
          claimed
          screenHeight={height}
        />
        <SwiperBackground
          resName="Sushi House"
          imageUri="https://s3-media3.fl.yelpcdn.com/bphoto/khL3hwdQROR1YwDkkDj4NQ/o.jpg"
          ratingStar={4.5}
          rating={227}
          claimed
          screenHeight={height}
        />
        <SwiperBackground
          resName="Sushi House"
          imageUri="https://s3-media3.fl.yelpcdn.com/bphoto/29AX56Oh-unTaEXRTh_k2Q/o.jpg"
          ratingStar={4.5}
          rating={227}
          claimed
          screenHeight={height}
        />
      </Swiper>
      <Ionicons
        name="md-arrow-round-back"
        size={30}
        color="white"
        style={{
          position: 'absolute',
          left: 0,
          marginTop: 30,
          marginLeft: 30,
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
            $$ . Sushi, Japanese
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
            marginVertical: 30,
            marginLeft: 20,
          }}
        >
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
          <CommentDetail data={data} key={index} />
        ))}
        <View style={styles.input_box}>
          <Image
            source={{ uri: 'https://i.ibb.co/FJrKNV1/3.jpg' }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <View
            style={{
              flexDirection: 'column',
              marginRight: 25,
            }}
          >
            <Text style={styles.customer_name}>Bùi Quang Huy</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
              }}
            >
              <Text style={styles.input_cmt}>Start your review...</Text>
              <Image
                source={StarImages[0]}
                style={{ height: 20, width: 120 }}
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
  layout: {
    shadowColor: 'gray',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 15,
  },
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
  input_cmt: {
    color: '#44566c',
    fontFamily: 'open-sans',
    fontSize: 15,
    opacity: 0.5,
  },
  input_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 40,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: -10,
  },
});

export default RestaurantDetailScreen;
