import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryTestComponent } from './laboratory-test.component';

describe('LaboratoryTestComponent', () => {
  let component: LaboratoryTestComponent;
  let fixture: ComponentFixture<LaboratoryTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaboratoryTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaboratoryTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
