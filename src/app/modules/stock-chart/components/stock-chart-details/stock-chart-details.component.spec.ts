import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockChartDetailsComponent } from './stock-chart-details.component';

describe('StockChartDetailsComponent', () => {
  let component: StockChartDetailsComponent;
  let fixture: ComponentFixture<StockChartDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockChartDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockChartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
