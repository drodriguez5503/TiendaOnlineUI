import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHeaderUserComponent } from './client-header-user.component';

describe('ClientHeaderUserComponent', () => {
  let component: ClientHeaderUserComponent;
  let fixture: ComponentFixture<ClientHeaderUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientHeaderUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientHeaderUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
