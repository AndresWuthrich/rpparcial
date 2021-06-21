import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRepartidorComponent } from './info-repartidor.component';

describe('InfoRepartidorComponent', () => {
  let component: InfoRepartidorComponent;
  let fixture: ComponentFixture<InfoRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoRepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
