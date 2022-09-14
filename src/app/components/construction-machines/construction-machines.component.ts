import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IConstructionMachines} from "./construction-machines.interface";
import {ConstructionMachinesDataService} from "./construction-machines-data.service";
import {IOptions} from "@components/construction-machines/options.interface";

@Component({
  selector: 'app-construction-machines',
  templateUrl: './construction-machines.component.html',
  styleUrls: ['./construction-machines.component.scss'],
})
export class ConstructionMachinesComponent implements OnInit {

  machines!: Observable<IConstructionMachines[]>;
  readonly VALID = "valid";
  readonly EXPIRED = "expired";
  allExpired = false;
  contractExpired = false;
  warrantyExpired = false;

  statuses = [];

  constructor(private constructionMachinesDataService: ConstructionMachinesDataService) {
  }

  get count() {
    return this.constructionMachinesDataService.count;
  }

  ngOnInit(): void {
    this.machines = this.constructionMachinesDataService.getData().pipe(
      this.constructionMachinesDataService.changeCount()
    );

    this.statuses = [
      {label: this.VALID, value: true},
      {label: this.EXPIRED, value: false},
    ]
  }

  isExpired(status: boolean): string {
    return status ? this.VALID : this.EXPIRED;
  }

  onAllExpired() {
    this.contractExpired = false;
    this.warrantyExpired = false;
    const options: IOptions = {
      service_contract: this.allExpired ? false : null,
      warranty: this.allExpired ? false : null
    }
    this.machines = this.constructionMachinesDataService.onExpiredFilter(options);
  }

  onContractExpired() {
    this.allExpired = false;
    this.warrantyExpired = false;
    const options: IOptions = {
      service_contract: this.contractExpired ? false : null,
      warranty: null
    }

    this.machines = this.constructionMachinesDataService.onExpiredFilter(options);
  }

  onWarrantyExpired() {
    this.allExpired = false;
    this.contractExpired = false;
    const options: IOptions = {
      service_contract: null,
      warranty: this.warrantyExpired ? false : null
    }

    this.machines = this.constructionMachinesDataService.onExpiredFilter(options);
  }
}
