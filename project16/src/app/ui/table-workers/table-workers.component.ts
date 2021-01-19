import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MyWorker} from '../../shared/worker.model';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css']
})
export class TableWorkersComponent implements OnInit {

  @Input() workers: MyWorker[] = [];
  @Input() title: string = '';

  @Output() editWorker =
    new EventEmitter<object>();

  displayedColumns: string[] = ['id', 'name', 'surname', 'age', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  calculateAge(birthday){
      const birthdayDate = new Date(birthday);
      const timeDiff = Math.abs(Date.now() - birthdayDate.getTime());
      return Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  }

  onEditWorker(worker){
    this.editWorker.emit(worker)
  }

}
