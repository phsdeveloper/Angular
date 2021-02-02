import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpntadorComponent } from './cpntador.component';

describe('CpntadorComponent', () => {
  let component: CpntadorComponent;
  let fixture: ComponentFixture<CpntadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpntadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpntadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
