import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule, MatInputModule, MatFormFieldModule,
  MatCheckboxModule, MatDatepickerModule,
  MatRadioModule, MatIconModule, MatButtonModule
} from '@angular/material';

import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';

const MATERIAL = [
  FlexLayoutModule,
  MatToolbarModule, MatInputModule, MatFormFieldModule,
  MatSliderModule, MatCheckboxModule, MatRadioModule,
  MatDatepickerModule, MatIconModule, MatButtonModule,
  MatCardModule
]

@NgModule({
    imports: MATERIAL,
    exports: MATERIAL
})

export class MaterialModule {
    
}


// File original modules:
// import { NgModule } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatInputModule } from '@angular/material/input';
// import { MatSliderModule } from '@angular/material/slider';

// const MATERIAL = [
//     MatButtonModule,
//     MatIconModule,
//     MatToolbarModule,
//     MatInputModule,
//     MatSliderModule
// ];



// import { NgModule } from "@angular/core";

// import { FlexLayoutModule } from '@angular/flex-layout';
// import {
//   MatToolbarModule, MatInputModule, MatFormFieldModule,
//   MatSliderModule, MatCheckboxModule, MatDatepickerModule,
//   MatRadioModule, MatIconModule, MatButtonModule
// } from '@angular/material';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';

// const MODULE = [
//   FlexLayoutModule,
//   MatToolbarModule, MatInputModule, MatFormFieldModule,
//   MatSliderModule, MatCheckboxModule, MatRadioModule,
//   MatDatepickerModule, MatMomentDateModule, MatIconModule,
//   MatButtonModule
// ]

// @NgModule({
//   imports: MODULE,
//   exports: MODULE,
// })
// export class MaterialModule { }