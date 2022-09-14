import { TestBed } from '@angular/core/testing';
import {ConstructionMachinesDataService} from "@components/construction-machines/construction-machines-data.service";


describe('ConstructionMachinesService', () => {
  let service: ConstructionMachinesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstructionMachinesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
