import { Pipe, PipeTransform } from '@angular/core';
import {MyWorker} from "../worker.model";

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(workers: MyWorker[], searchStr: string): MyWorker[] {
    if (searchStr === ''){
      return workers
    } else {
      let filteredWorkers = workers.filter(worker => {
        let nameAndSurname: string = worker.name + ' ' + worker.surname;
        nameAndSurname = nameAndSurname.toLowerCase();
        return nameAndSurname.indexOf(searchStr.toLowerCase()) !== -1
      });
      return filteredWorkers
    }
  }

}
