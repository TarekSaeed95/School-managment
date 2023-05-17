import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  toggleBtn: boolean = true;
  @Output() toggleEvent: EventEmitter<boolean> = new EventEmitter(false);
  ngOnInit(): void {
    if (window.innerWidth > 800) this.toggleBtn = false;
    else this.toggleBtn = true;
    this.toggleEvent.emit(this.toggleBtn);
  }
  toggler($event: any) {
    this.toggleBtn = $event.target.checked == true ? true : false;
    this.toggleEvent.emit(this.toggleBtn);
  }
  logout() {}
}
