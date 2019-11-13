import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LugumeComponent } from './ex/lugume/lugume.component';
import { ListeLegumesComponent } from './ex/liste-legumes/liste-legumes.component';

@NgModule({
  declarations: [
    AppComponent,
    LugumeComponent,
    ListeLegumesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
