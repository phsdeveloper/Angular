import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNgSwitchLivroComponent } from './component-ng-switch-livro.component';

describe('ComponentNgSwitchLivroComponent', () => {
  let component: ComponentNgSwitchLivroComponent;
  let fixture: ComponentFixture<ComponentNgSwitchLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentNgSwitchLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNgSwitchLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
