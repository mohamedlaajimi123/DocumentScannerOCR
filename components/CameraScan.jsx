import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles, colors } from '../styles/theme';

export default function CameraScan({ onTextExtracted, onCancel }) {
  const handleSimulateScan = () => {
    const mockOCRText = "Midterm Exam Notice:\nCourse: Mobile Development\nTopic: React Native Architecture & Local Storage\nDate: October 2026";
    const mockImagePath = "https://via.placeholder.com/150";
    onTextExtracted(mockOCRText, mockImagePath);
  };

  return (
    <View style={globalStyles.containerDark}>
      <Text style={{ color: colors.textLight, fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
        Camera View (OCR Engine Active)
      </Text>
      
      <View style={localStyles.cameraBox}>
        <Text style={{ color: colors.cameraFrame, fontSize: 16, fontWeight: 'bold' }}>[ Live Camera Frame / Overlay ]</Text>
        <Text style={{ color: '#aaa', fontSize: 12, marginTop: 10, textAlign: 'center' }}>Ready to perform Google ML Kit Text Recognition</Text>
      </View>

      <TouchableOpacity style={[globalStyles.primaryBtn, { width: '100%' }]} onPress={handleSimulateScan}>
        <Text style={globalStyles.primaryBtnText}>Capture & Extract Text</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.cancelBtn} onPress={onCancel}>
        <Text style={globalStyles.cancelBtnText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const localStyles = StyleSheet.create({
  cameraBox: {
    width: '100%',
    height: 300,
    borderWidth: 2,
    borderColor: colors.cameraFrame,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 30,
  },
});