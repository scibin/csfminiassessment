import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { VinylformComponent } from './components/vinylform.component';
import { VinylshowlistComponent } from './components/vinylshowlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Manually added
import { MaterialModule } from './material.module';
// import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [
    AppComponent,
    VinylformComponent,
    VinylshowlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }