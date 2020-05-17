import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-componente-inteligente',
  templateUrl: './componente-inteligente.component.html',
  styleUrls: ['./componente-inteligente.component.css'],
})
export class ComponenteInteligenteComponent implements OnInit {
  list: Observable<any[]>;
  constructor(http: HttpClient) {
    const path = 'https://jsonplaceholder.typicode.com/posts';
    this.list = http.get<any[]>(path).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }

  ngOnInit() {}
}
