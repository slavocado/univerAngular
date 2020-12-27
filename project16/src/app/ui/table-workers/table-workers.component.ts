import {Component, Input, OnInit} from '@angular/core';
import {MyWorker} from "../../../../../project15/src/app/shared/worker.model";

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css']
})
export class TableWorkersComponent implements OnInit {

  @Input() workers: MyWorker[] = [];
  @Input() title: string = '';

  displayedColumns: string[] = ['id', 'name', 'surname', 'age'];

  constructor() { }

  ngOnInit(): void {
  }

}
