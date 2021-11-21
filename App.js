import React from 'react';
import { Text, View } from 'react-native';

import { UsuarioProvider } from './context/user';

import Routes from './routes';

import firebaseApp from './services/firebase';

export default function App() {

  return (
    <UsuarioProvider>
      <Routes/>
    </UsuarioProvider>
  );
}
