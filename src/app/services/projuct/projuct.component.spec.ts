import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjuctComponent } from './projuct.component';

describe('ProjuctComponent', () => {
  let component: ProjuctComponent;
  let fixture: ComponentFixture<ProjuctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjuctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjuctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
