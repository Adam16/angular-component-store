import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { GalleryStore } from './gallery.store';

@Component({
  selector: 'gallery',
  templateUrl: 'gallery.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GalleryStore],
})
export class GalleryComponent {
  readonly vm$ = this.galleryStore.vm$;

  constructor(private readonly galleryStore: GalleryStore) {
    this.galleryStore.setIdle(false);
    setTimeout(() => {
      this.galleryStore.setMedia(['asdad']);
    }, 5000);

    setTimeout(() => {
      this.galleryStore.setIdle(true);
    }, 2000);

    this.vm$.subscribe(({ idle }) => {
      console.log(idle);
    });
  }
}
