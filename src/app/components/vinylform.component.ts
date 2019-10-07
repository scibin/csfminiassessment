import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vinylform',
  templateUrl: './vinylform.component.html',
  styleUrls: ['./vinylform.component.css']
})
export class VinylformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() newVinylRecord = new EventEmitter();

  // Set default values for rating and album art link
  // NOTE: Random default image here, change if needed
  defaultRating: Number = 5;
  dafaultLink: String = "https://image.shutterstock.com/z/stock-vector-new-gramophone-vinyl-lp-record-with-red-label-black-musical-long-play-album-disc-rpm-old-226558723.jpg";


  addVinyl(form: any) {
    console.info(form.value);
    // Assign default values to rating and album art link if user has left it blank
    // Note: Will only add default values if fields are empty
    // If fields are invalid, then it cannot do anything!
    if (!form.value['aLink']) {
      form.value['aLink'] = this.dafaultLink;
    }

    if (!form.value['aRating']) {
      form.value['aRating'] = this.defaultRating;      
    }

    this.newVinylRecord.emit(form.value);
    form.resetForm();
  }
}