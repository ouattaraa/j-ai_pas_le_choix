import { Component, OnInit, Input } from '@angular/core';
import { expandCollapse } from './animations';


@Component({
  selector: 'app-contain',
  templateUrl: './contain.component.html',
  styleUrls: ['./contain.component.css'],
  animations:[
    expandCollapse
  ]
})
export class ContainComponent implements OnInit {

  @Input('title') title:'TU ES RESPONSABLE.';
  isExpanded:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isExpanded=!this.isExpanded;
  }

}
