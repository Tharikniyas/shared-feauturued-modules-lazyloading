import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css']
})
export class EntryPageComponent implements OnInit {
  @Input() name!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
