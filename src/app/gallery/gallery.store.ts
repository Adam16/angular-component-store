import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface GalleryState {
  media: string[];
  idle: boolean;
  activeMediaId?: string;
}

@Injectable()
export class GalleryStore extends ComponentStore<GalleryState> {
  constructor() {
    // set defaults
    super({
      media: ['223423', '35235235'],
      idle: true,
      activeMediaId: '223423',
    });
  }

  readonly setMedia = this.updater((state, value: string[]) => ({
    ...state,
    media: value,
  }));

  readonly setActiveMediaId = this.updater((state, value: string) => ({
    ...state,
    activeMediaId: value,
  }));

  readonly setIdle = this.updater((state, value: boolean) => ({
    ...state,
    idle: value,
  }));

  readonly mediaCount$ = this.select(({ media }) => media.length);

  readonly currentMediaIdx$ = this.select(({ media, activeMediaId }) =>
    media.indexOf(activeMediaId)
  );

  readonly isIdle$ = this.select(({ idle }) => idle === true);

  readonly vm$ = this.select(
    this.state$,
    this.mediaCount$,
    this.currentMediaIdx$,
    this.isIdle$,
    (state, mediaCount, currentMediaIdx, isIdle) => ({
      media: state.media,
      mediaCount: mediaCount,
      activeMediaId: state.activeMediaId,
      currentMediaIdx: currentMediaIdx,
      idle: isIdle,
    })
  );
}
