import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'n-form-card',
  templateUrl: 'form-card.component.html',
  styleUrls: ['form-card.component.css']
})

export class FormCardComponent implements OnInit {
  @Input() width = "40%"
  @Input() padding = "20px"
  constructor() { }

  ngOnInit() { }
}