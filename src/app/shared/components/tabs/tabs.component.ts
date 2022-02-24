import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'n-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.css']
})

export class TabsComponent implements OnInit {

  @Input() tabs = []
  @Input() selectedColor = ''

  constructor() { }

  ngOnInit() { }
}