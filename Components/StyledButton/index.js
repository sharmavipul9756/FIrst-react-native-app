import React from 'react'
import {View, Text, Pressable} from 'react-native'
import styles from './style'
const index = (props) => {
    const type = props.type;
    const content = props.content;
    const backgroundColor = type == 'primary' ? '#171a20cc' : '#ffffffa6';
    const textColor = type == 'primary' ? '#ffffff' : '#171a20';

    return (
        <View style={styles.container}>
            <Pressable
            style={[styles.button, {backgroundColor : backgroundColor}]}
            onPress={props.onPress}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default index
