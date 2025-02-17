import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsTerceraCajaComponent } from './graphics-tercera-caja.component';

describe('GraphicsTerceraCajaComponent', () => {
  let component: GraphicsTerceraCajaComponent;
  let fixture: ComponentFixture<GraphicsTerceraCajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicsTerceraCajaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicsTerceraCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
