import { Component } from '@angular/core';

@Component({
  selector:'pm-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
pageTitle:string ="Products Manager App";
subText : string = "Smaller text in subtitle";

getTitle():string{
  return this.pageTitle;
}
}