import {Component, OnInit} from '@angular/core';
import {MyWorker, MyWorkerType} from "./shared/worker.model";
import {HttpWorkerService} from "./shared/services/http-worker.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project16';
  workers: MyWorker[];
  myWorkerType = MyWorkerType;

  constructor(private httpWorkerService: HttpWorkerService) { }

  ngOnInit() {
    this.getData();
  }

  async getData(){
    try {
      this.workers = await this.httpWorkerService.getWorkers();
      console.log(this.workers)
    } catch (e){
      console.error(e)
    }
  }

  getByType(type: number) {
    if(this.workers){
      return this.workers.filter(worker => worker.type === type);
    }
  }

  async onDeleteWorker(id: number){
    try {
      await this.httpWorkerService.deleteWorker(id)
    } catch (e) {
      console.error(e)
    } finally {
      await this.getData()
    }
  }

  async onAddWorker(worker: MyWorker){
    const id = this.workers.length > 0
      ? this.workers[this.workers.length - 1].id + 1
      : 0
    worker.id = id;
    // this.workers.push(worker);

    try {
      await this.httpWorkerService.postWorker(worker)
    } catch (e) {
      console.error(e);
    } finally {
      await this.getData()
    }
  }

  async onEditWorker(editingWorker){
    try {
      await this.httpWorkerService.putWorker(editingWorker)
    } catch (e){
      console.error(e)
    } finally {
      await this.getData()
    }
  }
}
