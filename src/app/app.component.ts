import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <input id="get" type="text"><br>
 
  <button (click)="onClickMe()"> Click Me </button><br>
  <p>{{Msg}}</p>`
 
})
export class AppComponent {

  Msg ='';
  value='';

  
  onClickMe()
  {
    
    this.Msg=((document.getElementById("get")as HTMLInputElement).value);
  }
  title = 'myapp';
}
