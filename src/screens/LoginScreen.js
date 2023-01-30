import React, {useContext, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  //const {isLoading, login} = useContext(AuthContext);

  return (
    <View style={styles.container}>

      <Image
        style={styles.logo}
        source={require('../../assets/sp.png')}
         />
      <Spinner  />

      
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Votre Email"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Mot de passe"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <Button
          title="Connexion"
          onPress={() => {navigation.navigate('ChatScreen1')
          }}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Vous n'avez pas de compte? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ffff'
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 13,
    borderWidth: 1,
    
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },

  logo: {
    marginBottom: 30,
    
    width:270,
    height:210

  },
  link: {
    color: 'blue',
  },
});

export default LoginScreen;
