import {Component, Input, OnInit, Output, EventEmitter, AfterViewInit, ViewChild} from '@angular/core';
import {MyWorker} from '../../shared/worker.model';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css']
})
export class TableWorkersComponent implements OnInit, AfterViewInit {

  @Input() workers: MyWorker[] = [];
  @Input() title: string = '';

  @Output() editWorker =
    new EventEmitter<object>();
  @Output() deleteWorker =
    new EventEmitter<number>();

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = ['id', 'name', 'surname', 'age', 'actions'];

  constructor() { }

  ngOnInit(): void {
    if (this.workers.length > 0){
      this.dataSource = new MatTableDataSource(this.workers)
      console.log('================')
      console.log(this.dataSource)
      console.log(this.workers)
      console.log('================')
    }
  }

  calculateAge(birthday){
      const birthdayDate = new Date(birthday);
      const timeDiff = Math.abs(Date.now() - birthdayDate.getTime());
      return Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  }

  onEditWorker(worker){
    this.editWorker.emit(worker)
  }

  onDeleteWorker(id: number){
    this.deleteWorker.emit(id)
  }

}
