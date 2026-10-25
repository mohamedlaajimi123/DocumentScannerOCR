import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DocumentList from './components/DocumentList';
import CameraScan from './components/CameraScan';
import TextEditor from './components/TextEditor';
import DocumentDetail from './components/DocumentDetail';

const Stack = createStackNavigator();
const STORAGE_KEY = '@scanned_documents';

export default function App() {
  // Sample seed data matching your SRS ScannedDocument database schema
  const initialDocuments = [
    {
      id: 1,
      title: 'Course Syllabus',
      raw_text: 'Mobile Application Development Midterm Exam Scope and Requirements.',
      image_path: 'https://via.placeholder.com/150',
      created_at: '2026-10-24 10:00:00',
      category: 'Education',
    },
    {
      id: 2,
      title: 'Electricity Bill',
      raw_text: 'Total Amount Due: $45.50. Due Date: November 01, 2026.',
      image_path: 'https://via.placeholder.com/150',
      created_at: '2026-10-22 14:30:00',
      category: 'Billing',
    },
  ];

  const [documents, setDocuments] = useState(initialDocuments);

  // Load saved documents from local storage on launch
  useEffect(() => {
    const loadPersistedData = async () => {
      try {
        const storedDocs = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedDocs !== null) {
          setDocuments(JSON.parse(storedDocs));
        }
      } catch (error) {
        console.error('Failed to load documents from storage', error);
      }
    };
    loadPersistedData();
  }, []);

  // Save document state array to AsyncStorage (FR-05)
  const saveDocumentsToStorage = async (updatedDocs) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedDocs));
    } catch (error) {
      console.error('Failed to save document to storage', error);
    }
  };

  // Handler to add a new document item
  const handleSaveDocument = (title, raw_text, category, image_path) => {
    const newDoc = {
      id: Date.now(),
      title: title || 'Untitled Document',
      raw_text: raw_text || '',
      image_path: image_path || 'https://via.placeholder.com/150',
      created_at: new Date().toLocaleString(),
      category: category || 'General',
    };

    const updated = [newDoc, ...documents];
    setDocuments(updated);
    saveDocumentsToStorage(updated);
  };

  // Handler to delete a document item
  const handleDeleteDocument = (id) => {
    const updated = documents.filter((doc) => doc.id !== id);
    setDocuments(updated);
    saveDocumentsToStorage(updated);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DocumentList" screenOptions={{ headerShown: false }}>
        
        {/* FR-05 & FR-06: Document Library & Search Screen */}
        <Stack.Screen name="DocumentList">
          {(props) => (
            <DocumentList
              {...props}
              documents={documents}
              onGoToScan={() => props.navigation.navigate('CameraScan')}
              onSelectDoc={(doc) => props.navigation.navigate('DocumentDetail', { document: doc })}
            />
          )}
        </Stack.Screen>

        {/* FR-01 & FR-03: Camera Preview / OCR Capture Screen */}
        <Stack.Screen name="CameraScan">
          {(props) => (
            <CameraScan
              {...props}
              onTextExtracted={(extractedText, imagePath) => {
                props.navigation.navigate('TextEditor', {
                  extractedText: extractedText,
                  imagePath: imagePath,
                });
              }}
              onCancel={() => props.navigation.goBack()}
            />
          )}
        </Stack.Screen>

        {/* FR-04: Text Editor & Review Screen */}
        <Stack.Screen name="TextEditor">
          {(props) => (
            <TextEditor
              {...props}
              onSave={(title, raw_text, category, image_path) => {
                handleSaveDocument(title, raw_text, category, image_path);
                props.navigation.navigate('DocumentList');
              }}
              onCancel={() => props.navigation.navigate('DocumentList')}
            />
          )}
        </Stack.Screen>

        {/* FR-07: Document Viewer & Exporter */}
        <Stack.Screen name="DocumentDetail">
          {(props) => (
            <DocumentDetail
              {...props}
              onDelete={(id) => {
                handleDeleteDocument(id);
                props.navigation.navigate('DocumentList');
              }}
              onBack={() => props.navigation.goBack()}
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}