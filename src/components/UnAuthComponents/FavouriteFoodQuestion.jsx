import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import * as Animatable from 'react-native-animatable';

const FavouriteFoodQuestion = ({ favoriteFood, getData, setFoodData }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    setShowConfirm(true);
  }, []);

  return (
    <View style={{ marginTop: 40 }}>
      <Text style={styles.title}>
        Finally, tell me about your favorite food (1 only)
      </Text>
      <TextInput
        placeholder="Ex: Pizza, Steak, Hamburger, ..."
        value={favoriteFood}
        onChangeText={text => setFoodData(text)}
        style={styles.input}
      />

      {showConfirm ? (
        <Animatable.View
          animation={'bounceInDown'}
          delay={200}
          duration={2000}
          useNativeDriver={true}
        >
          <View style={styles.confirm}>
            <LinearGradient
              colors={Colors.gradient}
              start={[1.5, 0]}
              end={[0, 0.5]}
              style={styles.button}
            >
              <TouchableOpacity
                onPress={() => {
                  getData();
                }}
                style={!favoriteFood ? { opacity: 0.5 } : null}
                disabled={!favoriteFood}
              >
                <Text style={styles.buttonText}>Ok, Let's start!</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </Animatable.View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    color: Colors.accent,
  },
  confirm: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    height: 60,
    width: 180,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'open-sans-bold',
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical: 7,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    height: 50,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30,
    fontSize: 14,
    borderRadius: 6,
  },
});

export default FavouriteFoodQuestion;
