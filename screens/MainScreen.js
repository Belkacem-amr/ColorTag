import React from 'react';
import { Text, View, Button, Image  } from 'react-native';
import { getColor } from '../services/ColorApi';
import style from '../assets/style';
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        Settings: state.Settings
      }
  }


 class screenHome extends React.Component {



   _displayColorForrImage  = () => {
        this.props.navigation.navigate("Details", {img : "https://sightengine.com/assets/img/examples/example-prop-c1.jpg" })
    }

    /////////////////////////////// ajout favoris ////////////////////////////////
    /*_toggleImages(uri) {
 
      const action = { type: "TOGGLE_IMAGES", value: uri }
      this.props.dispatch(action)
    }*/
  
    /*ajouter_favoris(){
      this._toggleImages('https://sightengine.com/assets/img/examples/example-prop-c1.jpg')
      const indexI = this.props.Images.findIndex(item => item === uri)
      if(indexI)
  }*/
  //////////////////////////////////////////////////////////////////////////////

  state = {
    avatarSource: null
  }

  selectImage = async () => {
    ImagePicker.showImagePicker({noData:true, mediaType:'photo'}, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          avatarSource: response.uri,
        });
      }
    });
  }

  render () {

    console.log("main home : ")
    console.log(this.props)
    return (

      <View style={style.container}>
        <Button color='#000000' title='Galerie' onPress={() => this.selectImage()}/>
        <Image /*source={{ uri: this.state.avatarSource }} style={style.image}*//>
        <Image style={style.image} source={{ uri:  `https://sightengine.com/assets/img/examples/example-prop-c1.jpg` }} />
        <Button color='#000000' title='Lancer' onPress={() => this._displayColorForrImage()}/>

      </View>
    );
  }
}

export default connect(mapStateToProps)(screenHome);