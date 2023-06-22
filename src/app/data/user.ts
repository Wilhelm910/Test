/*
 * @license
 * Copyright Infosim GmbH & Co. KG
 */
export interface UserDTO {
  id: number;
  username: string;
  description: string;
  firstname: string;
  lastname: string;
  email: string;
  lastModified: number; // time stamp since epoch
}
