import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAutoComplete } from '../../api/goFoodApi';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import Loader from 'react-native-three-dots-loader';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestion, setSuggestion] = useState(null);
  const typingTimeoutRef = useRef(null);

  const handleSearchTermChange = value => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setSearchTerm(value);
    }, 300);
  };
  const getSuggestion = async () => {
    try {
      const { data } = await getAutoComplete(searchTerm);
      setSuggestion(data);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const ListResultSearch = () => (
    <View>
      {suggestion.categories.map((data, index) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Map', { keyword: data.title });
          }}
        >
          <Text style={{ fontFamily: 'open-sans' }} key={index}>
            {data.title}
          </Text>
        </TouchableOpacity>
      ))}
      {suggestion.terms.map((data, index) => (
        <TouchableOpacity>
          <Text style={{ fontFamily: 'open-sans' }} key={index}>
            {data.text}
          </Text>
        </TouchableOpacity>
      ))}
      {suggestion.businesses.map((data, index) => (
        <TouchableOpacity>
          <Text style={{ fontFamily: 'open-sans' }} key={index}>
            {data.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
  useEffect(() => {
    getSuggestion();
  }, [searchTerm, getAutoComplete]);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Ionicons
          name="md-arrow-round-back"
          size={35}
          color="black"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <TouchableOpacity style={styles.searchContainer}>
          <TextInput
            style={styles.search}
            placeholder="Search..."
            onChangeText={handleSearchTermChange}
          />
          <TouchableOpacity style={styles.closeIcon}>
            <Ionicons name="ios-close" color="gray" size={20} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: 40 }}>
        <Loader />
        {suggestion && <ListResultSearch />}
        {suggestion &&
          suggestion.categories.length == 0 &&
          suggestion.businesses.length == 0 &&
          suggestion.terms.length == 0 && <Text> Not Result..</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    borderColor: 'red',
    borderWidth: 2,
    width: screenWidth - 35,
  },
  search: {
    // color: 'gray',
    flex: 1,
    marginLeft: 10,
    fontFamily: 'open-sans',
  },
  closeIcon: {
    paddingHorizontal: 10,
  },
});

export default SearchScreen;
