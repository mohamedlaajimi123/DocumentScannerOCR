# Document Scanner and OCR Mobile Application

This application is a React Native mobile document management tool developed with Expo. It provides a client-side interface for capturing documents, reviewing extracted text, saving records locally, and performing full-text searches across saved items.

## Overview

The application satisfies the core functional requirements for document capture, text editing, local persistence, and full-text search:

- Camera Scanning Interface: A dedicated screen component designed to interface with document capture workflows and return extracted text strings.
- Text Editor and Review: An editable text view allowing users to modify extracted raw text, assign a document title, and set a category before saving.
- Local Storage Persistence: Full state storage implemented using Async Storage to persist scanned document records locally on the device.
- Full-Text Search: A search interface that filters stored documents by matching keywords against titles and extracted text contents.
- Document Export and Management: A detailed document viewer providing options to delete records or simulate exporting saved documents as PDF or TXT files.

## Database Schema Structure

The application models document records using the following entity schema:

Table: ScannedDocument
- id: String / Number (Unique Primary Key)
- title: String (Document title)
- raw_text: String (Extracted OCR text)
- image_path: String (Path or URI to document preview)
- created_at: String (Creation timestamp)
- category: String (Document categorization label)

## Project Structure

- App.js: Main entry point containing navigation stack configuration and Async Storage persistent state handlers.
- components/DocumentList.jsx: Home screen displaying the list of saved documents with full-text search filtering.
- components/CameraScan.jsx: Camera and OCR capture view.
- components/TextEditor.jsx: Screen for reviewing and editing extracted document text prior to saving.
- components/DocumentDetail.jsx: Screen for viewing, deleting, and exporting saved document records.

## Requirements and Dependencies

- React Native (Expo SDK)
- @react-navigation/native
- @react-navigation/stack
- @react-native-async-storage/async-storage

## Getting Started

1. Install project dependencies:
   npm install

2. Start the Expo development server:
   npx expo start