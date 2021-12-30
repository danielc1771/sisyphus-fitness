import { Pressable, StyleSheet } from 'react-native';

import React from 'react';
import { Text, View } from '../../Themed';
import { FontAwesome } from '@expo/vector-icons';
import { StartModalProps } from './types';

export default function StartModalView({ actions }: StartModalProps) {
  return (
    <>
      <Text style={styles.header}>Start</Text>
      <View style={styles.container}>
        {actions.map((action) => (
          <Pressable
            key={action.title}
            style={({ pressed }) => getPressableStyles(pressed)}
            onPress={() => action.action()}
          >
            <Text style={styles.actionTitle}>{action.title}</Text>
            <FontAwesome
              size={30}
              color={'black'}
              name={action.icon}
              style={styles.icon}
            />
          </Pressable>
        ))}
      </View>
    </>
  );
}

const getPressableStyles = (pressed: boolean) => {
  const pressedStyles = {
    backgroundColor: pressed ? 'rgba(0, 0, 0, 0.1)' : 'white',
  };
  return [pressedStyles, styles.action];
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  actionTitle: {
    fontSize: 18,
  },
  action: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    padding: 7,
    borderRadius: 8,
  },
  icon: {
    padding: 7,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'grey',
  },
});
