import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#007AFF',
  success: '#28a745',
  danger: '#dc3545',
  backgroundLight: '#f5f5f5',
  backgroundWhite: '#fff',
  backgroundDark: '#000',
  textDark: '#1a1a1a',
  textMuted: '#666666',
  textLight: '#ffffff',
  border: '#dddddd',
  cameraFrame: '#00FF00',
};

export const globalStyles = StyleSheet.create({
  // Screen Container Base
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.backgroundWhite,
    paddingTop: 50,
  },
  containerLight: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.backgroundLight,
    paddingTop: 50,
  },
  containerDark: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.backgroundDark,
    justify: 'center',
    alignItems: 'center',
  },
  
  // Headers & Text Labels
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: colors.textDark,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444444',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: colors.backgroundWhite,
  },
  textArea: {
    height: 180,
    textAlignVertical: 'top',
  },

  // Buttons
  primaryBtn: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  primaryBtnText: {
    color: colors.textLight,
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveBtn: {
    backgroundColor: colors.success,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  deleteBtn: {
    backgroundColor: colors.danger,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 40,
  },
  cancelBtn: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 30,
  },
  cancelBtnText: {
    color: colors.danger,
    fontSize: 14,
  },

  // Document List Items
  docItem: {
    backgroundColor: colors.backgroundWhite,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eeeeee',
  },
  docHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  docTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textDark,
  },
  docCategory: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
  docSnippet: {
    color: colors.textMuted,
    fontSize: 14,
    marginVertical: 4,
  },
  docDate: {
    fontSize: 11,
    color: '#aaaaaa',
    marginTop: 4,
  },
});