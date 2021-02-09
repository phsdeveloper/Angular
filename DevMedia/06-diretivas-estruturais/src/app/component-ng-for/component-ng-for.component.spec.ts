import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNgForComponent } from './component-ng-for.component';

describe('ComponentNgForComponent', () => {
  let component: ComponentNgForComponent;
  let fixture: ComponentFixture<ComponentNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
