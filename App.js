import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppNavigator from './navigation/AppNavigator';

const STORAGE_KEY = '@scanned_documents';

export default function App() {
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

  const saveDocumentsToStorage = async (updatedDocs) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedDocs));
    } catch (error) {
      console.error('Failed to save document to storage', error);
    }
  };

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

  const handleDeleteDocument = (id) => {
    const updated = documents.filter((doc) => doc.id !== id);
    setDocuments(updated);
    saveDocumentsToStorage(updated);
  };

  return (
    <NavigationContainer>
      <AppNavigator
        documents={documents}
        onSaveDocument={handleSaveDocument}
        onDeleteDocument={handleDeleteDocument}
      />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}