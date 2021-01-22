export interface MyWorker {
  name: string;
  surname: string;
  patronymic: string;
  type: number;
  phone: string;
  email: string;
  birthday: Date;
  age?: number;
  id?: number;
}

export enum MyWorkerType {
  tech,
  sales,
  delivery,
  legal
}

// export let MyWorkerDatabase: MyWorker[] = [
//   {id: 1, name: 'Ivan', surname: 'Ivanov', phone: '+8(999) 333-3333', type: 0},
//   {id: 2, name: 'Petr', surname: 'petrov', phone: '+8(999) 444-3444', type: 1},
//   {id: 3, name: 'Sidor', surname: 'Sidorov',phone: '+8(999) 777-6663', type: 2},
//   {id: 4, name: 'Vasiliy', surname: 'Vasiliev',phone: '+8(999) 388-3645', type: 3},
// ]
