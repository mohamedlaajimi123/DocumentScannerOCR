import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { globalStyles, colors } from '../styles/theme';

export default function DocumentDetail({ route, onDelete, onBack }) {
  const document = route?.params?.document;

  if (!document) return null;

  const handleExport = (type) => {
    Alert.alert("Export Document", `Successfully exported "${document.title}" as a .${type.toUpperCase()} file.`);
  };

  return (
    <ScrollView style={globalStyles.container}>
      <TouchableOpacity onPress={onBack} style={{ marginBottom: 15 }}>
        <Text style={{ color: colors.primary, fontWeight: '600' }}>← Back to List</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 22, fontWeight: 'bold', color: colors.textDark }}>{document.title}</Text>
      <Text style={{ fontSize: 12, color: '#777', marginVertical: 8 }}>Category: {document.category} | Created: {document.created_at}</Text>

      <View style={localStyles.textContainer}>
        <Text style={{ fontSize: 15, color: '#333', lineHeight: 22 }}>{document.raw_text}</Text>
      </View>

      <View style={localStyles.exportRow}>
        <TouchableOpacity style={localStyles.exportBtn} onPress={() => handleExport('pdf')}>
          <Text style={{ color: '#fff', fontWeight: '600' }}>Export PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.exportBtn} onPress={() => handleExport('txt')}>
          <Text style={{ color: '#fff', fontWeight: '600' }}>Export TXT</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={globalStyles.deleteBtn} onPress={() => onDelete(document.id)}>
        <Text style={globalStyles.primaryBtnText}>Delete Document</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  textContainer: { backgroundColor: '#f8f9fa', padding: 15, borderRadius: 8, borderWidth: 1, borderColor: '#e9ecef', marginVertical: 15 },
  exportRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  exportBtn: { flex: 0.48, backgroundColor: colors.primary, padding: 12, borderRadius: 8, alignItems: 'center' },
});