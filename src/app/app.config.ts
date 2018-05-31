import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {

  // Environment
  private readonly ENVIRONMENT = 'dev';

  // Base API URL
  public static readonly API_URL: string;

  // API Routes
  public readonly GET_ARTICLES = 'articles';

  constructor() {
    if (this.ENVIRONMENT === 'dev') {
      AppConfig.API_URL = 'https://gi4ftaly2c.execute-api.us-east-1.amazonaws.com/dev/';
    }
  }

}
