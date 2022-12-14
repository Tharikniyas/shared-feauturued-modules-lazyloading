import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  contacts !: string[];
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.contacts=this.sharedService.getContacts()
  }

}
