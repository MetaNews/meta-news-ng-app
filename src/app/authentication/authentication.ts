const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

const poolData = require('./pooldata.json');

export class Authentication {

  /**
   * Registers the user given the email, username, and password. Based
   * on the given pooldata. Returns a Promise with the CognitoUser on success
   * or the error on failure.
   *
   * @param {string} email
   * @param {string} user
   * @param {string} password
   * @returns {Promise<any>}
   */
  static register(email: string, user: string, password: string) {
    return new Promise((resolve, reject) => {
      const userPool = new CognitoUserPool(poolData);

      const attributeList = [];

      const dataEmail = {
        Name: "email",
        Value: email,
      };

      const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

      attributeList.push(attributeEmail);

      userPool.signUp(user, password, attributeList, null, (error, result) => {
        if (error) {
          alert(`SignUp Failure: ${error}`);
          console.log(error);
          return reject(error);
        }

        console.log(`SignUp Success: your username is ${result.user.getUsername()}`);
        return resolve(result.user);
      });
    });
  }

  /**
   * Logs a user in to the cognito identity service based on a string username
   * and password. Returns session data on success and an error on failure.
   *
   * @param {string} user
   * @param {string} password
   * @returns {Promise<void>}
   */
  static login(user: string, password: string) {
    return new Promise((resolve, reject) => {
      const userPool = new CognitoUserPool(poolData);

      const userData = {
        Username: user,
        Pool: userPool
      };

      const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

      const authenticationData = {
        Username: user,
        Password: password,
      };

      const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

      cognitoUser.authenticateUser(authenticationDetails, (error, result) => {
        if (error) {
          console.log(`Login Failure: ${error}`);
          alert(`Login Failure: ${error}`);
          return reject(error);
        }

        console.log(`Login Success: ${result}`);
        return resolve(result);
      });
    });
  }

  /**
   * // TODO resendConfirmation documentation
   *
   * @param {string} user
   * @returns {Promise<void>}
   */
  static resendConfirmation(user) {
    return new Promise((resolve, reject) => {
      const userPool = new CognitoUserPool(poolData);

      const userData = {
        Username: user,
        Pool: userPool,
      };

      const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

      cognitoUser.resendConfirmationCode((error, result) => {
        if (error) {
          console.log(`ResendConfirmation Failure: ${error}`);
          alert(`ResendConfirmation Failure: ${error}`);
          return reject(error);
        }

        console.log(`ResendConfirmation Success: ${result}`);
        return resolve(result);
      });
    });
  }

  /**
   * // TODO confirmRegistration documentation
   *
   * @param {string} user
   * @param {string} confirmValue
   * @returns {Promise<void>}
   */
  static confirmRegistration(user, confirmValue: string) {
    return new Promise((resolve, reject) => {
      const userPool = new CognitoUserPool(poolData);

      const userData = {
        Username: user,
        Pool: userPool,
      };

      const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

      cognitoUser.confirmRegistration(confirmValue, true, function(error, result) {
        if (error) {
          console.log(`ConfirmRegistratoin Failure: ${error}`);
          alert(`ConfirmRegistratoin Failure: ${error}`);
          return reject(error);
        }

        console.log(`ConfirmRegistration Success: ${result}`);
        return resolve(result);
      });
    });
  }

  /**
   * // TODO signOut documentation
   *
   * @returns {Promise<void>}
   */
  static signOut() {
    return new Promise((resolve, reject) => {
      const userPool = new CognitoUserPool(poolData);

      const cognitoUser = userPool.getCurrentUser();

      if (!cognitoUser) {
        console.log(`Logout Failure: No User Logged In`);
        alert(`Logout Failure: No User Logged In`);
        return reject(new Error('No User Logged In'));
      }

      try {
        cognitoUser.signOut();

        console.log(`SignOut Success: ${cognitoUser.getUsername()} signed out`);
        return resolve();
      } catch (error) {
        alert(`SignOut Failure: ${error}`);
        console.log(`SignOut Failure: ${error}`);
        return reject(error);
      }
    });
  }

  /**
   * // TODO updateEmail documentaion
   *
   * @param {string} email
   * @returns {Promise<void>}
   */
  static updateEmail(email: string) {
    return new Promise((resolve, reject) => {
      const userPool = new CognitoUserPool(poolData);

      const cognitoUser = userPool.getCurrentUser();

      if (!cognitoUser) {
        console.log(`UpdateEmail Failure: No user session found`);
        alert(`UpdateEmail Failure: No user session found`);
        reject(`No User Session Found`);
      }

      const attributeList = [];

      const attribute = {
        Name: 'email',
        Value: email
      };

      attributeList.push(attribute);

      const userAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(attribute);

      cognitoUser.updateAttributes(attributeList, (error, result) => {
        if (error) {
          console.log(`UpdateEmail Failure: ${error}`);
          alert(`UpdateEmail Failure: ${error}`);
          return reject(error);
        }

        console.log(`UpdateEmail Success: ${result}`);
        return resolve(result);
      });
    });
  }

