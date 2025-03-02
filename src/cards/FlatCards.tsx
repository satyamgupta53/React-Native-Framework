import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.flatCardHeader}>Flat Cards</Text>
      <ScrollView horizontal={true} style={styles.mainContainer}>
        <View style={[styles.flatCard, styles.cardOne]}>
          <Text style={styles.flatCardText}>Box 1</Text>
        </View>
        <View style={[styles.flatCard, styles.cardTwo]}>
          <Text style={styles.flatCardText}>Box 2</Text>
        </View>
        <View style={[styles.flatCard, styles.cardThree]}>
          <Text style={styles.flatCardText}>Box 3</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flatCardHeader: {
    fontSize: 36,
    fontWeight: 600,
    paddingBlock: 10,
    paddingInline: 10,
  },

  flatCardText: {
    fontWeight: 600,
    fontSize: 24,
  },

  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },

  flatCard: {
    width: 250,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginInline: 8,
    elevation: 4,
  },

  cardOne: {
    backgroundColor: '#e74c3c',
  },

  cardTwo: {
    backgroundColor: '#f39c12',
  },

  cardThree: {
    backgroundColor: '#3498db',
  },
});
