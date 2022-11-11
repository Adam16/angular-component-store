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

  constructor(private readonly galleryStore: GalleryStore) {}
}