  /**
   * // TODO updatePassword implementation
   *
   * @param {string} oldPassword
   * @param {string} newPassword
   * @returns {Promise<void>}
   */
  static updatePassword(oldPassword: string, newPassword: string) {
    return new Promise((resolve, reject) => {
      const userPool = new CognitoUserPool(poolData);

      const cognitoUser = userPool.getCurrentUser();

      if (!cognitoUser) {
        console.log(`UpdatePassword Failure: No User Session`);
        alert(`UpdatePassword Failure: No User Session`);
        return reject(`No User Session`);
      }

      cognitoUser.changePassword(oldPassword, newPassword, (error, result) => {
        if (error) {
          console.log(error);
          alert(`UpdatePassword Failure: ${error}`);
          return reject(error);
        }

        console.log(`UpdatePassword Success: ${result}`);
        return resolve(result);
      });
    });
  }

  /**
   * // TODO forgotPassword Documentation
   *
   * @param {CognitoUser} user
   * @returns {Promise<void>}
   */
  static forgotPassword(user) {
    return new Promise((resolve, reject) => {
      const userPool = new CognitoUserPool(poolData);

      const userData = {
        Username: user,
        Pool: userPool
      };

      const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

      cognitoUser.forgotPassword({
        onSuccess: (result) => {
          console.log(`ForgotPassword Success: ${result}`);
          return resolve(result);
        },
        onFailure: (error) => {
          console.log(`ForgotPassword Failure: ${error}`);
          alert(`ForgotPassword Failure: ${error}`);
          return reject(error);
        },
      });
    });
  }

  /**
   * // TODO rememberThisDevice Documentation
   *
   * @returns {Promise<void>}
   */
  static rememberThisDevice() {
    return new Promise((resolve, reject) => {
      const userPool = new CognitoUserPool(poolData);

      const cognitoUser = userPool.getCurrentUser();

      if (!cognitoUser) {
        console.log(`RememberThisDevice Failure: No User Session`);
        alert(`RememberThisDevice Failure: No User Session`);
        return reject('No User Session');
      }

      cognitoUser.setDeviceStatusRemembered({
        onSuccess: (result) => {
          console.log(`RememberThisDevice Success: ${result}`);
          return resolve(result);
        },
        onFailure: (error) => {
          console.log(`RememberThisDevice Failure: ${error}`);
          alert(`RememberThisDevice Failure: ${error}`);
          return reject(error);
        },
      });
    });
  }

  /**
   * // TODO DoNotRememberThisDevice documentation
   *
   * @returns {Promise<void>}
   */
  static doNotRememeberThisDevice() {
    return new Promise((resolve, reject) => {
      const userPool = new CognitoUserPool(poolData);

      const cognitoUser = userPool.getCurrentUser();

      if (!cognitoUser) {
        console.log(`DoNotRememberThisDevice Failure: No User Session`);
        alert(`DoNotRememberThisDevice Failure: No User Session`);
        return reject('No User Session');
      }

      cognitoUser.setDeviceStatusNotRemembered({
        onSuccess: (result) => {
          console.log(`DoNotRememberThisDevice Success: ${result}`);
          return resolve(result);
        },
        onFailure: (error) => {
          console.log(`DoNotRememberThisDevice Success: ${error}`);
          alert(`DoNotRememberThisDevice Success: ${error}`);
          return reject(error);
        }
      });
    });
  }

  /**
   * // TODO forgetThisDevice documentation
   *
   * @returns {Promise<void>}
   */
  static forgetThisDevice() {
    return new Promise((resolve, reject) => {
      const userPool = new CognitoUserPool(poolData);

      const cognitoUser = userPool.getCurrentUser();

      if (!cognitoUser) {
        console.log(`ForgetThisDevice Failure: No User Session`);
        alert(`ForgetThisDevice Failure: No User Session`);
        return reject('No User Session');
      }

      cognitoUser.forgetDevice({
        onSuccess: (result) => {
          console.log(`ForgetThisDevice Success: ${result}`);
          return resolve(result);
        },
        onFailure: (error) => {
          console.log(`ForgetThisDevice Success: ${error}`);
          alert(`ForgetThisDevice Success: ${error}`);
          return reject(error);
        }
      });
    });
  }

  /**
   * // TODO deleteUser Documentation
   *
   * @returns {Promise<void>}
   */
  static deleteUser() {
    return new Promise((resolve, reject) => {
      const userPool = new CognitoUserPool(poolData);

      const cognitoUser = userPool.getCurrentUser();

      if (!cognitoUser) {
        console.log('DeleteUser Failure: No User Session');
        alert('DeleteUser Failure: No User Session');
        return reject('No User Session');
      }

      cognitoUser.deleteUser({
        onSuccess: (result) => {
          console.log(`DeleteUser Success: ${result}`);
          return resolve(result);
        },
        onFailure: (error) => {
          console.log(`DeleteUser Failure: ${error}`);
          alert(`DeleteUser Failure: ${error}`);
          return reject(error);
        }
      })

    });
  }

  /**
   * // TODO getUserSession documentation
   *
   * @param {CognitoUser} user
   * @returns {Promise<void>}
   */
  static getUserSession(user) {
    const userPool = new CognitoUserPool(poolData);

    return userPool.getCurrentUser();
  }
}
