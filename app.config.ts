import "dotenv/config";

export default {
  name: "spotify",
  version: "1.0.0",
  extra: {
    base64AuthToken: process.env.BASE64AUTHTOKEN,
    redirectUri: process.env.REDIRECTURI,
    firebaseApiKey: process.env.BASE64AUTHTOKEN,
    firebaseAuthDomain: process.env.BASE64AUTHTOKEN,
    firebaseProjectId: process.env.BASE64AUTHTOKEN,
    firebaseStorageBucket: process.env.BASE64AUTHTOKEN,
    firebaseMessagingSenderId: process.env.BASE64AUTHTOKEN,
    firebaseAppId: process.env.BASE64AUTHTOKEN,
  },
};
