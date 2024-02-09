import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigation from './App/Router/StackNavigation';
import store, { persistor } from './App/redux/Store';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackNavigation />
        </PersistGate>
      </Provider>
      <Toast position='bottom' />
    </NavigationContainer>
  );
};

export default App;
