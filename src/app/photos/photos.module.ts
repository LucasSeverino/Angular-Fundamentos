import { NgModule } from '@angular/core';

import { PhotoService } from './photo/photo.service';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';

@NgModule({
  declarations: [],
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule
  ],
  providers: [PhotoService]
})

export class PhotosModule {

}
