import "dotenv/config";

export default {
  name: "spotify",
  version: "1.0.0",
  extra: {
    base64AuthToken: process.env.BASE_64_AUTH_TOKEN,
    redirectUri: process.env.REDIRECT_URI,
  },
};
