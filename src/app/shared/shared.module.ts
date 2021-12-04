import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { TimeElapsedPipe } from './pipes/time-elapsed/time-elapsed.pipe';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { RouterModule } from '@angular/router';
import { MutedTextDirective } from './directives/muted-text/muted-text.directive';
import { BorderBottomDirective } from './directives/bottom-border/border-bottom.directive';
import { SliceTextPipe } from './pipes/slice-text/slice-text.pipe';
import { BadgeColorDirective } from './directives/badge-color/badge-color.directive';
import { TextColorDirective } from './directives/text-color/text-color.directive';
import { EmptyValuePipe } from './pipes/empty-value/empty-value.pipe';
import { AmountSummaryPipe } from './pipes/amount-summary/amount-summary.pipe';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    LoadingIndicatorComponent,
    TimeElapsedPipe,
    HeaderNavComponent,
    MutedTextDirective,
    BorderBottomDirective,
    SliceTextPipe,
    BadgeColorDirective,
    TextColorDirective,
    TextColorDirective,
    EmptyValuePipe,
    AmountSummaryPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],
  exports: [
    RouterModule,
    LoadingIndicatorComponent,
    HeaderNavComponent,
    TimeElapsedPipe,
    MutedTextDirective,
    BorderBottomDirective,
    SliceTextPipe,
    BadgeColorDirective,
    TextColorDirective,
    EmptyValuePipe,
    AmountSummaryPipe,
    NgxEchartsModule
  ],
  providers: [AmountSummaryPipe, DecimalPipe]
})
export class SharedModule { }
