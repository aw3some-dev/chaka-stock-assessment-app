import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMarketBriefingComponent } from './stock-market-briefing.component';

describe('StockMarketBriefingComponent', () => {
  let component: StockMarketBriefingComponent;
  let fixture: ComponentFixture<StockMarketBriefingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockMarketBriefingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMarketBriefingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
