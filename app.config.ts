import "dotenv/config";

export default {
  name: "spotify",
  version: "1.0.0",
  extra: {
    base64AuthToken: process.env.BASE_64_AUTH_TOKEN,
    redirectUri: process.env.REDIRECT_URI,
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    firebaseAppId: process.env.FIREBASE_APP_ID,
  },
};
