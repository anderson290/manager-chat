import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseTicketModalComponent } from './close-ticket-modal.component';

describe('CloseTicketModalComponent', () => {
  let component: CloseTicketModalComponent;
  let fixture: ComponentFixture<CloseTicketModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseTicketModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseTicketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
