import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';

const Logo = ({ size = 150, style = {} }) => {
  return (
    <Image
      source={require('../assets/images/ByteSizeLogoBlueWhite.png')}
      style={[styles.logo, { width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    marginBottom: 20,
  },
});

export default Logo;