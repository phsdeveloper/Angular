import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNgSwitchRevistaComponent } from './component-ng-switch-revista.component';

describe('ComponentNgSwitchRevistaComponent', () => {
  let component: ComponentNgSwitchRevistaComponent;
  let fixture: ComponentFixture<ComponentNgSwitchRevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentNgSwitchRevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNgSwitchRevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
