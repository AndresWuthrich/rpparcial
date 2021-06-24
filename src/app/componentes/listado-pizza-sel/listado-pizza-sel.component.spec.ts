import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPizzaSelComponent } from './listado-pizza-sel.component';

describe('ListadoPizzaSelComponent', () => {
  let component: ListadoPizzaSelComponent;
  let fixture: ComponentFixture<ListadoPizzaSelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPizzaSelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPizzaSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
