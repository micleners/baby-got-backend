import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDjangoComponent } from './events-django.component';

describe('EventsDjangoComponent', () => {
  let component: EventsDjangoComponent;
  let fixture: ComponentFixture<EventsDjangoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsDjangoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDjangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
