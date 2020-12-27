import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {

  someDataVar: string = ''

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddWorkerDialog, {
      width: '250px',
      data: {name: 'eeee'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.someDataVar = result;
    });
  }

}

@Component({
  selector: 'add-worker-dialog',
  templateUrl: 'add-worker-dialog.html',
})
export class AddWorkerDialog {

  constructor(
    public dialogRef: MatDialogRef<AddWorkerDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {}
  // @Inject(MAT_DIALOG_DATA) public data: DialogData

  onNoClick(): void {
    this.dialogRef.close();
  }

}
