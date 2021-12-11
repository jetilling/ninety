import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'n-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.css']
})

export class ButtonComponent implements OnInit {
  @Input() text = ""
  @Output() handleClick: EventEmitter<null> = new EventEmitter()

  constructor() { }

  ngOnInit() { }
}