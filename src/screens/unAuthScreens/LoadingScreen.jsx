import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { localSignIn } from '../../store/actions';
import Colors from '../../constants/Colors';

const LoadingScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(localSignIn());
  }, [localSignIn]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
