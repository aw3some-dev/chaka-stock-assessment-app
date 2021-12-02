import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMarketNewsViewComponent } from './stock-market-news-view.component';

describe('StockMarketNewsViewComponent', () => {
  let component: StockMarketNewsViewComponent;
  let fixture: ComponentFixture<StockMarketNewsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockMarketNewsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMarketNewsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
