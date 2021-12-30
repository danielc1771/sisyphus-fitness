import { useEffect, useRef } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import StartModal from '../components/modal/start-modal';

import { View } from '../components/Themed';
import { RootState } from '../store';
import { displayModal, ModalType } from '../store/services/modal';

export default function ModalScreen() {
  const visible = useSelector((state: RootState) => state.modal.showModal);
  const modalType = useSelector((state: RootState) => state.modal.modalType);
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

  useEffect(() => {
    visible &&
      Animated.timing(translation, {
        useNativeDriver: true,
        toValue: 1,
        duration: 300,
      }).start();
  }, [visible]);

  const handleClose = (event: any) => {
    event?.target?.id === 'overlay' &&
      dispatch(displayModal({ showModal: false }));
  };

  const getModalContent = (modalType?: ModalType) => {
    switch (modalType) {
      case ModalType.Start:
        return <StartModal />;
      default:
        return null;
    }
  };

  return visible ? (
    <TouchableWithoutFeedback onPress={handleClose}>
      <View style={styles.container} nativeID="overlay">
        <Animated.View style={[styles.content, animationStyle]}>
          {getModalContent(modalType)}
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
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
