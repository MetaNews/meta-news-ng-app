const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

const getPoolData = () => {
  const poolData = {
    UserPoolId: "userpoolid", // Your user pool id here
    ClientId: "clientid" // Your client id here
  };

  return new CognitoUserPool(poolData);
};

export { getPoolData };
