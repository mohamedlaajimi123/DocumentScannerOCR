import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function DocumentList({documents,onGoToScan,onSekectDoc}){
    const [searchQuery, setSearchQuery] = useState('');

    //FR 06
    const filteredDocuments = documents.filter(
        (doc) =>
            doc.title.toLowerCase().include(searchQuery.toLowerCase()) ||
            doc.raw_text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return(
        <View style={styles.container}>
            <Text style={style.header}>My Scanned Documents</Text>

            {/* FR-06 Search Bar*/}
            <TextInput
                style={styles.searchInput}
                placeholder="Search documents by keyword..."
                value={searchQuery}
                onChangeText={serSearchQuery}
            />

            {/* FR-05: Saved Documents List */}
            <FlatList
                data={filteredDocuments}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item})=>(
                    <TouchableOpacity
                        style={styles.docItem}
                        onPress={()=> onSelectDoc(item)}
                    >
                        <View style={styles.docHeader}>
                            <Text style={style.docTitle}>{item.title}</Text>
                            <Text style={styles.docCategory}>{item.category}</Text>
                        </View>
                        <Text style={styles.docSnippet} numberOfLines={2}>
                            {item.raw_text}
                        </Text>
                        <Text style={styles.docDate}>{item.created_at}</Text>

                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No documents found</Text>
                }
            />

            {/* action Button To Open Scanner  */}
            <TouchableOpacity style={styles.scanButton} onPress={onGoToScan}>
                <Text style={styles.scanButtonText}>+ Scan New Document</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5', paddingTop: 50 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, color: '#333' },
  searchInput: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  docItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  docHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  docTitle: { fontSize: 16, fontWeight: 'bold', color: '#1a1a1a' },
  docCategory: { fontSize: 12, color: '#007AFF', fontWeight: '600' },
  docSnippet: { color: '#666', fontSize: 14, marginVertical: 4 },
  docDate: { fontSize: 11, color: '#aaa', marginTop: 4 },
  emptyText: { textAlign: 'center', marginTop: 30, color: '#888' },
  scanButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  scanButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

