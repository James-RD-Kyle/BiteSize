import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const Home = ({ navigation }) => {
  const handleStartLearning = () => {
    // Navigate to Lessons screen
    if (navigation) {
      navigation.navigate('Lessons');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContentContainer}
      >
        {/* Header with Logo */}
        <View style={styles.header}>
          <Logo size={150} />
          
          {/* Navigation */}
          <Navigation navigation={navigation} activeTab="Home" />
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <Text style={styles.welcomeTitle}>
            Welcome to <Text style={styles.brandText}>ByteSize</Text>
          </Text>
          <Text style={styles.subtitle}>
            Master coding one byte at a time. Learn, practice, and track your progress!
          </Text>
          <TouchableOpacity 
            style={styles.startButton}
            onPress={handleStartLearning}
          >
            <Text style={styles.startButtonText}>Start Learning</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 ByteSize. All rights reserved.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContentContainer: {
    minHeight: '100%',
  },
  header: {
    backgroundColor: '#0a0a23',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  mainContent: {
    minHeight: 400,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  welcomeTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#0a0a23',
  },
  brandText: {
    color: '#1d4ed8',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 32,
    color: '#666666',
    lineHeight: 24,
  },
  startButton: {
    backgroundColor: '#1d4ed8',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  startButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#f9f9f9',
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666666',
  },
});

export default Home;
