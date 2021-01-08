import {Injectable} from "@angular/core";


export class LoggingService {
  constructor() {
  }

  logMessage(m: string) {
    console.log(m);
  }
}
