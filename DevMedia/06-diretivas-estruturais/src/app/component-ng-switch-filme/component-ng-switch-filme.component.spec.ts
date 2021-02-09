import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNgSwitchFilmeComponent } from './component-ng-switch-filme.component';

describe('ComponentNgSwitchFilmeComponent', () => {
  let component: ComponentNgSwitchFilmeComponent;
  let fixture: ComponentFixture<ComponentNgSwitchFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentNgSwitchFilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNgSwitchFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
