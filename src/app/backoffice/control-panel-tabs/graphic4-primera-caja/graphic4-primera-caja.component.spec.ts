import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphic4PrimeraCajaComponent } from './graphic4-primera-caja.component';

describe('Graphic4PrimeraCajaComponent', () => {
  let component: Graphic4PrimeraCajaComponent;
  let fixture: ComponentFixture<Graphic4PrimeraCajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Graphic4PrimeraCajaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Graphic4PrimeraCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
