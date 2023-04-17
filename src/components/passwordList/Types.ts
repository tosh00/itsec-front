export interface Credentials {
  username: string,
  password: string,
  timestamp: string
}

export interface CredentialsResponse {
  userData: Credentials[];
}