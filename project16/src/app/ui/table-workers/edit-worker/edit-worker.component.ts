import {Component, Inject, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyWorkerType} from "../../../shared/worker.model";
import {MyWorker} from "../../../shared/worker.model";
import {AddWorkerDialog} from "../../add-worker/add-worker.component";

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {

  myWorkerType = MyWorkerType;
  @Input() worker: MyWorker;
  @Output() editWorker =
    new EventEmitter<MyWorker>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditWorkerDialog, {
      width: '350px',
      data: {heading: 'Edit worker', worker: this.worker}
    });

    dialogRef.afterClosed().subscribe(result => {
      result.type = +result.type;
      result.id = this.worker.id;
      this.edit(result);
    });
  }

  edit(worker: MyWorker){
    this.editWorker.emit(worker);
  }
}

@Component({
  selector: 'edit-worker-dialog',
  templateUrl: 'edit-worker-dialog.html',
})
export class EditWorkerDialog implements OnInit{

  editWorkerForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  public mask = ['+', /[1-9]/, '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  getErrorMessage(str: string) {
    if (this.editWorkerForm.controls[str].hasError('required')) {
      return 'You must enter a value';
    } else if (this.editWorkerForm.controls[str].hasError('email') ) {
      return 'enter valid email';
    }
  }

  constructor(
    public dialogRef: MatDialogRef<EditWorkerDialog>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder) {}
  // @Inject(MAT_DIALOG_DATA) public data: DialogData

  worker: MyWorker = this.data.worker;

  ngOnInit(): void {
    this.editWorkerForm = this.fb.group({
      name: [this.worker.name, Validators.required],
      surname: [this.worker.surname, Validators.required],
      patronymic: [this.worker.patronymic, Validators.required],
      type: [+this.worker.type, Validators.required],
      phone: [this.worker.phone, Validators.required],
      email: [this.worker.email, [Validators.required, Validators.email]],
      birthday: [this.worker.birthday, Validators.required]
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
