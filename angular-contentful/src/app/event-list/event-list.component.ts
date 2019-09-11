import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit() {
    this.contentfulService
      .getEvents()
      .then(events => (this.events = events));
  }

  consoleLog() {
    console.log(this.events);
  }
}
