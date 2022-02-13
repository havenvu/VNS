import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManonthemoonComponent } from './manonthemoon.component';

describe('ManonthemoonComponent', () => {
  let component: ManonthemoonComponent;
  let fixture: ComponentFixture<ManonthemoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManonthemoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManonthemoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
