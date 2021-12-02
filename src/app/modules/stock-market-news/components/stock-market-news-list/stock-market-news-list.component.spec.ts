import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMarketNewsListComponent } from './stock-market-news-list.component';

describe('StockMarketNewsListComponent', () => {
  let component: StockMarketNewsListComponent;
  let fixture: ComponentFixture<StockMarketNewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockMarketNewsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMarketNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
