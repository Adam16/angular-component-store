import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/Gallery.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [AppComponent, GalleryComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
