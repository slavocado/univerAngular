import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MyWorker } from '../../shared/worker.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css'],
})
export class TableWorkersComponent implements OnInit, AfterViewInit, OnChanges {
  // @Input() workers: MyWorker[] = []; - теперь не нужно
  @Input() title: string = '';

  @Output() editWorker = new EventEmitter<object>();
  @Output() deleteWorker = new EventEmitter<number>();

  @Input() dataSource: MatTableDataSource<any>; // а это делаем входным параметром

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = ['id', 'name', 'surname', 'age', 'actions'];

  constructor() {}

  /**
   * Повесить привязку сортировки на ngAfterViewInit нельзя т.к. dataSource будет получен в неопределенное время
   * по этому используем ngOnChanges https://angular.io/guide/lifecycle-hooks
   * и смотрим ситуацию, когда значенрие входного параметра dataSource изменилось с undefined на не undefined
   * т.е. пришло от родителя
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.dataSource.previousValue === undefined &&
      changes.dataSource.currentValue !== undefined
    ) {
      this.dataSource.sort = this.sort;
    }
  }

  ngOnInit(): void {
    // if (this.workers.length > 0) {
    //   this.dataSource = new MatTableDataSource(this.workers);
    //   console.log('================');
    //   console.log(this.dataSource);
    //   console.log(this.workers);
    //   console.log('================');
    // }
  }

  calculateAge(birthday) {
    const birthdayDate = new Date(birthday);
    const timeDiff = Math.abs(Date.now() - birthdayDate.getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
  }

  onEditWorker(worker) {
    this.editWorker.emit(worker);
  }

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }
}
