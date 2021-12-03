import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorHighlightComponent } from './sector-highlight.component';

describe('SectorHighlightComponent', () => {
  let component: SectorHighlightComponent;
  let fixture: ComponentFixture<SectorHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorHighlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
