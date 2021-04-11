import React, { useState } from 'react'
import { View, TextInput, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {

    }

    return (
        <View style={{ padding: 20 }}>
             <TextInput
        placeholder="selena@kimkim.com"
        value={email}
        onChangeText={setEmail}
        style={{
          color: 'white',
          fontSize: 18,
          width: '100%',
          marginVertical: 25,
          height: Platform.OS == 'android' ? 40 : 20,

        }}
        placeholderTextColor="grey"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          color: 'white',
          fontSize: 18,
          width: '100%',
          marginVertical: 25,
          height: Platform.OS == 'android' ? 40 : 20,
        }}
        placeholderTextColor="grey"

      />

            <Pressable
                onPress={onSubmit}
                style={{
                    backgroundColor: '#e33062',
                    height: 50,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}

            >

                <Text
                    style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }} >
                    Sign In
                </Text>

            </Pressable>

            <Pressable
                onPress={() => { console.warn('nbavigate'); navigation.navigate('SignUp') }}
                style={{
                    height: 50,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30,
                }}
            >
                <Text
                    style={{
                        color: '#e33062',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>
                    New here? Sign up
        </Text>
            </Pressable>

        </View>
    )
}

export default SignInScreen
