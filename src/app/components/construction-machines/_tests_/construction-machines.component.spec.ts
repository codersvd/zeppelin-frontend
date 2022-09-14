import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {ConstructionMachinesComponent} from '../construction-machines.component';
import {of, pipe} from "rxjs";
import {ConstructionMachinesDataService} from "@components/construction-machines/construction-machines-data.service";

const ConstructionMachinesServiceStub = {
  getData() {
    const machines = [{
      "id": 1,
      "guid": "104b2ed7-969d-4e3a-972a-531afb186906",
      "customer": "Kassulke & Sohn",
      "asset_type": "Dump Truck",
      "serial_number": "1919-0038-4721-0Xpr",
      "service_contract": true,
      "warranty": true
    }];
    return of(machines);
  },
  changeCount() {
    return pipe(
    );
  }
};

describe('ConstructionMachinesComponent', () => {
  let component: ConstructionMachinesComponent;
  let fixture: ComponentFixture<ConstructionMachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConstructionMachinesComponent],
      providers: [{provide: ConstructionMachinesDataService, useValue: ConstructionMachinesServiceStub}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init machines list', fakeAsync(() => {
    component.machines$.subscribe(data => {
      expect(data.length).not.toBeNull();
      expect(data.length).toEqual(1);
    })
    tick();
  }))
});
