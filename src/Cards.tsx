import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import FlatCards from './cards/FlatCards';
import FancyCards from './cards/FancyCards';
import ActionCards from './cards/ActionCards';

const Cards = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <FlatCards />
            <FancyCards />
            <ActionCards />
        </ScrollView>
    </SafeAreaView>
  )
}

export default Cards;