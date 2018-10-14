import React from 'react';
import {Platform,TouchableOpacity, Dimensions, Image, StyleSheet, Text, View, ListView} from 'react-native';
import * as MyServices from "../../Services/services"
import {LoadingIndicator} from '../../Components/loadingIndicator'
import {LoadingWrapper} from "../../Components/loadingWrapper";




export default class MyOrders extends React.Component {

    static navigationOptions = ({navigation, screenProps}) => {
        const params = navigation.state.params || {};   // You can get the params here as navigation.state.params.paramsKey

        console.log("duzun duzugun ", params.token);
    }


    constructor(props){
        super(props);
        this.state={
            offers:'',
        }
    }

    renderRow(row){

        console.log("MYROW",row);


        return(

            <TouchableOpacity onPress={()=>{}}
                              style={[styles.row,{backgorundColor:row.status
                                      ? row.status == 1
                                          ? "red"
                                          : "blue"
                                      :"yellow" }]} >
                <View  style={{flex:1,borderWidth:0.5,backgroundColor:'white',bordercolor:'gray',height:80, borderRadius:6,justifyContent:'center',margin:5}}>
                    <Text style={{fontSize:20,padding:5}}>
                        advertise title: {row.status}
                    </Text>
                    <Text style={{fontSize:20,padding:5}}>
                        Budget {row.advertiseID.budget}
                    </Text>

                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount(){
        this.setState({loading:true});
        let token = this.props.navigation.state.params.token;
        MyServices.Services.getMyOffers(token).then(
            offers=>{
                this.setState({offers,loading:false,error:false,});
                alert("basardin")
            },
            error=>{
                this.setState({loading:false,error:true});
                console.log("AUw");
                alert(error)

            }
        )

    }

    render() {

        let {loading,offers,error} = this.state;



        if(!loading && !error && !offers.length){
            console.log(!loading);
            console.log(!error);
            console.log(!offers);

            error = 'Uygun kayit Bulunamadı!'
        }

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let data = ds.cloneWithRows(offers);

        return(
            <LoadingWrapper loading={loading} error={error} >
                <View style={styles.root}>
                    <View style={{flex:3,backgroundColor:'black'}}>
                        <ListView dataSource={data}
                                  enableEmptySections={true}
                                               renderRow={this.renderRow.bind(this)}
                                               enableEmptySections={true}
                                               style={styles.list} />

                    </View>
                </View>
            </LoadingWrapper>
        );
    }

}




const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'white'
    },
    list:{
        backgroundColor: 'green',
        paddingVertical: 8,
        paddingHorizontal: 14
    },
    row:{

    }
});