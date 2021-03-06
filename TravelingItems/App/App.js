import React, {Component} from 'react';
import {Platform, TouchableOpacity,Image,StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createDrawerNavigator} from 'react-navigation';
import Login from './Screens/Authentication/login'
import Advertise from "./Screens/Advertisement/advertise";
import Advertisement from "./Screens/Advertisement/advertisement";
import AdvertisementDetail from "./Screens/Advertisement/advertisementDetail";

import LogOut from "./Screens/Authentication/logOut";
import Profile from "./Screens/Profile/profile";
import MyOrders from "./Screens/Profile/myOrders"
import MyAdvertises from "./Screens/Profile/myAdvertises"
import MyAdvertisesDetail from "./Screens/Profile/myAdvertisesDetail"

import UserInfo from "./Screens/Profile/myAdvertises"




const Drawer = createDrawerNavigator({
    Advertisements: {//ilanlar
        screen:Advertisement
    },
    Advertise:{//ilanver
        screen: Advertise
    },
    Profile:{
        screen:Profile
    },
    LogOut: {
        screen:LogOut
    },


},{
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
})


const MyApp = createStackNavigator({

    Login:{
        screen: Login,
        navigationOptions: () => ({
            headerStyle: {backgroundColor: '"white'},
            title: `Siparisler`,
            headerLeft: null

        }),
    },
    Main:{
        screen: Drawer,
    },
    MyOrders:{
        screen:MyOrders,
        navigationOptions: () => ({
            title: `Siparislerim`,
            headerLeft: ''
        }),
    },
    MyAdvertisements:{
        screen:MyAdvertises,
        navigationOptions: () => ({
            title: `Ilanlarim`,
            headerLeft: ''
        }),
    },
    MyAdvertisementDetail:{
        screen:MyAdvertisesDetail,
        navigationOptions: () => ({
            title: `Spesifik Ilan Detayi`,
            headerLeft: ''
        }),
    },
    AdvertisementDetail:{
        screen:AdvertisementDetail,
        navigationOptions: (navigation) => ({
            title: 'İlan Detay Sayfasi',
            headerLeft: ''
        }),
    },
    UserInfo:{
        screen:UserInfo,
        navigationOptions: (navigation) => ({
            headerStyle: {backgroundColor: 'green'},
            title: 'Ilan Detay Sayfasi',
            headerLeft: ''
        }),
    },
    // ForgotPassword:{
    //   screen: "Will Create"
    // },
    // PasswordRecovery:{
    //   screen: "Will Create"
    // }

},{
    headerMode: 'screen',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: 'white'},
        title: 'Logged In to your app!',
        headerLeft: <TouchableOpacity style={{flex:1,backgroundColor:'red'}} onPress={() => navigation.toggleDrawer()}>
            <Image style={{width:40,height:40,padding:10}} source={require('./Images/download.png')}/>
        </TouchableOpacity>

    })
});

export default class App extends React.Component {

    render() {
        return (

            <MyApp/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});