import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRepartoComponent } from './gestion-reparto.component';

describe('GestionRepartoComponent', () => {
  let component: GestionRepartoComponent;
  let fixture: ComponentFixture<GestionRepartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionRepartoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionRepartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
