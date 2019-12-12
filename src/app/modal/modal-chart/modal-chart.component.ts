import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DIR_DOCUMENT_FACTORY } from '@angular/cdk/bidi/typings/dir-document-token';

@Component({
  selector: 'app-modal-chart',
  templateUrl: './modal-chart.component.html',
  styleUrls: ['./modal-chart.component.scss']
})
export class ModalChartComponent implements OnInit {

  @Input() urlIframe;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
    if (document.querySelector('.modal-open')) {
      setTimeout(() => {
        document.querySelector('.modal-dialog').classList.add('extended-modal') ;
      }, 350);
    }
  }
  close() {
    this.activeModal.close();
  }

}
