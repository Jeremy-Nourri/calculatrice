import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
export default function KeyComponent(props) {

    const { title, handlePress } = props;

    const isCirclePressable = !isNaN(title) || title === '.' || title === 'DEL';

  return (
    <Pressable
        style={[
            {
                backgroundColor: isCirclePressable ? 'white' : 'gray',
                borderRadius: isCirclePressable ? 80 : 20,
            },
            styles.wrapperCustom,
        ]}
        onPress={() => handlePress(title)}
    >
        <Text style={[{color: isCirclePressable ? 'black' : 'white'}, styles.text]}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
    wrapperCustom: {
        justifyContent: 'center',
        width: 90,
        height: 90,
        margin: 5,
        padding: 6,
    },
    text: {
        fontSize: 26,
        textAlign: 'center',
    },
});
