import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearLogs, toggleLogList } from './store/logs.actions';
import {
  selectLastMessage,
  selectListExpanded,
  selectMessageList,
} from './store/logs.selectors';

@Component({
  selector: 'n-logs',
  templateUrl: 'logs.component.html',
  styleUrls: ['logs.component.css'],
})
export class LogsComponent {
  logs = this.store.select(selectMessageList);
  lastLog = this.store.select(selectLastMessage);
  listExpanded = this.store.select(selectListExpanded);

  constructor(private store: Store) {}

  clear() {
    this.store.dispatch(clearLogs());
  }

  toggleList() {
    this.store.dispatch(toggleLogList());
  }
}
