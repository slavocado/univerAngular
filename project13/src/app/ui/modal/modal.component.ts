import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-edit',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  editWorkerForm: FormGroup;

  public mask = ['+', /[1-9]/, '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  @Input() name: string;
  @Input() surname: string;
  @Input() id: number;
  @Input() phone: string;
  @Output() editWorker =
    new EventEmitter<object>();

  closeResult = '';

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.editWorkerForm = this.fb.group({
      newName: [this.name, Validators.required],
      newSurname: [this.surname, Validators.required],
      newPhone: [this.phone, Validators.required],
    })
  }

  onEditWorker(id: number, name: string, surname: string, phone: string) {
    this.editWorker.emit({id, name, surname, phone})
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  close(modal) {
    if(this.editWorkerForm.value.newName != '' && this.editWorkerForm.value.newSurname != '' && this.editWorkerForm.value.newPhone){
      this.onEditWorker(this.id, this.editWorkerForm.value.newName, this.editWorkerForm.value.newSurname, this.editWorkerForm.value.newPhone)
      modal.close()
    }
  }
}
