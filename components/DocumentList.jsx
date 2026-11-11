import React, { useState } from 'react';
import { Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/theme';

export default function DocumentList({ documents, onGoToScan, onSelectDoc }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.raw_text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={globalStyles.containerLight}>
      <Text style={globalStyles.header}>My Scanned Documents</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Search documents by keyword..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredDocuments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={globalStyles.docItem} onPress={() => onSelectDoc(item)}>
            <View style={globalStyles.docHeader}>
              <Text style={globalStyles.docTitle}>{item.title}</Text>
              <Text style={globalStyles.docCategory}>{item.category}</Text>
            </View>
            <Text style={globalStyles.docSnippet} numberOfLines={2}>{item.raw_text}</Text>
            <Text style={globalStyles.docDate}>{item.created_at}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 30, color: '#888' }}>No documents found</Text>}
      />

      <TouchableOpacity style={globalStyles.primaryBtn} onPress={onGoToScan}>
        <Text style={globalStyles.primaryBtnText}>+ Scan New Document</Text>
      </TouchableOpacity>
    </View>
  );
}