import {SafeAreaView, ScrollView} from 'react-native';
import React, {JSX} from 'react';
import Cards from './src/Cards';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
        <Cards />
    </SafeAreaView>
  );
};

export default App;
