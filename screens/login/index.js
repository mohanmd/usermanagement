import React, { useEffect }  from 'react'
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Image, StyleSheet,TextInput  } from 'react-native'
import { Formik, loginValidationSchema } from 'formik';
import * as yup from 'yup'


const Login = (props) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const { navigation } = props;
  console.log(navigation);
  const goSignup = () =>{
    navigation.navigate('SignUp')
  }

  const loginUser = {
    email : 'test@gmail.com',
    password : 'test@123'
  }
  const loginnow = (values) => {
    console.log(values);
    if(loginUser.email == values.email && loginUser.password == values.password){
      alert('You have successfully logged in');
      navigation.navigate('Home');
    }else {
      console.log('Username or Password was wrong. Please check');
    }
  }
  return (
      <ScrollView style={{ flex: 1, backgroundColor : '#fff' }}>
        <ImageBackground source={require('../../assets/login_bg.jpg')} style={{ height: Dimensions.get('window').height / 2 }}>
          <View style={styles.headerView}>
              <Image source={require('../../assets/logo_white.png')}  style={styles.headerLogo}/>
          </View>
        </ImageBackground>

        <View style={styles.bottomView}>
            <View style={{ padding : 30, paddingHorizontal : 20, paddingBottom : 10 }}>
              <Text style={{ fontSize : 30, color : '#4632A1'}}>Welcome</Text>
              <Text style={{ fontWeight: '700', color : '#000' }}>Don't have an account {' '}
                <TouchableOpacity>
                  <Text style={{ color : 'red', fontSize : 12, fontStyle : 'italic' }} onPress= {goSignup}>SignUp here</Text>
                </TouchableOpacity>
              </Text>
            </View>
            <Formik
            
              initialValues={{ email: '', password : '' }}
              onSubmit={values =>{
                loginnow(values);
              }}

              validationSchema={yup.object().shape({
                email: yup
                  .string()
                  .email()
                  .required(),
                password: yup
                  .string()
                  .min(8, 'Password should minimum 10 chars.')
                  .max(10, 'Password should not excced 10 chars.')
                  .required(),
              })}
            >
              {({ handleChange, errors, touched, handleBlur, handleSubmit, values }) => (
                <View>
                  <View style={styles.formGroup}>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      placeholder="Email Address"
                      keyboardType="email-address"
                    />
                    {(errors.email && touched.email) &&
                      <Text style={styles.errorText}>{errors.email}</Text>
                    }
                    
                  </View>

                  <View style={styles.formGroup}>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      placeholder="Password"
                      keyboardType="default"
                    />
                    {(errors.password && touched.password) &&
                      <Text style={styles.errorText}>{errors.password}</Text>
                    }
                    
                  </View>

                  <View style={{ justifyContent : 'center', alignItems : 'center' }}>
                    <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                      <Text style={styles.loginButtonText}>Login</Text>            
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik> 
        </View>
      </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  headerView : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  headerLogo : {
    height : 110,
    resizeMode : 'contain'
  },
  bottomView : {
    flex : 1.5,
    backgroundColor : '#fff',
    bottom: 50,
    borderTopLeftRadius : 40,
    borderTopRightRadius : 40,
    paddingHorizontal : 15,
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderWidth : 0,
    borderColor : '#4632A1',
    borderBottomWidth: 2,
  },
  loginButton :{
    height: 50,
    margin: 12,
    backgroundColor : '#4632A1',
    marginTop : 25,
    borderRadius : 100,
    maxWidth : 350, 
    justifyContent : 'center',
    alignItems : 'center',
    color : '#fff',
    textAlign : 'center', 
    width : Dimensions.get('window').width,
    elevation : 10,
    shadowOpacity : .5,
    shadowRadius : 3
  },
  loginButtonText : {
    fontSize: 18,
    fontWeight : '500',
    color : '#fff'
  },
  errorText : {
    color : '#f00',
    paddingLeft : 14,
    marginBottom : 0,
    // lineHeight : 10
  }
})