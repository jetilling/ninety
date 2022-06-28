import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getPreferences } from '../../store/task-parrot.selectors';

@Component({
  selector: 'preferences',
  templateUrl: 'preferences.component.html',
  styleUrls: ['preferences.component.css'],
})
export class PreferencesComponent implements OnInit {
  preferences$ = this.store.select(getPreferences);
  name = '';
  currentDayIndex = new Date().getDay();

  constructor(private store: Store) {}

  ngOnInit() {}

  //   onChange(target) {
  //     let input = target.value;
  //     console.log('input: ', input);
  //
  //     const enteredValues = input.split(' ');
  //     console.log(enteredValues);
  //     if ('available'.includes(input)) {
  //       input = 'available';
  //     }
  //   }

  // keyUp(event) {
  //   console.log('event: ', event);
  //   this.name = event;
  //   const enteredValues = event.split(' ');
  //   console.log(enteredValues);
  //   console.log(this.name);
  //   if (event && event.includes('avail')) {
  //     console.log('left? ', this.name.slice(this.name.length - 5));
  //     this.name = `${this.name.slice(0, this.name.length - 5)}available`;
  //   }
  // }

  onKeyPress(event: any) {
    console.log(event);
    console.log(event.target.value);
    let input = event.target.value;

    if (event.keyCode !== 8) {
      if (input && input.includes('avail') && !input.includes('available')) {
        event.target.value = `${input.slice(0, input.length - 5)}available`;
      }
      if (input && input.includes('lou') && !input.includes('loud allowed')) {
        event.target.value = `${input.slice(0, input.length - 3)}loud allowed`;
      }
    }
  }
}
