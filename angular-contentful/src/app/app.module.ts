import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentfulService } from './contentful.service';
import { EventListComponent } from './event-list/event-list.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EventsDjangoComponent } from './events-django/events-django.component';

@NgModule({
  declarations: [AppComponent, EventListComponent, EventsDjangoComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule {}
