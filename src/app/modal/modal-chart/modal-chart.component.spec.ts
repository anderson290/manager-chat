import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChartComponent } from './modal-chart.component';

describe('ModalChartComponent', () => {
  let component: ModalChartComponent;
  let fixture: ComponentFixture<ModalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
