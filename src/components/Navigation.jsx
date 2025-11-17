import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Navigation = ({ navigation, activeTab = 'Home' }) => {

  const handleNavigateToProfile = () => {
    // Navigate to Profile screen
    if (navigation) {
      navigation.navigate('Profile');
    }
  };

  const handleNavigateToHome = () => {
    // Navigate to Home screen
    if (navigation) {
      navigation.navigate('Home');
    }
  };

  const handleNavigateToLessons = () => {
    // Navigate to Lessons screen
    if (navigation) {
      navigation.navigate('Lessons');
    }
  };

  return (
    <View style={styles.navigation}>
      <TouchableOpacity 
        style={[styles.navButton, activeTab === 'Home' && styles.activeNavButton]}
        onPress={handleNavigateToHome}
      >
        <Text style={activeTab === 'Home' ? styles.navTextActive : styles.navText}>
          Home
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.navButton, activeTab === 'Lessons' && styles.activeNavButton]} 
        onPress={handleNavigateToLessons}
      >
        <Text style={activeTab === 'Lessons' ? styles.navTextActive : styles.navText}>
          Lessons
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.navButton, activeTab === 'Profile' && styles.activeNavButton]} 
        onPress={handleNavigateToProfile}
      >
        <Text style={activeTab === 'Profile' ? styles.navTextActive : styles.navText}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  navButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  activeNavButton: {
    backgroundColor: '#1d4ed8',
  },
  navText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  navTextActive: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Navigation;