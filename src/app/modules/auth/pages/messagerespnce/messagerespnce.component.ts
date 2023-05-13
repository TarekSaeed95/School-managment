import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-messagerespnce',
  templateUrl: './messagerespnce.component.html',
  styleUrls: ['./messagerespnce.component.css']
})
export class MessagerespnceComponent {
  @Input()message:string='';
  @Input()type:string='';

}
