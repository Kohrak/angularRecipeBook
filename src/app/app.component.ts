import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
  loadedFeature = 'recipe';
  onNavigate(feature: string){
    console.log("on navigate event triggered")
    console.log(feature)
    this.loadedFeature = feature;
  }
}
