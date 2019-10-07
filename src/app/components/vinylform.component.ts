import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vinylform',
  templateUrl: './vinylform.component.html',
  styles: ['./vinylform.component.css']
})
export class VinylformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() newVinylRecord = new EventEmitter();

  // Set default values for rating and album art link
  defaultRating: Number = 5;
  // NOTE: Random default image here, change if needed
  dafaultLink: String = "https://image.shutterstock.com/image-vector/dvd-icon-vector-cd-disc-260nw-788071225.jpg";


  addVinyl(form: any) {
    console.info(form.value);
    // Adding default values


    this.newVinylRecord.emit(form.value);
    form.resetForm();
  }
}