import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import StyledButton from '../StyledButton'
import styles from './style'
const Index = (props) => {
  const {name, tagline, image, taglineCTA} = props.car
    return (
        <View style={styles.cardContainer}>
             <ImageBackground source={image}
      style={styles.image}
      />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>{tagline}
          {'  '}
          <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
          </Text>
          
        </View>
        <View style={styles.buutonContainer}>
        <StyledButton type="primary" content={"Custome Order"} onPress={()=>{console.log("first")}} ></StyledButton>
        <StyledButton type="secondary" content={"Existing Inventory"} onPress={()=>{console.log("second")}}  ></StyledButton>

        </View>
    </View>
    )
}

export default Index
