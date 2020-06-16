import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { getAllBookmarks } from '../../api/goFoodApi';
import Colors from '../../constants/Colors';
import { useSelector } from 'react-redux';
import BookmarkItem from '../../components/BookmarkItem';

const BookmarkScreen = ({ navigation }) => {
  const { bookmarkList } = useSelector(state => state.service);
  const [bookmarks, setBookmarks] = useState(null);

  const bookmarkSeparatorComponent = () => {
    return <View style={{ height: 15 }} />;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllBookmarks();
        setBookmarks(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [getAllBookmarks, bookmarkList]);

  return (
    <>
      {bookmarks === null ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>
            You have bookmarked {bookmarks.length} place(s)
          </Text>
          <View style={styles.listContainer}>
            {bookmarks.length > 0 ? (
              <FlatList
                data={bookmarks}
                keyExtractor={item => item.restaurantId}
                renderItem={({ item }) => (
                  <BookmarkItem item={item} navigation={navigation} />
                )}
                ItemSeparatorComponent={bookmarkSeparatorComponent}
                showsVerticalScrollIndicator={false}
              /> 
            ) : (
              <View style={styles.empty}>
                <Text style={styles.emptyString}>
                  Try some restaurants and bookmark your favorite one !
                </Text>
              </View>
            )}
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  title: {
    color: Colors.default,
    marginVertical: 15,
    marginHorizontal: 20,
    textTransform: 'uppercase',
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
  listContainer: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 40,
  },
  empty: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 15,
  },
  emptyString: {
    fontFamily: 'open-sans',
    fontSize: 17,
    textAlign: 'center',
  },
});

export default BookmarkScreen;
