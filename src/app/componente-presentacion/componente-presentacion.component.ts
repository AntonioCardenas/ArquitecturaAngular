import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-presentacion',
  templateUrl: './componente-presentacion.component.html',
  styleUrls: ['./componente-presentacion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentePresentacionComponent implements OnInit {
  @Input() list: any[];
  constructor() { }

  ngOnInit() {
    console.log(this.list);
  }

}
