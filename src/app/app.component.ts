import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicloaderDirective } from './directives/dynamicloader.directive';
import { AuthlayoutComponent } from './modules/auth/pages/authlayout/authlayout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DynamicloaderDirective, {static: true}) adHost!: DynamicloaderDirective;

  loadComponent(e:any) {
    const viewContainerRef = this.adHost.viewContainerRef;
    const component=viewContainerRef.createComponent(AuthlayoutComponent);
    component.instance.data=e;
    let _compsubscribe=component.instance.closeevent.subscribe(
      (val) => {
        if(val==true)this.adHost.viewContainerRef.clear();
        _compsubscribe.unsubscribe();
      });
  }
}
