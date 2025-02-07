import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphic3PrimeraCajaComponent } from './graphic3-primera-caja.component';

describe('Graphic3PrimeraCajaComponent', () => {
  let component: Graphic3PrimeraCajaComponent;
  let fixture: ComponentFixture<Graphic3PrimeraCajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Graphic3PrimeraCajaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Graphic3PrimeraCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
