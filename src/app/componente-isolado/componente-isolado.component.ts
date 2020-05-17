import { Component, OnInit, Input ,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-componente-isolado',
  templateUrl: './componente-isolado.component.html',
  styleUrls: ['./componente-isolado.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponenteIsoladoComponent implements OnInit {
  @Input() singleTodo;

  constructor() { }

  ngOnInit(): void {
  }

}
