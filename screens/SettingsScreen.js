import React from 'react';
import { Button, View, Text} from 'react-native';
import style from '../assets/style';
import { CheckBox, Container, Card, CardItem } from 'native-base';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        Settings: state.Settings
      }
}

class SettingsScreen extends React.Component{
    state={
        palette_accent: false,
        palette_other: false,
        palette : 'dominant'
        
    }

   
    
  
     _toggleSettings(typePalette) {
 
       const action = { type: "TOGGLE_SETTINGS", value: typePalette }
       this.props.dispatch(action)
     }
   


    palette_accentPressed(){
        //alert('two');
        this.setState({palette_accent:true,palette_other:false,palette:'accent'});
        //this._toggleSettings('accent')

    }

    palette_otherPressed(){
        //alert('three');
        this.setState({palette_accent:false,palette_other:true,palette:'other'});
        //this._toggleSettings('other')

    }

    submit(){
        this._toggleSettings(this.state.palette)
        this.props.navigation.navigate("Home");
        
    }

    componentDidUpdate() {
        console.log("componentDidUpdate de redus : ")
        console.log(this.props)

        console.log(this.props.Settings)
      }

    render() {
        return (
            <>
             <Container style={style.container}>
                        
                            <Card style={style.card}>

                                <CardItem header style={style.card}>
                                    <Text style={style.title}>Veuillez choisir une palette :</Text>
                                </CardItem>

                                <CardItem body style={style.card}>
                                    <CheckBox 
                                        checked={this.state.palette_accent} 
                                        onPress={()=>this.palette_accentPressed()}
                                        style={{marginRight: 20}}
                                    />
                                    <Text style={style.text}>Palette Accent</Text>
                                </CardItem>

                                <CardItem body style={style.card}>
                                    <CheckBox
                                        checked={this.state.palette_other} 
                                        onPress={()=>this.palette_otherPressed()}
                                        style={{marginRight: 20}}  
                                    />
                                    <Text style={style.text}>Palette Other</Text>
                                </CardItem>

                                <CardItem footer style={style.card}>
                                    <Text style={style.text}>Vous avez choisi la palette {this.state.palette}</Text>
                                </CardItem>

                                <Button color='#000000' onPress={()=>this.submit()} title="Appliquer"/>

                            </Card>
                        
                </Container>

                
            </>
        )
    }
};

export default connect(mapStateToProps) (SettingsScreen)

/*
<Content style={{paddingHorizontal: 10, paddingVertical: 10, height:40, width:50}}>
    <CheckBox checked={false} style={{paddingHorizontal: 10, paddingVertical: 10, marginTop: 10}}/> 
    <CheckBox checked={false} style={{paddingHorizontal: 10, paddingVertical: 10, marginTop: 10}}/>
    <CheckBox checked={false} style={{paddingHorizontal: 10, paddingVertical: 10, marginTop: 10}}/>
</Content>*/