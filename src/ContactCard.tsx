import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {contacts} from './Model';

export default function ContactCard() {
  return (
    <View>
      <Text style={styles.cardHeader}>Contact Card</Text>
      <ScrollView style={styles.mainContainer} scrollEnabled={true}>
        {contacts.map(({uid, name, status, contact, image}) => (
          <View key={uid} style={styles.contactCard}>
            <Image source={{uri: image}} style={styles.contactImage} />
            <View style={styles.contactBody}>
              <Text style={{fontSize: 18, fontWeight: 600}}>{name}</Text>
              <Text style={{fontSize: 20, fontWeight: 400}}>{contact}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    fontSize: 36,
    fontWeight: 600,
    paddingBlock: 10,
    paddingInline: 10,
  },

  mainContainer: {
    height: 400,
    backgroundColor: '#ecf0f1',
    padding: 10,
    paddingBottom: 15
  },

  contactCard: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 16,
  },

  contactImage: {
    width: 75,
    height: 75,
  },

  contactBody: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  }
});
