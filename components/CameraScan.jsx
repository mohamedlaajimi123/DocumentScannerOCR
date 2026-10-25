import react from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CameraScan({onTextExtracted, onCancel}){
    // Simulates OCR text recognition trigger FR03
    const handleSimulateScan =()=>{
        const mockOCRText =
           "Midterm Exam Notice:\nCourse: Mobile Development\nTopic: React Native Architecture & Local Storage\nDate: October 2026";
        const mockImagePath="https://via.placeholder.com/150";

        onTextExtracted(mockOCRText, mockImagePath);
    };

    return (
        <View Style={styles.container}>
            <Text style={styles.title}>Camera View (OCR Engine Active)</Text>
            <View styles={styles.cameraBox}>
                <Text style={style.cameraText}>[ Live Camera Frame / Overlay]</Text>
                <Text styles={styles.ocrHint}>Ready to perform Google ML kit Text Recognition</Text>
            </View>

            <TouchableOpacity style={styles.capturButton} onPress={handleSimulateScan}> 
                <Text style={style.buttonText}>Capture & Extract </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  title: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  cameraBox: {
    width: '100%',
    height: 300,
    borderWidth: 2,
    borderColor: '#00FF00',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 30,
  },
  cameraText: { color: '#00FF00', fontSize: 16, fontWeight: 'bold' },
  ocrHint: { color: '#aaa', fontSize: 12, marginTop: 10, textAlign: 'center' },
  captureButton: { backgroundColor: '#007AFF', width: '100%', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  cancelButton: { padding: 10 },
  cancelText: { color: '#ff4d4d', fontSize: 14 },
});