import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'n-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.css']
})

export class InputComponent implements OnInit {
  @Input() type = 'text'
  @Output() handleChange: EventEmitter<EventTarget> = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}