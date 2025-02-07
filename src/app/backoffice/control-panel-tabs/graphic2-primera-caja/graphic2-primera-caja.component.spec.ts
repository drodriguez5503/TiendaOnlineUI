import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphic2PrimeraCajaComponent } from './graphic2-primera-caja.component';

describe('Graphic2PrimeraCajaComponent', () => {
  let component: Graphic2PrimeraCajaComponent;
  let fixture: ComponentFixture<Graphic2PrimeraCajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Graphic2PrimeraCajaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Graphic2PrimeraCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
