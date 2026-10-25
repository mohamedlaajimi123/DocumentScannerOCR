import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function TextEditor({ route, onSave, onCancel}){
    const intialText = route?.params?.extractedText || '';
    const imagePath = route?.params?.imagePath || '';

    const [title,setTitle] = useState('');
    const [category,setCategory] = useState('');
    const [rawText, setRawText] = useState(initialText);

    return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Review & Edit Extracted Text</Text>

      <Text style={styles.label}>Document Title</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Midterm Notice"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Category</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Education, Invoices"
        value={category}
        onChangeText={setCategory}
      />

      <Text style={styles.label}>Extracted Text (FR-04 Editable View)</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        multiline
        value={rawText}
        onChangeText={setRawText}
      />

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => onSave(title, rawText, category, imagePath)}
      >
        <Text style={styles.saveText}>Save Document</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
        <Text style={styles.cancelText}>Discard Scan</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', paddingTop: 50 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#444', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 15 },
  textArea: { height: 180, textAlignVertical: 'top' },
  saveButton: { backgroundColor: '#28a745', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  saveText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  cancelButton: { alignItems: 'center', marginTop: 15, marginBottom: 30 },
  cancelText: { color: '#888' },
});

