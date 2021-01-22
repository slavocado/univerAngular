import { Component, OnInit } from '@angular/core';
import { MyWorker, MyWorkerType } from './shared/worker.model';
import { HttpWorkerService } from './shared/services/http-worker.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project16';
  workers: MyWorker[];
  myWorkerType = MyWorkerType;

  dataSources: {
    type: number | string;
    source: MatTableDataSource<any>;
  }[] = [];

  constructor(private httpWorkerService: HttpWorkerService) {}

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      this.workers = await this.httpWorkerService.getWorkers();
      console.log(this.workers)
    } catch (e) {
      console.error(e);
    }
    /**
     * После получения даных про работников из АПИ формируем массив dataSource для таблиц. Это сложно сделать
     * в дочерних компонентах т.к. данные из АПИ приходят условно в любое время а не при инициализации,
     * а на их основе нужно сформировать dataSource
     */
    let values = Object.values(this.myWorkerType).filter(
      (val) => typeof val === 'number'
    );
    this.dataSources = [];
    for (let value in values) {
      this.dataSources.push({
        type: +value,
        source: new MatTableDataSource(this.getByType(+value)),
      });
    }
  }

  /**
   * Функция выдает  выдавала нужный dataSource и отправляет его в дочерний компонент
   * (аналогично предыдущему решению) толькол dataSource
   * @param type
   */
  getDataSourceByType(type: number) {
    return this.dataSources.find((ds) => ds.type == type)?.source;
  }

  getByType(type: number) {
    if (this.workers) {
      return this.workers.filter((worker) => worker.type === type);
    }
  }

  async onDeleteWorker(id: number) {
    try {
      await this.httpWorkerService.deleteWorker(id);
    } catch (e) {
      console.error(e);
    } finally {
      await this.getData();
    }
  }

  async onAddWorker(worker: MyWorker) {
    const id =
      this.workers.length > 0
        ? this.workers[this.workers.length - 1].id + 1
        : 0;
    worker.id = id;
    // this.workers.push(worker);

    try {
      await this.httpWorkerService.postWorker(worker);
    } catch (e) {
      console.error(e);
    } finally {
      await this.getData();
    }
  }

  async onEditWorker(editingWorker) {
    try {
      await this.httpWorkerService.putWorker(editingWorker);
    } catch (e) {
      console.error(e);
    } finally {
      await this.getData();
    }
  }
}
