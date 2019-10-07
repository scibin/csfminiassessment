import { Component } from '@angular/core';
import { VINYLDETAIL } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniassessment';

  // Private function compare to be used for sorting
  // Code from: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
  private compare( a: VINYLDETAIL, b: VINYLDETAIL ): number {
    if ( a.aArtist < b.aArtist ){
      return -1;
    }
    if ( a.aArtist > b.aArtist ){
      return 1;
    }
    return 0;
  };
  
  // Initialize both lists to empty array
  vinylList: VINYLDETAIL[] = [];
  vinylListSorted: VINYLDETAIL[] = [];

  addVR(event: VINYLDETAIL) {
    // Pushes new entry into vinylList
    this.vinylList.push(event);

    // Sorts the list everytime a new entry is added
    this.vinylListSorted = this.vinylList.sort(this.compare);

    // Resets the form
    
    // Debugging tools
    // console.info(typeof this.vinylList);
    //console.info(this.vinylListSorted);
  }
}

