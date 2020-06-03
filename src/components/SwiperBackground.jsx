import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import ClaimLogo from './Icon/ClaimLogo';
import UnClaimLogo from './Icon/UnClaimLogo';
import StarImages from '../utils/renderRating';

const SwiperBackground = ({
  resName,
  imageUri,
  ratingStar,
  rating,
  claimed,
  screenHeight,
}) => {
  const image = { uri: imageUri };

  return (
    <View style={styles.opacityImage}>
      <ImageBackground
        source={image ? image : null}
        style={{
          flex: 1,
          height: screenHeight / 3.5,
          opacity: 0.4,
        }}
        resizeMode="cover"
      />
      <View style={{ ...styles.introBox, height: screenHeight / 3.5 }}>
        {claimed ? <ClaimLogo /> : <UnClaimLogo />}
        <Text style={styles.resName}>{resName}</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={StarImages[ratingStar]}
            style={{ height: 20, width: 120 }}
            resizeMode="stretch"
          />
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  opacityImage: {
    backgroundColor: '#212529',
  },
  introBox: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginLeft: 30,
    bottom: 50,
  },
  resName: {
    color: '#ffffff',
    fontFamily: 'open-sans-bold',
    fontSize: 28,
    paddingBottom: 5,
  },
  rating: {
    color: '#ffffff',
    fontFamily: 'open-sans-bold',
    fontSize: 17,
    marginLeft: 10,
  },
});

export default SwiperBackground;
