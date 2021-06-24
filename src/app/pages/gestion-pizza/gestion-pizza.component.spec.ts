import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPizzaComponent } from './gestion-pizza.component';

describe('GestionPizzaComponent', () => {
  let component: GestionPizzaComponent;
  let fixture: ComponentFixture<GestionPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
