import React from 'react'
import {ScrollView,StyleSheet, View, Text, Image, ActivityIndicator, FlatList} from 'react-native';
import style from '../assets/style';
import { connect } from 'react-redux'


class ImgFavoris extends React.Component {

    constructor (props) {
        super (props)
        this.state = {
            
        }
    }
  
    _displayLoading () {
        if (this.state.isLoading){
            return (
                <View style = {styles.loading_container}>
                    <ActivityIndicator size = 'large' />
                </View>
            )
        }
    }
  
  
    //    après l'affichage appelle cette fonction cycle de vie
    componentDidMount() {
    
      }
  
      /// quand il ya update dans props ou state
      componentDidUpdate() {
    }
      
    render() {
  
      console.log("Component colorItem render ")
      console.log(this.props)
      
          
            return(
            
                <View style = {styles.main_contenair}>
                    <Image style={style.image} source={{ uri:  '' }} />
                        {this._displayLoading()}
                </View>
            )
        }
    }

  
  
  const styles = StyleSheet.create ({
  
      main_contenair : {
          flex : 1,
      },
  
      scrollview_contenaire : {
          flex : 1
      },
  
      loading_container: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center'
        },
  
  
  })
  
  
  export default connect(ImgFavoris)
  
  