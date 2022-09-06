import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailboxService {

  constructor() { }
  getInboxMails():string[] {
    return [
      "Welcome to MailClient",
      "Daily Newsletter",
      "20% discount on this product"
      ]; 
  }
}
