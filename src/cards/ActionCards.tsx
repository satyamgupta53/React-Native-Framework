import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCards() {
  function openWebsite(websiteUrl: string) {
    Linking.openURL(websiteUrl);
  }

  return (
    <View>
      <Text style={styles.actionCardHeader}>Action Cards</Text>
      <View style={[styles.actionCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.actionCardHeading}>
            React Native API Documentation
          </Text>
        </View>

        <View style={styles.actionCardBodyContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://reactnative.dev/docs/accessibilityinfo')
            }>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1679882734062/8b640c66-a019-47f2-a1e3-9c74f7d20d97.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.actionCardFooter}>
            <TouchableOpacity
                style={{flexDirection: 'row', justifyContent: 'space-between'}}
                onPress={() =>
                openWebsite('https://reactnative.dev/docs/accessibilityinfo')
                }>
                <Text style={styles.footerText}>Follow Me</Text>
                <Text style={styles.footerText}>Read More</Text>
                <Text style={styles.footerText}>Support</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionCardHeader: {
    fontSize: 36,
    fontWeight: 600,
    paddingBlock: 10,
    paddingInline: 10,
  },

  actionCard: {
    width: 350,
    height: 460,
    borderRadius: 10,
    padding: 10,
    marginInline: 24,
    marginBottom: 10,
    elevation: 4,
    backgroundColor: '#d9f7ff',
    overflow: 'hidden',
  },

  headingContainer: {},

  actionCardHeading: {
    fontWeight: 600,
    fontSize: 20,
  },

  cardImage: {
    width: 350,
    height: 350,
    borderRadius: 10,
    marginInline: -10,
  },

  actionCardBodyContainer: {
    paddingBlock: 10,
    alignItems: 'center',
  },

    actionCardFooter: {
        paddingInline: 10,
    },

    footerText: {
        fontWeight: 600,
        fontSize: 16,
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
    }
});
