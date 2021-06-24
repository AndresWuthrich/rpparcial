import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaPizzaComponent } from './modifica-pizza.component';

describe('ModificaPizzaComponent', () => {
  let component: ModificaPizzaComponent;
  let fixture: ComponentFixture<ModificaPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
