import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';

const MapPreview = props => {
  let imagePreviewUrl;

  if (props.coordinates) {
    const { latitude, longitude } = props.coordinates;
    imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=16&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${latitude},${longitude}&key=AIzaSyDBzJUujONkz2OeYnhznihiFzbae8iBHJs`;
  }
  
  return (
    <View
      // onPress={props.onPress}
      style={{ ...styles.mapPreview, ...props.style }}
    >
      {props.coordinates ? (
        <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
      ) : (
        props.children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
});

export default MapPreview;
