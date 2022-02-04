import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'angular-simon-grimm',
  webDir: 'dist/angular-simon-grimm',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.88.34:4200',
    cleartext: true
  }
};

export default config;
