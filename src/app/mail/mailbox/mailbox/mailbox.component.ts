import { Component, OnInit } from '@angular/core';
import { MailboxService } from './mailbox.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  inboxMails!:string[];
  constructor(private mailService:MailboxService) { }

  ngOnInit(): void {
    this.inboxMails=this.mailService.getInboxMails();
  }

}
