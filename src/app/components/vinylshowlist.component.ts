import { Component, OnInit, Input } from '@angular/core';
import { VINYLDETAIL } from '../model';

@Component({
  selector: 'app-vinylshowlist',
  templateUrl: './vinylshowlist.component.html',
  styleUrls: ['./vinylshowlist.component.css']
})
export class VinylshowlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() listofVinylRecords: VINYLDETAIL[] = [];

}
