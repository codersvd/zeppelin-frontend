import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionMachinesComponent } from '../construction-machines.component';

describe('ConstructionMachinesComponent', () => {
  let component: ConstructionMachinesComponent;
  let fixture: ComponentFixture<ConstructionMachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionMachinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
