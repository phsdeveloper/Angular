import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasatributosComponent } from './diretivasatributos.component';

describe('DiretivasatributosComponent', () => {
  let component: DiretivasatributosComponent;
  let fixture: ComponentFixture<DiretivasatributosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasatributosComponent]
    });
    fixture = TestBed.createComponent(DiretivasatributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
