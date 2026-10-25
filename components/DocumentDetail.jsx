import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function DocumentDetail({ route, onDelete, onBack }) {
  const document = route?.params?.document;

  if (!document) return null;

  // FR-07: Export scan options via native OS dialog simulation
  const handleExport = (type) => {
    Alert.alert("Export Document", `Successfully exported "${document.title}" as a .${type} file.`);
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backText}>← Back to List</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{document.title}</Text>
      <Text style={styles.meta}>Category: {document.category} | Created: {document.created_at}</Text>

      <View style={styles.textContainer}>
        <Text style={styles.rawText}>{document.raw_text}</Text>
      </View>

      {/* FR-07: Export Options */}
      <View style={styles.exportRow}>
        <TouchableOpacity style={styles.exportBtn} onPress={() => handleExport('pdf')}>
          <Text style={styles.btnText}>Export PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exportBtn} onPress={() => handleExport('txt')}>
          <Text style={styles.btnText}>Export TXT</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.deleteBtn} onPress={() => onDelete(document.id)}>
        <Text style={styles.deleteText}>Delete Document</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', paddingTop: 50 },
  backButton: { marginBottom: 15 },
  backText: { color: '#007AFF', fontWeight: '600' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1a1a1a' },
  meta: { fontSize: 12, color: '#777', marginVertical: 8 },
  textContainer: { backgroundColor: '#f8f9fa', padding: 15, borderRadius: 8, borderWidth: 1, borderColor: '#e9ecef', marginVertical: 15 },
  rawText: { fontSize: 15, color: '#333', lineHeight: 22 },
  exportRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  exportBtn: { flex: 0.48, backgroundColor: '#007AFF', padding: 12, borderRadius: 8, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: '600' },
  deleteBtn: { backgroundColor: '#dc3545', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 15, marginBottom: 40 },
  deleteText: { color: '#fff', fontWeight: 'bold' },
});