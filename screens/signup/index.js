import React, { useEffect }  from 'react'
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Image, StyleSheet,TextInput  } from 'react-native'
import { Formik } from 'formik';
import * as yup from 'yup'


const SignUp = (props) => {
  const [text, onChangeText] = React.useState("Useless Text"); 
  const { navigation } = props;
  useEffect(() => {
  }, []);

  return (
      <ScrollView style={{ flex: 1, backgroundColor : '#fff' }}>
        <ImageBackground source={require('../../assets/login_bg.jpg')} style={{ height: Dimensions.get('window').height / 2.5 }}>
          <View style={styles.headerView}>
              <Image source={require('../../assets/logo_white.png')}  style={styles.headerLogo}/>
          </View>
        </ImageBackground>

        <View style={styles.bottomView}>
            <View style={{ padding : 30, paddingHorizontal : 20, paddingBottom : 10 }}>
              <Text style={{ fontSize : 30, color : '#4632A1'}}>Welcome</Text>
              <Text style={{ fontWeight: '700', color : '#000' }}>Already have an account {' '}
                <TouchableOpacity><Text style={{ color : 'red', fontSize : 12, fontStyle : 'italic' }}  onPress= {() =>navigation.navigate('Login')}>Login here</Text></TouchableOpacity>
              </Text>
            </View>
            <Formik
              initialValues={{ username: '', email : '', mobile : '' }}
              onSubmit={values =>{
                console.log(values);
                // onChangeText(values.email)
              }}

              validationSchema={yup.object().shape({
                username: yup
                  .string()
                  .min(4)
                  .max(10, 'Password should not excced 10 chars.')
                  .required(),
                email: yup
                  .string()
                  .email()
                  .required(),
                mobile: yup
                  .string()
                  .min(10, 'Mobile should minimum 10 chars.')
                  .max(10, 'Mobile should not excced 10 chars.')
                  .required(),
              })}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View>
                  <View style={styles.formGroup}>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      value={values.username}
                      placeholder="Username"
                      keyboardType="default"
                    />
                    {(errors.username && touched.username) &&
                      <Text style={styles.errorText}>{errors.username}</Text>
                    }
                  </View>
                  
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
                      onChangeText={handleChange('mobile')}
                      onBlur={handleBlur('mobile')}
                      value={values.mobile}
                      placeholder="Mobile Number"
                      keyboardType="numeric"
                    />
                    {(errors.mobile && touched.mobile) &&
                      <Text style={styles.errorText}>{errors.mobile}</Text>
                    }
                  </View>

                  <View style={{ justifyContent : 'center', alignItems : 'center' }}>
                    <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                      <Text style={styles.loginButtonText}>SignUp</Text>            
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik> 
        </View>
      </ScrollView>
  )
}

export default SignUp

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