import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../styles/theme';

export default function TextEditor({ route, onSave, onCancel }) {
  const initialText = route?.params?.extractedText || '';
  const imagePath = route?.params?.imagePath || '';

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [rawText, setRawText] = useState(initialText);

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={[globalStyles.header, { fontSize: 20 }]}>Review & Edit Extracted Text</Text>

      <Text style={globalStyles.label}>Document Title</Text>
      <TextInput style={globalStyles.input} placeholder="e.g. Midterm Notice" value={title} onChangeText={setTitle} />

      <Text style={globalStyles.label}>Category</Text>
      <TextInput style={globalStyles.input} placeholder="e.g. Education, Invoices" value={category} onChangeText={setCategory} />

      <Text style={globalStyles.label}>Extracted Text (FR-04 Editable View)</Text>
      <TextInput style={[globalStyles.input, globalStyles.textArea]} multiline value={rawText} onChangeText={setRawText} />

      <TouchableOpacity style={globalStyles.saveBtn} onPress={() => onSave(title, rawText, category, imagePath)}>
        <Text style={globalStyles.primaryBtnText}>Save Document</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.cancelBtn} onPress={onCancel}>
        <Text style={{ color: '#888' }}>Discard Scan</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}