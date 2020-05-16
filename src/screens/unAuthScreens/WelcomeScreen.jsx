import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Colors from '../../constants/Colors';

const WelcomeScreen = ({ navigation }) => {
  const [nextScreenAnimation, setNextScreenAnimation] = useState(null);

  const [isShow, setShow] = useState(false);

  const setIndexChanged = index => {
    if (index === 2) {
      setNextScreenAnimation('bounceInUp');
      setShow(true);
    }
  };

  return (
    <Swiper
      loop={false}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      onIndexChanged={index => setIndexChanged(index)}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/welcome_screen_1.png')}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.title}>No more self cooking</Text>
          <Text style={styles.text}>
            You don't have to spend countless hours on cooking for yourself
            anymore
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/welcome_screen_2.png')}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.title}>Eating out together</Text>
          <Text style={styles.text}>
            How about spending a night out with tour best friend in the best
            place
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/welcome_screen_3.png')}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.title}>Auto recommendation</Text>
          <Text style={styles.text}>
            Just sit your place, we will get you the best place to enjoy your
            next meal
          </Text>
          {isShow ? (
            <Animatable.View
              animation={nextScreenAnimation}
              delay={200}
              duration={2000}
              useNativeDriver={true}
            >
              <LinearGradient
                colors={Colors.gradient}
                start={[1, 0]}
                end={[0, 1]}
                style={styles.button}
              >
                <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                  <Text style={styles.buttonText}>Let's try our app now !</Text>
                </TouchableOpacity>
              </LinearGradient>
            </Animatable.View>
          ) : null}
        </View>
      </View>
    </Swiper>
  );
};

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen');
const IMAGE_HEIGHT = SCREEN_HEIGHT * 0.4;
const IMAGE_WIDTH = IMAGE_HEIGHT * 1.05;
const BUTTON_WIDTH = SCREEN_WIDTH * 0.6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  image: {
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
  },
  title: {
    fontSize: 25,
    fontFamily: 'open-sans-bold',
    color: Colors.accent,
    textAlign: 'center',
    marginTop: -40,
  },
  text: {
    color: 'gray',
    fontFamily: 'open-sans',
    textAlign: 'center',
    marginTop: 10,
  },
  dot: {
    backgroundColor: '#BABBBA',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  activeDot: {
    backgroundColor: Colors.accent,
    width: 20,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  button: {
    width: BUTTON_WIDTH,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 30,
  },
  buttonText: {
    fontFamily: 'open-sans-bold',
    color: 'white',
  },
});

export default WelcomeScreen;
