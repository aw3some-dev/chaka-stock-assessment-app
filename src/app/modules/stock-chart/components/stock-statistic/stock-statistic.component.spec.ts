import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockStatisticComponent } from './stock-statistic.component';

describe('StockStatisticComponent', () => {
  let component: StockStatisticComponent;
  let fixture: ComponentFixture<StockStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
