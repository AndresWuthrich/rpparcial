import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPizzaComponent } from './listado-pizza.component';

describe('ListadoPizzaComponent', () => {
  let component: ListadoPizzaComponent;
  let fixture: ComponentFixture<ListadoPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
