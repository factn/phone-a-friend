/* eslint-disable no-undef */
function buildErrMessage(varName: string): string {
  const file = process.env.NODE_ENV === 'development' ? '.env' : '.env.production';
  return `Error parsing environmental config from ${file}
  Unable to get value for variable name: ${varName}
  Once this is fixed you will need to re-build/restart the server`;
}

function getAsString(varName: string): string {
  const envVar: string | undefined = process.env['REACT_APP_' + varName];
  if (envVar !== undefined && envVar !== null) {
    return envVar;
  } else {
    throw new Error(buildErrMessage(varName));
  }
}

const envConfig = {
  firebaseConfig: {
    apiKey: getAsString('FIREBASE_API_KEY'),
    authDomain: getAsString('FIREBASE_AUTH_DOMAIN'),
    databaseURL: getAsString('FIREBASE_DB_URL'),
    projectId: getAsString('FIREBASE_PROJECT_ID'),
    storageBucket: getAsString('FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: getAsString('FIREBASE_MESSAGE_SENDER_ID'),
    appId: getAsString('FIREBASE_APP_ID'),
    measurementId: getAsString('FIREBASE_MEASUREMENT_ID'),
  },
  environment: getAsString('ENVIRONMENT'),
  isLocalDevelopment: process.env.NODE_ENV === 'development',
};

export default envConfig;
