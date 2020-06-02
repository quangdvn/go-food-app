import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import StarImages from '../utils/renderRating';

const CommentDetail = ({ data }) => {
  return (
    <View style={styles.commentBox}>
      <View style={{ flexDirection: 'row' }}>
        
        {data.user.image_url === null ? (
          <Image
            source={require('../../assets/images/test.png')}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
        ) : (
          <Image
            source={{ uri: `${data.user.image_url}` }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
        )}

        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
          <Text style={styles.customerName}>{data.user.name}</Text>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Image
              source={StarImages[data.rating]}
              style={{ height: 20, width: 120 }}
              resizeMode="stretch"
            />
            <Text style={styles.commentDate}>{data.time_created}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.commentDetail}>{data.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commentBox: {
    marginLeft: 20,
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: '#e1e5e9',
    marginRight: 15,
  },
  commentDate: {
    color: '#8996a6',
    fontSize: 13,
    fontFamily: 'open-sans',
    marginLeft: 10,
  },
  commentDetail: {
    color: '#44566c',
    fontFamily: 'open-sans',
    fontSize: 15,
    marginVertical: 15,
  },
  customerName: {
    color: '#44566c',
    fontFamily: 'open-sans-bold',
    fontSize: 15,
  },
});

export default CommentDetail;
