import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Icon_map,
  Icon_bookmark,
  Icon_bookmarked,
  Icon_contact,
  Icon_web,
} from '../../../../components/Icon/TestLogo';
import Communications from 'react-native-communications';
import Swiper from 'react-native-swiper';
import SwiperBackground from '../../../../components/SwiperBackground';
import CommentDetail from '../../../../components/CommentDetail';
import MapPreview from '../../../../components/MapPreview';
import Colors from '../../../../constants/Colors';
import StarImages from '../../../../utils/renderRating';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRestaurantDetail,
  clearRestaurantsDetail,
  addBookmark,
  removeBookmark,
} from '../../../../store/actions';
import DayOfWeek from '../../../../data/data_day';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const RestaurantDetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const mainItem = navigation.getParam('mainItem');
  const bookmarkItem = navigation.getParam('bookmarkItem');

  const renderCategories = categories => {
    let returnData = '';
    const newData = categories.map(item => item.title);

    newData.forEach((item, index) => {
      if (index === newData.length - 1) returnData = returnData + item;
      else returnData = returnData + item + ', ';
    });

    return returnData;
  };

  let resDetail = {};

  if (mainItem) {
    resDetail = {
      ...mainItem,
      categories: renderCategories(mainItem.categories),
      address: mainItem.location.address1 + ', ' + mainItem.location.city,
    };
  } else {
    resDetail.id = bookmarkItem.restaurantId;
    resDetail.distance = bookmarkItem.distance;
    resDetail.name = bookmarkItem.restaurantName;
    resDetail.rating = bookmarkItem.rating;
    resDetail.image_url = bookmarkItem.imageUrl;
    resDetail.price = bookmarkItem.price;
    resDetail.categories = bookmarkItem.categories;
    resDetail.location = bookmarkItem.location;
  }

  useEffect(() => {
    dispatch(getRestaurantDetail(resDetail.id));

    return () => {
      dispatch(clearRestaurantsDetail());
    };
  }, [getRestaurantDetail, resDetail.id]);

  const { restaurantDetail, bookmarkList } = useSelector(
    state => state.service
  );
  const isMarked = bookmarkList.some(item => item === resDetail.id);

  const [isBookmarked, setBookmark] = useState(isMarked);

  const {
    user: { fullname },
  } = useSelector(state => state.auth);

  const renderDistance = distance => {
    let returnData = parseInt(distance);
    if (returnData >= 1000) {
      return (returnData / 1000).toFixed(1) + 'km';
    } else {
      return returnData + 'm';
    }
  };

  const convertDateTime = datetime => {
    let hour = '8';
    let minute = '00';

    if (datetime.length == 4) {
      hour = datetime.substring(0, 2);
      minute = datetime.substring(2, 4);
      if (parseInt(hour) >= 0 && parseInt(hour) <= 12) {
        return hour + ':' + minute + ' AM';
      } else if (parseInt(hour) > 12 && parseInt(hour) <= 24) {
        return hour + ':' + minute + ' PM';
      }
    } else if (datetime.length == 3) {
      hour = datetime.substring(0, 1);
      minute = datetime.substring(1, 3);
      if (parseInt(hour) >= 0 && parseInt(hour) <= 12) {
        return hour + ':' + minute + ' AM';
      } else if (parseInt(hour) > 12 && parseInt(hour) <= 24) {
        return hour + ':' + minute + ' PM';
      }
    }
  };

  const displayBookmarkConfirm = () => {
    if (!isBookmarked) {
      const sendData = {
        restaurantName: resDetail.name,
        rating: resDetail.rating,
        imageUrl: resDetail.image_url,
        price: resDetail.price,
        categories: resDetail.categories,
        address: resDetail.address,
        distance: resDetail.distance,
      };
      Alert.alert(
        'Bookmark confirmation',
        'Are you sure you want to bookmark this restaurant?',
        [
          {
            text: 'Maybe later',
            style: 'destructive',
          },
          {
            text: 'Certainly',
            style: 'default',
            onPress: () => {
              dispatch(addBookmark(resDetail.id, sendData));
              setBookmark(prevState => !prevState);
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Unbookmark confirmation',
        'Are you sure you want to remove this restaurant?',
        [
          {
            text: 'Maybe later',
            style: 'destructive',
          },
          {
            text: 'Yes',
            style: 'default',
            onPress: () => {
              dispatch(removeBookmark(resDetail.id));
              setBookmark(prevState => !prevState);
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  if (restaurantDetail) {
    const { details, reviews } = restaurantDetail;

    return (
      <ScrollView
        alwaysBounceVertical={false}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar hidden={true} />
        <View>
          <Swiper
            loop={false}
            height={screenHeight / 3.5}
            showsPagination={true}
            dot={<View style={{ ...styles.dot, backgroundColor: '#FFFFFF' }} />}
            activeDot={
              <View style={{ ...styles.dot, backgroundColor: '#D32323' }} />
            }
          >
            {details.photos.map((photo, index) => (
              <SwiperBackground
                resName={details.name}
                imageUri={photo}
                ratingStar={details.rating}
                rating={details.review_count}
                claimed={details.is_claimed}
                screenHeight={screenHeight}
                key={index}
              />
            ))}
          </Swiper>

          <Ionicons
            name="md-arrow-round-back"
            size={30}
            color="white"
            style={{
              position: 'absolute',
              left: screenWidth * 0.085,
              marginTop: (10 * screenHeight) / 300,
            }}
            onPress={() => {
              navigation.goBack();
              dispatch(clearRestaurantsDetail());
            }}
          />
          <View style={styles.layout}>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 20,
              }}
            >
              <Text style={styles.title}>{details.alias}</Text>
              <Text numberOfLines={1} style={styles.priceText}>
                {details.price ? details.price + ' . ' : null}
                {''}
                {renderCategories(details.categories)}
              </Text>
              {details.is_closed ? (
                <Text style={{ ...styles.activeText, color: 'red' }}>
                  Close now
                </Text>
              ) : (
                <Text style={{ ...styles.activeText, color: '#39b54a' }}>
                  Still open
                </Text>
              )}
            </View>
            <View style={styles.contactBox}>
              <TouchableOpacity
                style={{ flexDirection: 'column' }}
                onPress={() => Communications.phonecall(details.phone, true)}
              >
                <Icon_contact />
                <Text style={styles.icon_text}>CALL</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ flexDirection: 'column', marginLeft: 10 }}
                onPress={() => Linking.openURL(details.url)}
              >
                <Icon_web />
                <Text style={styles.icon_text}>WEB</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ flexDirection: 'column', marginLeft: 15 }}
                onPress={() =>
                  navigation.navigate('Map', {
                    location: details.coordinates,
                    name: details.name,
                  })
                }
              >
                <Icon_map />
                <Text style={styles.icon_text}>MAP</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ flexDirection: 'column', alignItems: 'center' }}
                onPress={() => displayBookmarkConfirm()}
              >
                {isBookmarked ? <Icon_bookmarked /> : <Icon_bookmark />}
                <Text style={styles.icon_text}>BOOKMARK</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.layout}>
            <View style={{ marginHorizontal: 20 }}>
              <Text style={styles.title}>Location & Hours</Text>
              <MapPreview
                style={styles.mapPreview}
                coordinates={details.coordinates}
              />
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                  }}
                >
                  <Text style={styles.title}>From your place</Text>
                  <Text style={styles.distance}>
                    {renderDistance(resDetail.distance)}
                  </Text>
                </View>

                {details.hours
                  ? details.hours[0].open.map((data, index) => (
                      <View style={styles.workingDate} key={index}>
                        <Text style={styles.day}>{DayOfWeek[data.day]}</Text>
                        <Text style={styles.time}>
                          {convertDateTime(data.start)} -{' '}
                          {convertDateTime(data.end)}
                        </Text>
                      </View>
                    ))
                  : null}
              </View>
              {details.hours ? (
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
              ) : null}
            </View>
          </View>

          <View style={{ ...styles.layout, marginBottom: 20 }}>
            <Text style={{ ...styles.title, marginLeft: 15 }}>
              Review Highlights
            </Text>
            {reviews.map((data, index) => (
              <CommentDetail data={data} key={index} />
            ))}
            <View style={styles.input_box}>
              <Image
                source={require('../../../../../assets/images/test.png')}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  marginRight: 25,
                }}
              >
                <Text style={styles.customer_name}>{fullname}</Text>
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
        </View>
      </ScrollView>
    );
  }
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  },
  activeText: {
    fontSize: 15,
    marginTop: 10,
  },
  priceText: {
    color: '#8996a6',
    fontSize: 15,
  },
  contactBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
    marginLeft: 20,
  },
  icon_text: {
    marginTop: 10,
    color: '#44566c',
    fontFamily: 'open-sans-bold',
    fontSize: 15,
    textAlign: 'center',
  },
  workingDate: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  mapPreview: {
    width: '100%',
    maxWidth: 350,
    height: 300,
    marginVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
