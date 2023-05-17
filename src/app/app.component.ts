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
  //ViewChild to catch dom element can take directive or Component
  //static true === ngAfter
  //DynamicloaderDirective == ref to dom element

  loadComponent(e:any) {
    const viewContainerRef = this.adHost.viewContainerRef;
    const component=viewContainerRef.createComponent(AuthlayoutComponent);
    component.instance.data=e;
    //component.instance === inputs & outputs Fields of Component
    let _compsubscribe=component.instance.closeevent.subscribe(
      (val) => {
        if(val==true)viewContainerRef.clear(); // delete Ref with Component
        _compsubscribe.unsubscribe(); //removeEventListener
      });
  }
}
