import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { VinylformComponent } from './components/vinylform.component';
import { VinylshowlistComponent } from './components/vinylshowlist.component';

@NgModule({
  declarations: [
    AppComponent,
    VinylformComponent,
    VinylshowlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
