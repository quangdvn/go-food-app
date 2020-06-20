import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Colors from '../../constants/Colors';
import { getAllNotifications } from '../../api/goFoodApi';
import { useSelector } from 'react-redux';
import NotificationItem from '../../components/NotificationItem';

const NotificationScreen = () => {
  const { reactedEventList } = useSelector(state => state.service);
  const [notifications, setNotifications] = useState(null);
  const [notiCount, setNotiCount] = useState(null);

  const notiSeparatorComponent = () => {
    return <View style={{ height: 15 }} />;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, count } = await getAllNotifications();
        setNotifications(data);
        setNotiCount(count);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [getAllNotifications, reactedEventList]);

  return (
    <>
      {notifications === null ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      ) : (
        <View style={styles.container}>
          {notiCount > 0 ? (
            <>
              <Text style={styles.title}>New</Text>
              <View style={{ ...styles.listContainer }}>
                <NotificationItem item={notifications.latestNoti} />
              </View>
              {notifications.olderNotis ? (
                <>
                  <Text style={styles.title}>Earlier</Text>
                  <View style={{ ...styles.listContainer, flex: 1 }}>
                    <FlatList
                      data={notifications.olderNotis}
                      keyExtractor={item => item._id}
                      renderItem={({ item }) => (
                        <NotificationItem item={item} />
                      )}
                      ItemSeparatorComponent={notiSeparatorComponent}
                      showsVerticalScrollIndicator={false}
                    />
                  </View>
                </>
              ) : null}
            </>
          ) : (
            <>
              <Text style={styles.title}>It's bored here !</Text>
              <View style={{ ...styles.listContainer, flex: 1 }}>
                <View style={styles.empty}>
                  <Text style={styles.emptyString}>
                    Try out some features in Go Food and see this place crowded
                    later
                  </Text>
                </View>
              </View>
            </>
          )}
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
    backgroundColor: 'white',
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
    marginVertical: 10,
    marginHorizontal: 30,
    minHeight: 145,
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

export default NotificationScreen;
