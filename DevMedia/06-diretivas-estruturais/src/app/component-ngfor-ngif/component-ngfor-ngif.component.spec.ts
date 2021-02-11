import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNgforNgifComponent } from './component-ngfor-ngif.component';

describe('ComponentNgforNgifComponent', () => {
  let component: ComponentNgforNgifComponent;
  let fixture: ComponentFixture<ComponentNgforNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentNgforNgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNgforNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
