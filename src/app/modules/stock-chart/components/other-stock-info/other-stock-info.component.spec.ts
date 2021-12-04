import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherStockInfoComponent } from './other-stock-info.component';

describe('OtherStockInfoComponent', () => {
  let component: OtherStockInfoComponent;
  let fixture: ComponentFixture<OtherStockInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherStockInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherStockInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
