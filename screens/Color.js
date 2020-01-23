import React from 'react'
import {StyleSheet, View, Text, Image,TouchableOpacity} from 'react-native'


class Color extends React.Component {

    render() {

        /// pour récupérer le résultat -prop- interne (props = film)  <FilmItem film ={item} />
        const { couleur } = this.props
        console.log(couleur.hex)
        return (


                <View style = {{ backgroundColor : couleur.hex}}>
                   <Text> {couleur.hex} </Text>
                </View>

        )
    }
}

export default Color