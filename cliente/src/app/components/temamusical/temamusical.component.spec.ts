import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemamusicalComponent } from './temamusical.component';

describe('TemamusicalComponent', () => {
  let component: TemamusicalComponent;
  let fixture: ComponentFixture<TemamusicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemamusicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemamusicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
