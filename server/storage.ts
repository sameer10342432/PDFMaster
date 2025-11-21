import { randomUUID } from "crypto";

export interface IStorage {
  // No storage methods needed for this application
  // Tools are stateless and process files on-the-fly
}

export class MemStorage implements IStorage {
  constructor() {
    // No state needed - all operations are stateless
  }
}

export const storage = new MemStorage();
