import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const MapScreen = ({ navigation }) => {
  const initialLocation = navigation.getParam('location');
  const locationName = navigation.getParam('name');

  const mapRegion = {
    latitude: initialLocation ? initialLocation.latitude : 21.0013283,
    longitude: initialLocation ? initialLocation.longitude : 105.8644411,
    latitudeDelta: 0.0005,
    longitudeDelta: 0.0005,
  };

  return (
    <MapView initialRegion={mapRegion} style={styles.map}>
      <Ionicons
        name="md-arrow-round-back"
        size={30}
        color="black"
        style={{
          position: 'absolute',
          left: screenWidth * 0.085,
          marginTop: (10 * screenHeight) / 300,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Marker
        title={locationName ? locationName : null}
        coordinate={initialLocation}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  headerButton: {
    marginHorizontal: 20,
  },
  headerButtonText: {
    fontSize: 16,
    color: Colors.primary,
  },
});

export default MapScreen;
