import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const EventItem = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.eventContainer}
      onPress={() => navigation.navigate('EventDetail')}
    >
      <View>
        <Image
          style={styles.eventImg}
          source={require('../../../../../assets/images/cuondiep.jpg')}
        ></Image>
      </View>
      <View style={styles.eventContent}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 15,
            color: '#44566C',
          }}
        >
          Selfie and Foods
        </Text>
        <View style={styles.icon_text}>
          <AntDesign name="table" size={30} />
          <Text style={{ marginLeft: 7, color: '#9FACB9' }}>
            Tuesday, Apr 21, 12:00 am
          </Text>
        </View>
        <View style={styles.icon_text}>
          <AntDesign name="enviromento" size={30} />
          <Text style={{ marginLeft: 7, color: '#9FACB9' }}>
            Shibuyya, Tokyo
          </Text>
        </View>
        <View style={styles.eventDetail}>
          <Text>
            Lorem ispus, Lorem ispus, Lorem ispus, Lorem ispus, Lorem ispus,
            Lorem ispus, Lorem ispus
          </Text>
        </View>
      </View>
      <View style={styles.eventBottom}>
        <Text style={{ color: '#7CE0FF' }}>Food & Drink</Text>
        <Text style={{ color: '#9FACB9' }}>20 interested</Text>
      </View>
    </TouchableOpacity>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  eventContent: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomColor: '#F8F8F9',
    borderBottomWidth: 2,
  },
  eventImg: {
    height: 120,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  backgroundEvent: {
    width: '100%',
    height: '100%',
  },
  eventContainer: {
    width: screenWidth * 0.8,
    marginBottom: 20,
  },
  icon_text: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  eventDetail: {},
  eventBottom: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});

export default EventItem;