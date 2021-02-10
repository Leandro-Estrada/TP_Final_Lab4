import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionradioComponent } from './gestionradio.component';

describe('GestionradioComponent', () => {
  let component: GestionradioComponent;
  let fixture: ComponentFixture<GestionradioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionradioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
