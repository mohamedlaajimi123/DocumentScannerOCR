import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DocumentList from '../components/DocumentList';
import CameraScan from '../components/CameraScan';
import TextEditor from '../components/TextEditor';
import DocumentDetail from '../components/DocumentDetail';

const Stack = createStackNavigator();

export default function AppNavigator({ documents, onSaveDocument, onDeleteDocument }) {
  return (
    <Stack.Navigator initialRouteName="DocumentList" screenOptions={{ headerShown: false }}>
      
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

      <Stack.Screen name="TextEditor">
        {(props) => (
          <TextEditor
            {...props}
            onSave={(title, raw_text, category, image_path) => {
              onSaveDocument(title, raw_text, category, image_path);
              props.navigation.navigate('DocumentList');
            }}
            onCancel={() => props.navigation.navigate('DocumentList')}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="DocumentDetail">
        {(props) => (
          <DocumentDetail
            {...props}
            onDelete={(id) => {
              onDeleteDocument(id);
              props.navigation.navigate('DocumentList');
            }}
            onBack={() => props.navigation.goBack()}
          />
        )}
      </Stack.Screen>

    </Stack.Navigator>
  );
}