import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.joaquinmx.photos',
  appName: 'photos-app',
  webDir: 'dist/photos-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
