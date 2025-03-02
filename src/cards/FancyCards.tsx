import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.fancyCardHeader}>Fancy Cards</Text>
      <ScrollView horizontal={true} style={styles.mainContainer}>
        <View style={[styles.fancyCard]}>
          <Image
            style={styles.cardImage}
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1666863910470-c5906f963cb4?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
          />
          <Text style={styles.fancyCardHeading}>Aerial View of River</Text>
          <Text style={styles.fancyCardAuthor}>Photo by Satyam Gupta</Text>
          <Text style={styles.fancyCardDescription}>
            From above, the river weaves like a glistening ribbon through a
            tapestry of greenery, its winding path reflecting the sky, bordered
            by lush landscapes and vibrant patches of untouched nature. 🌿🌊
          </Text>
        </View>

        <View style={[styles.fancyCard]}>
          <Image
            style={styles.cardImage}
            source={{
              uri: 'https://images.unsplash.com/photo-1551749005-6b94ff060954?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
          />
          <Text style={styles.fancyCardHeading}>Beautiful Sea Sunset</Text>
          <Text style={styles.fancyCardAuthor}>Photo by Satyam Gupta</Text>
          <Text style={styles.fancyCardDescription}>
            The sun dips below the horizon, casting a golden glow over the
            tranquil sea. Waves glimmer with orange hues, while the sky morphs
            into a mesmerizing palette of purples and pinks. 🌅🌊
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fancyCardHeader: {
    fontSize: 36,
    fontWeight: 600,
    paddingBlock: 10,
    paddingInline: 10,
  },

  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },

  fancyCard: {
    width: 350,
    height: 450,
    borderRadius: 10,
    padding: 10,
    marginInline: 8,
    elevation: 4,
    backgroundColor: '#f3f5c9',
    overflow: 'hidden',
  },

  cardImage: {
    width: 350,
    height: 300,
    borderRadius: 10,
    marginTop: -10,
    marginInline: -10,
  },

  fancyCardHeading: {
    fontWeight: 600,
    fontSize: 24,
    paddingTop: 10,
  },

  fancyCardAuthor: {
    fontSize: 18,
  },

  fancyCardDescription: {
    fontSize: 14,
    textAlign: 'justify',
  },
});
