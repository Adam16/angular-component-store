import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <gallery></gallery>
  `,
})
export class AppComponent {
  log(obj: unknown) {
    console.log(obj);
  }
}
