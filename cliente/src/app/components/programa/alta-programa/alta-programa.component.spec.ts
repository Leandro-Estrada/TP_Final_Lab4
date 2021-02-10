import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaProgramaComponent } from './alta-programa.component';

describe('AltaProgramaComponent', () => {
  let component: AltaProgramaComponent;
  let fixture: ComponentFixture<AltaProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaProgramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
