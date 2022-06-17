import React, { useEffect }  from 'react'
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Image, StyleSheet,TextInput  } from 'react-native';
import { getList } from '../services/ApiService';
import axios from 'react-native-axios';

const Home = (props) => {
    const [list, setList] = React.useState([]);
    
    const getPost = () =>{
        axios.get(`http://192.168.29.74:5000/api/users`)
        .then(async (res) => {
            if(res){
                setList(res.data.data);
            }
            console.log(list);
        }).catch((error) => {
            console.log(error)
        });
    }
    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16599855)
          .toString(16)
          .padStart(6, '0');
        return `#${randomColor}`;
    };

    const addUser = () =>{
        const obj = {
            name : 'Sam Richard',
            email : 'Sam@ussww.com',
            mobile : '87654321322'
        }
        axios.post(`http://192.168.29.74:5000/api/users/add`, obj)
        .then(async (res) => {
            if(res){
                // setList(res.data.data);
                getPost();
            }
            console.log(res);
        }).catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => { 
        console.log('App Ready');
        getPost();
    }, []) 


    const colors = ['#c01e6b', '#0d7179' , '#3d5f90' ,'#8e69ae', '#4e2c16', '#f27079'];
    return (
        <ScrollView style={{ flex: 1, backgroundColor : '#fff', height : '100%' }}>
            <ImageBackground source={require('../../assets/login_bg.jpg')} style={{ height: Dimensions.get('window').height / 6 }}>
                <View style={styles.headerView}>
                   <Text style={{color: '#fff', fontSize : 20}}>Hi {' '}
                       <Text style={{fontWeight : '500'}}>William Smith</Text>
                   </Text>
                </View>
            </ImageBackground>
            <View style={ { flex : 1 } }>
                <View style={styles.bottomView}>
                    <View style={{ padding : 30, paddingHorizontal : 10, paddingBottom : 10 }}>
                        <Text style={{ fontSize : 24, fontWeight : '500', color : '#4632A1'}}>Users List</Text>
                        {list && list.map((data)=>(
                            <TouchableOpacity style={ styles.cardView }>
                                <View style={ styles.leftCont }>
                                    <View style={[styles.userIcon, { backgroundColor : generateColor()}]}>
                                        <Text style={{ color: '#fff' }}>{ data.name.charAt(0) }</Text>
                                    </View>
                                    <Text>{data.mobile}</Text>
                                </View>
                                <View>
                                    <Text>More</Text>
                                </View>
                            </TouchableOpacity>
                        ))}

                    </View>
                </View>

                <TouchableOpacity style={styles.floatButton} onPress={ () => addUser() }>
                    <Image style={ styles.floatButtonIcon } source={{ uri: 'https://cdn-icons.flaticon.com/png/512/2997/premium/2997933.png?token=exp=1652002873~hmac=3ac6d0f3f17a9fe752637c92562d2978' }} ></Image>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({ 
    headerView : {
      flex : 1,
      justifyContent : 'center',
      paddingHorizontal : 20,
      paddingBottom : 20
    }, 
    bottomView : {
      flex : 4,
      height : '100%',
      backgroundColor : '#fff',
      bottom: 33,
      borderTopLeftRadius : 40,
      borderTopRightRadius : 40,
      paddingHorizontal : 15,
    },
    cardView : {
        backgroundColor : '#efefef',
        borderColor : '#eee',
        borderRadius : 8,
        padding : 16,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginTop : 20,
        elevation : 10,
        shadowOpacity : 1,
        shadowOpacity : 0.2
    },
    leftCont : {
        flexDirection : 'row',
        alignItems : 'center',
        flexWrap : 'wrap'
    },
    userIcon : {
        width : 28,
        height : 28,
        backgroundColor : '#f00',
        color: '#fff',
        marginRight : 10,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 100
    },
    floatButton:{
        backgroundColor : 'blue',
        width : 50,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 100,
        // position : 'absolute',
        // bottom : -10,
        left : 20,
        flex : 1
    },
    floatButtonIcon:{
        width : 20,
        height : 20,
    }
});

export default Home