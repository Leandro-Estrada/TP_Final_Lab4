import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocutorComponent } from './locutor.component';

describe('LocutorComponent', () => {
  let component: LocutorComponent;
  let fixture: ComponentFixture<LocutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
