import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.google',
  appName: 'producto',
  webDir: 'www',
  plugins: {
    "GoogleAuth": {
      "scopes": ["profile", "email"],
      "serverClientId": "781307139521-plv9lv06fvum6rsuqbnvc4vo6a190smk.apps.googleusercontent.com",
      "forceCodeForRefreshToken": true
    }
  }
};

export default config;
