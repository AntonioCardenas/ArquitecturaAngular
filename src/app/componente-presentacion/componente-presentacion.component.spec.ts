import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePresentacionComponent } from './componente-presentacion.component';

describe('ComponentePresentacionComponent', () => {
  let component: ComponentePresentacionComponent;
  let fixture: ComponentFixture<ComponentePresentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePresentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
