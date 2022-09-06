import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  getContacts():string[] {
    return [
      "Alice (alice@example.com)",
      "Bob (bob@example.com)",
      "Chris (chris@example.com)"
      ];
  }
}
