import React from 'react';
import { Text, View } from '../Themed';
import { StyleSheet, Image } from 'react-native';
import { UserHeaderProps } from './types';

export default function UserHeaderView({ text }: UserHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {text.userFirstName}!</Text>
      <Image
        style={styles.profileImage}
        source={{
          uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/227521647_4428928193818531_9995968000195159_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QsmALoUYpFkAX-XlxOL&_nc_ht=scontent-sea1-1.xx&oh=00_AT-0vTbrzpktazU5AluwCVNnUCl9BSsYw5RE5xMEXKQZtg&oe=61D10B1F',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileImage: {
    height: 45,
    width: 45,
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 3,
  },
});
