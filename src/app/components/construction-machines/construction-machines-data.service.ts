import {Injectable} from '@angular/core';
import {map, Observable, of, pipe, tap, UnaryFunction} from "rxjs";
import {IConstructionMachines} from "./construction-machines.interface";
import data from "@mocks/machine_data.json";
import {IOptions} from "@components/construction-machines/options.interface";

@Injectable({
  providedIn: 'root'
})
export class ConstructionMachinesDataService {

  count = 0;

  constructor() {
  }

  getData(): Observable<IConstructionMachines[]> {
    return of(data);
  }

  onExpiredFilter(options: IOptions): Observable<IConstructionMachines[]> {
    return this.getData().pipe(
      map((results: IConstructionMachines[]) => {
        if (options.warranty !== null || options.service_contract !== null) {
          return results.filter(data => {
            if (options.warranty !== null && options.service_contract !== null) {
              return !data.warranty && !data.service_contract;
            } else if (options.service_contract !== null) {
              return !data.service_contract;
            }
            return !data.warranty;
          })
        }
        return results;
      }),
      this.changeCount()
    );
  }

  changeCount(): UnaryFunction<any, any>{
    return pipe(
      tap((data: IConstructionMachines[]) => {
        this.count = data.length;
        return data;
      })
    );
  }


}
