import {Component, Input, OnInit} from '@angular/core';
import {MyWorker} from '../../shared/worker.model';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css']
})
export class TableWorkersComponent implements OnInit {

  @Input() workers: MyWorker[] = [];
  @Input() title: string = '';

  displayedColumns: string[] = ['id', 'name', 'surname', 'age', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  calculateAge(birthday){
      const birthdayDate = new Date(birthday);
      const timeDiff = Math.abs(Date.now() - birthdayDate.getTime());
      return Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  }

}
