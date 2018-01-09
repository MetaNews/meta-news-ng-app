import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickTabsComponent } from './click-tabs.component';

describe('ClickTabsComponent', () => {
  let component: ClickTabsComponent;
  let fixture: ComponentFixture<ClickTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
