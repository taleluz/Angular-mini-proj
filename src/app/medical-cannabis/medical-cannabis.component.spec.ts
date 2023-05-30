import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCannabisComponent } from './medical-cannabis.component';

describe('MedicalCannabisComponent', () => {
  let component: MedicalCannabisComponent;
  let fixture: ComponentFixture<MedicalCannabisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalCannabisComponent]
    });
    fixture = TestBed.createComponent(MedicalCannabisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
