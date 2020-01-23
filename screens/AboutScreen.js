import React , {Component} from 'react';
import {View, Text,  Button} from 'react-native';
import style from '../assets/style';
import {Container } from 'native-base';

export default class AboutScreen extends Component{

    MainScreen () {
        this.props.navigation.navigate('MainScreen')
    }

    render(){
        return (
            <Container style={style.container}>
                <View style={style.view}>
                    <Text style={style.title}> A propos de l'application</Text>
                    <Text/>  
                    <Text style={style.text}> 
                        Cette application a pour but de décrypter les couleurs présentes dans une images donné.
                        Pour cela vous avez la possibilité de choisir la palette de couleurs dans l'onglet "Settings".
                    </Text>
                    <Text/>
                    <Button onPress={()=> this.MainScreen()} color='#000000' title="Décrypter une image"/>

                </View>
            </Container>
        )
    }
    
}