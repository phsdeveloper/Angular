import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNgSwitchComponent } from './component-ng-switch.component';

describe('ComponentNgSwitchComponent', () => {
  let component: ComponentNgSwitchComponent;
  let fixture: ComponentFixture<ComponentNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentNgSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
