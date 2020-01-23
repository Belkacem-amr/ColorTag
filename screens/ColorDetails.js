/*import React from 'react'
import {View, Text} from 'react-native'

export default class ColorDetails extends React.Component {
  render(){
    return (
        <View>
            <Text> Ici sera affiché le résultat !!! </Text>
        </View>
    );
  }
}
*/

import React from 'react'
import {ScrollView,StyleSheet, View, Text, Image, ActivityIndicator, FlatList} from 'react-native'
import { getColor } from '../services/ColorApi';
import Color from './Color';
import { connect } from 'react-redux'



const mapStateToProps = (state) => {
  return {
      Settings: state.Settings
    }
}


class ColorDetails extends React.Component {

  constructor (props) {
      super (props)
      this.state = {
          img : undefined,
          isLoading : true,
          palette :  '',
          colorsDominant : undefined,
          colorsAccent : undefined,
          colorsOther : undefined,
          colors : []
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


  componentDidMount() {

      this.state.img = this.props.navigation.state.params.img
      console.log("palette    "+this.state.palette)

      getColor ( this.state.img ).then  (data => {
          
        this.setState({
            colorsAccent : data.colors.accent,
            colorsOther : data.colors.other,
            isLoading : false
        })
      })
    }

    /// quand il ya update dans props ou state
    componentDidUpdate() {
  }
    
  render() {

    console.log("Component colorItem render ")
    console.log(this.props)
    
    this.state.palette = this.props.Settings
    console.log(this.props)

    if( this.state.colorsAccent != undefined) {

        {this._displayLoading ()}

        if  (this.state.palette === 'other')  
             ( this.state.colors = this.state.colorsOther) 
              else if (this.state.palette === 'accent')  
                   ( this.state.colors = this.state.colorsAccent) 
        
        
        return (
          <View style = {styles.main_contenair}>
            {this._displayLoading()}
            <FlatList 
                data = {this.state.colors}
                keyExtractor = { (item) => item.hex.toString() } 
                renderItem = { ({item}) => <Color couleur ={item}  /> }
            />
          </View>
        )
      }
      else {
          return(
          
              <View style = {styles.main_contenair}>
                      {this._displayLoading()}
              </View>
          )
      }
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


export default connect(mapStateToProps)(ColorDetails)

