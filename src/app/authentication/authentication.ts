const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const { getPoolData } = require('pooldata');

export class Authentication {

  /**
   * // TODO register documentation
   *
   * @param email
   * @param user
   * @param password
   * @returns {Promise<void>}
   */
  static async register(email: string, user: string, password: string) {
    const userPool = getPoolData();

    const attributeList = [];

    const dataEmail = {
      Name: "email",
      Value: email,
    };

    const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

    attributeList.push(attributeEmail);

    try {
      const res = await userPool.signUp(user, password, attributeList, null);

      const cognitoUser = res.user;

      return console.log(`Register success! Username is ${cognitoUser.getUserName()}`);
    } catch (err) {
      return console.log(`Register failure. Error code is ${err.code}`);
    }
  }

  /**
   * // TODO login documentation
   *
   * @param {string} user
   * @param {string} password
   * @returns {Promise<void>}
   */
  static async login(user: string, password: string) {
    // TODO login implementation
  }

  /**
   * // TODO resendConfirmation documentation
   *
   * @param {string} user
   * @returns {Promise<void>}
   */
  static async resendConfirmation(user: CognitoUser) {
    // TODO resendConfirmation implementation
  }

  /**
   * // TODO confirmRegistration documentation
   *
   * @param {string} user
   * @param {string} confirmValue
   * @returns {Promise<void>}
   */
  static async confirmRegistration(user: CognitoUser, confirmValue: string) {
    // TODO confirmRegistration implementation
  }

  /**
   * // TODO logout documentation
   *
   * @returns {Promise<void>}
   */
  static async logout() {
    // TODO logout implementation
  }

  /**
   * // TODO updateEmail documentaion
   *
   * @param {string} email
   * @returns {Promise<void>}
   */
  static async updateEmail(email: string) {
    // TODO updateEmail implementation
  }

  /**
   * // TODO updatePassword implementation
   *
   * @param {string} oldPassword
   * @param {string} newPassword
   * @returns {Promise<void>}
   */
  static async updatePassword(oldPassword: string, newPassword: string) {
    // TODO updatePassword implementation
  }

  /**
   * // TODO forgotPassword Documentation
   *
   * @param {CognitoUser} user
   * @returns {Promise<void>}
   */
  static async forgotPassword(user: CognitoUser) {
    // TODO forgotPassword implementation
  }

  /**
   * // TODO rememberThisDevice Documentation
   *
   * @returns {Promise<void>}
   */
  static async rememberThisDevice() {
    // TODO rememberThisDevice implementation
  }

  /**
   * // TODO forgetThisDevice documentation
   *
   * @returns {Promise<void>}
   */
  static async forgetThisDevice() {
    // TODO forgetThisDevice implementation
  }

  /**
   * // TODO deleteUser Documentation
   *
   * @returns {Promise<void>}
   */
  static async deleteUser() {
    // TODO deleteUser Implementation
  }

  /**
   * // TODO getUserSession documentation
   *
   * @param {CognitoUser} user
   * @returns {Promise<void>}
   */
  static async getUserSession(user: CognitoUser) {

  }
}
