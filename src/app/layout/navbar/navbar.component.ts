import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output()openauthlayout:EventEmitter<any>=new EventEmitter();
  public openlogin(){
    this.openauthlayout.emit({open:true,page:'login'})
  }
  public openregister(){
    this.openauthlayout.emit({open:true,page:'register'})
  }
}
