import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-edit',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() name: string;
  @Input() surname: string;
  @Input() id: number;
  @Output() editWorker =
    new EventEmitter<object>();

  closeResult = '';

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  onEditWorker(id:number, name: string, surname: string){
    this.editWorker.emit({id,name,surname})
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  close(modal){
    if(this.name != '' && this.surname != ''){
      this.onEditWorker(this.id, this.name, this.surname)
      modal.close()
    }
  }


}
