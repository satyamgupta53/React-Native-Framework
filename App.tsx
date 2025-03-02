import {SafeAreaView, ScrollView} from 'react-native';
import React, {JSX} from 'react';
import Cards from './src/Cards';
import ContactCard from './src/ContactCard';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ContactCard />
        <Cards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
