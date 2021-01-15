import {Component, Inject, OnInit, Output, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyWorkerType} from "../../shared/worker.model";
import {MyWorker} from "../../shared/worker.model";

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {

  myWorkerType = MyWorkerType;

  @Output() addWorker =
    new EventEmitter<MyWorker>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddWorkerDialog, {
      width: '350px',
      data: {heading: 'Add worker'}
    });

    dialogRef.afterClosed().subscribe(result => {
      result.type = +result.type;
      console.log(result);
      this.submit(result);
    });
  }

  submit(worker: MyWorker){
    this.addWorker.emit(worker);
  }

}

@Component({
  selector: 'add-worker-dialog',
  templateUrl: 'add-worker-dialog.html',
})
export class AddWorkerDialog implements OnInit{

  addWorkerForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  public mask = ['+', /[1-9]/, '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  getErrorMessage(str: string) {
    if (this.addWorkerForm.controls[str].hasError('required')) {
      return 'You must enter a value';
    } else if (this.addWorkerForm.controls[str].hasError('email') ) {
      return 'enter valid email';
    }
  }

  constructor(
    public dialogRef: MatDialogRef<AddWorkerDialog>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder) {}
  // @Inject(MAT_DIALOG_DATA) public data: DialogData

  ngOnInit(): void {
    this.addWorkerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      patronymic: ['', Validators.required],
      type: [0, Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', Validators.required]
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
