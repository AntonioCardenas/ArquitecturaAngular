import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteIsoladoComponent } from './componente-isolado.component';

describe('ComponenteIsoladoComponent', () => {
  let component: ComponenteIsoladoComponent;
  let fixture: ComponentFixture<ComponenteIsoladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteIsoladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteIsoladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
