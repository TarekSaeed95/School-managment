import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-authlayout',
  templateUrl: './authlayout.component.html',
  styleUrls: ['./authlayout.component.css']
})
export class AuthlayoutComponent implements OnInit{
  @Input() data: any;
  @Input() close: any;
  @Output()closeevent:EventEmitter<boolean>=new EventEmitter(false);
  flag=false;
  ngOnInit(): void {
    if(this.data.page==="login")this.flag=true ; else this.flag=false;
  }
  showlogin(){
    this.flag=true;
  }
  showregister(){
    this.flag=false
  }
  closeauth(){
    this.closeevent.emit(true);
  }
  forgetpassword(){}
}
