import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAutoComplete } from '../../api/goFoodApi';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const [suggestion, setSuggestion] = useState(null);

  const [isSearching, setIsSearching] = useState(false);

  const typingTimeoutRef = useRef(null);

  const inputValue = useRef(null);

  const handleSearchTermChange = value => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setSearchTerm(value);
    }, 500);
  };

  const getSuggestion = async () => {
    try {
      setIsSearching(true);
      const { data } = await getAutoComplete(searchTerm);
      setSuggestion(data);
      setIsSearching(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const ListResultSearch = () => (
    <View style={{ marginTop: 10, marginLeft: 15 }}>
      {suggestion.categories.map((data, index) => (
        <View style={styles.resultContainer} key={index}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchResult', { keyword: data.title });
            }}
            style={{ marginVertical: 3 }}
          >
            <Text style={{ fontFamily: 'open-sans', fontSize: 16 }}>
              {data.title}
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      {suggestion.terms.map((data, index) => (
        <View style={styles.resultContainer} key={index}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchResult', { keyword: data.text });
            }}
            style={{ marginVertical: 3 }}
          >
            <Text style={{ fontFamily: 'open-sans', fontSize: 16 }}>
              {data.text}
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      {suggestion.businesses.map((data, index) => (
        <View style={styles.resultContainer} key={index}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchResult', { keyword: data.name });
            }}
            style={{ marginVertical: 3 }}
          >
            <Text style={{ fontFamily: 'open-sans', fontSize: 16 }}>
              {data.name}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );

  const RenderSearch = () => {
    if (
      suggestion &&
      suggestion.categories.length === 0 &&
      suggestion.businesses.length === 0 &&
      suggestion.terms.length === 0 &&
      isSearching === false
    ) {
      return (
        <Text
          style={{ fontFamily: 'open-sans', fontSize: 16, marginVertical: 10 }}
        >
          {' '}
          No Result Found..
        </Text>
      );
    } else if (suggestion && isSearching === false) {
      return <ListResultSearch />;
    } else if (searchTerm !== '' && isSearching === true) {
      return (
        <View style={{ marginTop: 20, marginHorizontal: 60 }}>
          <Image
            source={require('../../../assets/images/loading.gif')}
            style={styles.loading}
          />
        </View>
      );
    }
  };

  useEffect(() => {
    getSuggestion();
  }, [searchTerm, getAutoComplete]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons
          name="md-arrow-round-back"
          size={30}
          color="black"
          style={{
            left: 0,
            marginLeft: (10 * screenHeight) / 300,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        />

        <View style={styles.searchContainer}>
          <TextInput
            ref={inputValue}
            autoFocus={true}
            style={styles.search}
            placeholder="Search..."
            onChangeText={handleSearchTermChange}
          />
          <TouchableOpacity
            style={styles.closeIPicon}
            onPress={() => {
              console.log(inputValue.current.value);
              setSearchTerm('');
            }}
          >
            <Ionicons
              name="ios-close"
              color="gray"
              size={25}
              style={{ paddingRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginLeft: 40 }}>{RenderSearch()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (10 * screenWidth) / 75,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    borderColor: '#ffffff',
    borderWidth: 1,
    marginHorizontal: 20,
    width: screenWidth - (50 * screenWidth) / 300,
    backgroundColor: '#ffffff',
  },
  loading: {
    width: 200,
    height: 50,
    resizeMode: 'cover',
  },
  resultContainer: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingBottom: 5,
    paddingLeft: 5,
    marginVertical: 5,
    marginRight: 50,
    marginLeft: 10,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    fontFamily: 'open-sans',
  },
  closeIcon: {
    paddingHorizontal: 10,
  },
});

export default SearchScreen;
