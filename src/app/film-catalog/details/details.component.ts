import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'details-inner',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input('info') infoBlock: string;
  @Input('filmInfo') film: string;
  // @Output() update = new EventEmitter<string>();

  value: string;
  constructor() { }

  setToParent(el) {
    // this.update.emit((el && el.innerHTML) || this.value);
    //console.log(el);
  }

  ngOnInit() {
  }

}
