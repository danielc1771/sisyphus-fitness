import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootState } from '../store';
import { displayModal } from '../store/services/modal';

export default function ModalScreen() {
  const visible = useSelector((state: RootState) => state.modal.showModal);
  const dispatch = useDispatch();

  const translation = new Animated.Value(0);

  const animationStyle = {
    transform: [
      {
        translateY: translation.interpolate({
          inputRange: [0, 1],
          outputRange: [300, 0],
        }),
      },
    ],
  };

  // useEffect(() => {
  //   dispatch(displayModal(visible));
  // }, [visible]);

  useEffect(() => {
    visible &&
      Animated.timing(translation, {
        useNativeDriver: true,
        toValue: 1,
        duration: 300,
      }).start();
  }, [visible]);

  const handleClose = (event: any) => {
    event?.target?.id === 'overlay' && dispatch(displayModal(false));
  };

  return visible ? (
    <TouchableWithoutFeedback onPress={handleClose}>
      <View style={styles.container} nativeID="overlay">
        <Animated.View style={[styles.content, animationStyle]}>
          <Text style={styles.title}>Modal</Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <EditScreenInfo path="/screens/ModalScreen.tsx" />
          <Button
            onPress={() => dispatch(displayModal(false))}
            title="Dismiss"
          />

          {/* Use a light status bar on iOS to account for the black space above the modal */}
          <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: '1em',
    paddingBottom: '1em',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
