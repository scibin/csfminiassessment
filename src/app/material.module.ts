import { NgModule } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatToolbarModule } from '@angular/material/toolbar';


const MATERIAL = [
    // MatButtonModule,
    // MatIconModule,
    // MatToolbarModule
];

@NgModule({
    imports: MATERIAL,
    exports: MATERIAL
})

export class MaterialModule {
    
}