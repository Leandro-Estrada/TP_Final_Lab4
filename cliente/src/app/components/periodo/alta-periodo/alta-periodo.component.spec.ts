import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPeriodoComponent } from './alta-periodo.component';

describe('AltaPeriodoComponent', () => {
  let component: AltaPeriodoComponent;
  let fixture: ComponentFixture<AltaPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaPeriodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
