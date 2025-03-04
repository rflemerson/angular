import {Component} from '@angular/core';

@Component({
  template: `
    <div>
      {{message}}
      {#for item of items; track item; let ev = $even}
        <div (click)="log($index, ev, $first, $count)"></div>
      {/for}
    </div>
  `,
})
export class MyApp {
  message = 'hello';
  items = [];
  log(..._: any[]) {}

  // TODO(crisbeto): remove this once template type checking is fully implemented.
  item: any;
  ev: any;
  $index: any;
  $first: any;
  $count: any;
}
