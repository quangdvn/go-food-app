import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import eventData from '../../../../data/data_event.json'

const EventDetailScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImg}
        source={{uri: eventData.data.image_url}}
      >
        <View style={{ width: screenWidth * 0.85 }}>
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => navigation.navigate('Event')}
          >
            <AntDesign name="arrowleft" color="#39B54A" size={30} />
          </TouchableOpacity>
          <View style={{ marginTop: 60 }}>
            <Text
              style={{
                padding: 5,
                backgroundColor: '#39B54A',
                width: '20%',
                borderRadius: 20,
                textAlign: 'center',
              }}
            >
              Official
            </Text>
            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>
              Lets go outside !!
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.afterContainer}>
        <View style={styles.eventBookmark}>
          <View
            style={{
              padding: 20,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              backgroundColor: '#fff',
            }}
          >
            <Text style={styles.labelTxt}>Are You Interested ?</Text>
          </View>
          <View style={styles.BookmarkBtn}>
            <TouchableOpacity style={styles.leftBtn}>
              <Text style={{ color: '#fff' }}>I'm In !!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightBtn}>
              <Text style={{ color: '#fff' }}>Nah !!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.eventInfo}>
          <View style={{}}>
            <Text style={styles.labelTxt}>Time</Text>
            <Text>Wednesday, April 22, 03:00 pm</Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.labelTxt}>Description</Text>
            <Text>
              {eventData.data.description}
            </Text>
            <TouchableOpacity>
              <Text style={{ color: '#6FDDFF', marginTop: 7 }}
                  onPress={() => Linking.openURL(eventData.data.event_site_url)}>
                  View on Web >
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.labelTxt}>Location</Text>
            <TouchableOpacity>
              <Image
                style={styles.mapImg}
                source={require('../../../../../assets/images/map.jpeg')}
              />
            </TouchableOpacity>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}
            >
              <AntDesign name="enviromento" size={30} />
              <Text style={{ marginLeft: 10, color: '#9FACB9' }}>{eventData.data.location.city}, {eventData.data.location.country}</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}
            >
              <Text style={styles.labelTxt}>Attendee(s)</Text>
              <Text style={styles.labelTxt}>{eventData.data.attending_count} person(s)</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    left: 0,
    top: 0,
  },
  backgroundImg: {
    width: '100%',
    height: 220,
    display: 'flex',
    alignItems: 'center',
  },
  afterContainer: {
    marginTop: 10,
    marginBottom: 15,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  eventBookmark: {
    width: screenWidth * 0.85,
  },
  eventInfo: {
    width: screenWidth * 0.85,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 20,
  },
  BookmarkBtn: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  labelTxt: {
    fontSize: 18,
    color: '#44566C',
    fontWeight: '600',
    marginBottom: 10,
  },
  leftBtn: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#39B54A',
    height: 50,
    borderBottomLeftRadius: 20,
  },
  rightBtn: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D32323',
    height: 50,
    borderBottomRightRadius: 20,
  },
  mapImg: {
    width: '100%',
    height: 300,
  },
});

export default EventDetailScreen;
