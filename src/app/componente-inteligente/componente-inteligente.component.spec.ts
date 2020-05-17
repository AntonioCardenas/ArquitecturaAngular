import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteInteligenteComponent } from './componente-inteligente.component';

describe('ComponenteInteligenteComponent', () => {
  let component: ComponenteInteligenteComponent;
  let fixture: ComponentFixture<ComponenteInteligenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteInteligenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteInteligenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
