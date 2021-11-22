import React,{useContext,useState,Component} from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';

import { UsuarioContext } from '../../context/user';

import { 
    Container,
    Button
} from './styles';

const Settings = () =>  {

    const {signOut} = useContext(UsuarioContext);
    const {user} = useContext(UsuarioContext);
    const nome = user.nome;

    return (
       <Container>
           <Button onPress={()=>{signOut()}}>
           <Text> Deslogar usuario: {nome} </Text>
           </Button>
           </Container> 
    )
}

export default Settings;
