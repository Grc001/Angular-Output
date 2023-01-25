import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateOnomatopiaComponent } from './create-onomatopia3/create-onomatopia3.component';
import { OnolistComponent } from './onolist/onolist.component';
@NgModule({
  declarations: [AppComponent, CreateOnomatopiaComponent, OnolistComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
