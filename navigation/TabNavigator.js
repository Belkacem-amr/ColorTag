import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import MainScreen from "../screens/MainScreen";
import AboutScreen from "../screens/AboutScreen";
import FavoritsScreen from "../screens/FavoritsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ColorDetails from '../screens/ColorDetails';
import React from 'react';
import {Image} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';


const HomeNavigator = createStackNavigator(
    {
        Home: {screen: MainScreen},
        Details: {screen: ColorDetails},
    },

    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#423F3F'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    });

const TabNavigator = createMaterialBottomTabNavigator({
        MainScreen: {
            screen: HomeNavigator,
            navigationOptions:{
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor}) => (
                    <Image source={require('../assets/home.png')} style={{width:28 , height: 28}} />
                    //<Icon color={"#FFFFFF"} size={20} name={'image'} />
                ),
                barStyle: { backgroundColor: '#2B2626' }
            }
        },

        FavoritsScreen: {
            screen: FavoritsScreen,
            navigationOptions:{
                tabBarLabel: 'Favorits',
                tabBarIcon: ({tintColor}) => (
                    //<Icon2 color={"#FFFFFF"} size={20} name={'heart'} />
                    <Image source={require('../assets/favorits.png')} style={{width:28 , height: 28}} />
                ),
                barStyle: { backgroundColor: '#2B2626' }
            }
        },


        SettingsScreen: {
            screen: SettingsScreen,
            navigationOptions:{
                tabBarLabel: 'Settings',
                tabBarIcon: ({tintColor}) => (
                    //<Icon3 color={"#FFFFFF"} size={20} name={'pencil'} />
                    <Image source={require('../assets/edit.png')} style={{width:28 , height: 28}} />
                ),
                barStyle: { backgroundColor: '#2B2626' }
            }
        },


        AboutScreen: {
            screen: AboutScreen,
            navigationOptions:{
                tabBarLabel: 'About',
                tabBarIcon: ({tintColor}) => (
                    //<Icon4 color={"#FFFFFF"} size={20} name={'info-circle'} />
                    <Image source={require('../assets/about.png')} style={{width:28 , height: 28}} />
                ),
                barStyle: { backgroundColor: '#2B2626' },
            }
        }
    },

    {
        initialRouteName: 'MainScreen'
    }
);

export default createAppContainer(TabNavigator);