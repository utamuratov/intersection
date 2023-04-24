import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'intersection';

  handleIntersection(sectionNumber: number, threshold = 75) {
    alert(
      `Section: ${sectionNumber}. Intersected ${threshold} percentage of the observed element`
    );
  }
}
