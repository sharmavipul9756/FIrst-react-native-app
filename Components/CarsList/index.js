import React from 'react'
import styles from './styles'
import cars from './cars'
import CarItem from '../CarItem/Index'
import { View, FlatList, Dimensions} from 'react-native'
const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList
            data={cars}
            renderItem={({item})=><CarItem car={item}/>}
            keyExtractor={(item, index) => index.toString()}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default CarsList
