export interface MyWorker {
  name: string;
  surname: string;
  type: number;
  id?: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager
}

export let MyWorkerDatabase: MyWorker[] = [
  {id: 1, name: 'Ivan', surname: 'Ivanov', type: 0},
  {id: 2, name: 'Petr', surname: 'petrov', type: 1},
  {id: 3, name: 'Sidor', surname: 'Sidorov', type: 2},
  {id: 4, name: 'Vasiliy', surname: 'Vasiliev', type: 3},
]
