import { AppRoutingModule } from './app.routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PhotosModule } from './photos/photos.module';
import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { CoreModule } from './home/../core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
