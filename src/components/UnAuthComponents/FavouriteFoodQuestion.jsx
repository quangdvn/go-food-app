import React from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import countryData from '../../data/country.json';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';

const FavouriteFoodQuestion = ({ favoriteFood, navigation, getData }) => {
  return (
    <View style={{ marginTop: 40 }}>
      <KeyboardAvoidingView
        behavior={'position'}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'open-sans-bold',
            color: '#8CC631',
          }}
        >
          Finally, telll me about your favoriteFood (1 only)
        </Text>
        <TextInput
          value={favoriteFood}
          onChangeText={text => setFavoriteFood(text)}
          style={styles.input}
        />
      </KeyboardAvoidingView>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <LinearGradient
          colors={Colors.gradient}
          start={[1.5, 0]}
          end={[0, 0.5]}
          style={{
            height: 40,
            width: 150,
            borderRadius: 20,
            // marginHorizontal: 15,
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              getData();
              navigation.navigate('Home');
            }}
            disabled={!favoriteFood}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontFamily: 'open-sans-bold',
                textAlign: 'center',
                marginVertical: 7,
              }}
            >
              Ok, Let's start!
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inner: {
    flex: 1,
    marginBottom: 50,
    justifyContent: 'space-around',
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
