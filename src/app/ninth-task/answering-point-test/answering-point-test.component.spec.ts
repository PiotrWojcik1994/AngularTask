import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsweringPointTestComponent } from './answering-point-test.component';

describe('AnsweringPointTestComponent', () => {
  let component: AnsweringPointTestComponent;
  let fixture: ComponentFixture<AnsweringPointTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnsweringPointTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsweringPointTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
