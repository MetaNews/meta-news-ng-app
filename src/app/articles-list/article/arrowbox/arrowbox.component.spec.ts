import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowboxComponent } from './arrowbox.component';

describe('ArrowboxComponent', () => {
  let component: ArrowboxComponent;
  let fixture: ComponentFixture<ArrowboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
