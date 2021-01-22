import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MyWorker, MyWorkerType} from "../../shared/worker.model";

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {

  // name: string = '';
  // surname: string = '';
  // type: number = 0;
  myWorkerType = MyWorkerType;

  addWorkerForm: FormGroup;

  public mask = ['+', /[1-9]/, '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  @Output() addWorker =
    new EventEmitter<MyWorker>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addWorkerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      type: [0, Validators.required],
      phone: ['', Validators.required],
    })
  }

  submit(){
    console.log(this.addWorkerForm);
  }

  onAddWorker (){
    this.addWorker.emit(this.addWorkerForm.value);
  }

}
