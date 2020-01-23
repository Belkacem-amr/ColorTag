import React from 'react';
import { View, Text, StyleSheet, Head, FlatList } from 'react-native';
import style from '../assets/style';
import {Container } from 'native-base';
import { connect } from 'react-redux'
import ImgFavoris from './ImgFavoris';


/*const mapStateToProps = (state) => {
    return {
        Images: state.Images
      }
  }*/
class FavoritsScreen extends React.Component {


    /*constructor (props) {
        super (props)
        this.state = {
            favoris : []
        }
    }*/


    
    

    render() {
        return (
                <Container style={style.container}>
                    <View style = {style.view}>
                        <Text style = {style.title}>Liste des favoris :</Text>
                        <FlatList 
                                /*data = {this.state.favoris}
                                keyExtractor = { (item) => item.uri.toString() } 
                                 //renderItem = { ({item}) => <FilmItem film ={item} /> }
                                renderItem = { ({item}) => <ImgFavoris img ={item}  /> }*/
            />
                        <Text/>
                    </View>
                </Container>
        )
    }
}

export default FavoritsScreen//connect(mapStateToProps)(FavoritsScreen)
