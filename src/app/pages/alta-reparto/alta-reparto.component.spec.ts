import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaRepartoComponent } from './alta-reparto.component';

describe('AltaRepartoComponent', () => {
  let component: AltaRepartoComponent;
  let fixture: ComponentFixture<AltaRepartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaRepartoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaRepartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
