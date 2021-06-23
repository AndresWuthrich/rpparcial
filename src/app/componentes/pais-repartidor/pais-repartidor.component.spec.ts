import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisRepartidorComponent } from './pais-repartidor.component';

describe('PaisRepartidorComponent', () => {
  let component: PaisRepartidorComponent;
  let fixture: ComponentFixture<PaisRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisRepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
