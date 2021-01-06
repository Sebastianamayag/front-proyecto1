import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBarComponent } from './price-bar.component';

describe('PriceBarComponent', () => {
  let component: PriceBarComponent;
  let fixture: ComponentFixture<PriceBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
