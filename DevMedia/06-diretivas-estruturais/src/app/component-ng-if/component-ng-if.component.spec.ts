import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNgIfComponent } from './component-ng-if.component';

describe('ComponentNgIfComponent', () => {
  let component: ComponentNgIfComponent;
  let fixture: ComponentFixture<ComponentNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentNgIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
