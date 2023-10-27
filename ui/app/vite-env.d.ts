/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_firebase_apiKey: string;
  readonly VITE_firebase_authDomain: string;
  readonly VITE_firebase_projectId: string;
  readonly VITE_firebase_storageBucket: string;
  readonly VITE_firebase_messagingSenderId: string;
  readonly VITE_firebase_appId: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}