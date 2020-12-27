import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MyWorker} from "../worker.model";

@Injectable({
  providedIn: 'root'
})
export class HttpWorkerService {
  routeApi = 'http://localhost:3000/workers';
  constructor(private http: HttpClient) { }

  getWorkers(): Promise<any> {
    return this.http.get(this.routeApi).toPromise();
  }

  postWorker(data: MyWorker){
    return this.http.post(this.routeApi, data).toPromise();
  }

  deleteWorker(id: number){
    const url = `${this.routeApi}/${id}`
    return this.http.delete(url).toPromise();
  }

  putWorker(worker: MyWorker){
    const url = `${this.routeApi}/${worker.id}`
    return this.http.put(url, worker).toPromise();
  }
}

