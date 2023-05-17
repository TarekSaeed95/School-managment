import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { schadule } from 'src/app/data/schadule';

@Component({
  selector: 'app-scadules',
  templateUrl: './scadules.component.html',
  styleUrls: ['./scadules.component.css']
})
export class ScadulesComponent implements OnChanges {
  @Input()schadule:any;
  schadules:schadule[]=[];
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['schadule'].firstChange==false){
      this.schadules.push(this.schadule);
    }
  }
}
