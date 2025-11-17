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

const Lessons = ({ navigation }) => {
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
          <Navigation navigation={navigation} activeTab="Lessons" />
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <Text style={styles.title}>
            Choose Your Lesson
          </Text>
          <Text style={styles.subtitle}>
            Here you can find all the lessons available to you. Click on any lesson to start learning!
          </Text>
          
          {/* Lesson Categories */}
          <View style={styles.lessonsGrid}>
            <TouchableOpacity style={styles.lessonCard}>
              <Text style={styles.lessonTitle}>JavaScript</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.lessonCard}>
              <Text style={styles.lessonTitle}>Python</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.lessonCard}>
              <Text style={styles.lessonTitle}>Java</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.lessonCard}>
              <Text style={styles.lessonTitle}>C#</Text>
            </TouchableOpacity>
          </View>
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
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
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
  lessonsGrid: {
    gap: 16,
  },
  lessonCard: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#1d4ed8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lessonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0a0a23',
    marginBottom: 8,
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

export default Lessons;