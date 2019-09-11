import { Component, OnInit } from '@angular/core';
import { DjangoService } from '../django.service';
import { getLocaleDateFormat } from '@angular/common';
import { Event } from '../model/event';

@Component({
  selector: 'app-events-django',
  templateUrl: './events-django.component.html',
  styleUrls: ['./events-django.component.scss']
})
export class EventsDjangoComponent implements OnInit {
  event: Event;
  rawResponse: any;

  constructor(private djangoService: DjangoService) {}

  ngOnInit() {
    this.getEventData();
  }

  getEventData() {
    this.djangoService.getEvents().subscribe(res => {
      this.rawResponse = res;
      console.log(this.rawResponse);
    });
  }
}
