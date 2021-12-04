import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { TimeElapsedPipe } from './pipes/time-elapsed/time-elapsed.pipe';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { RouterModule } from '@angular/router';
import { MutedTextDirective } from './directives/muted-text/muted-text.directive';
import { BorderBottomDirective } from './directives/bottom-border/border-bottom.directive';
import { SliceTextPipe } from './pipes/slice-text/slice-text.pipe';
import { BadgeColorDirective } from './directives/badge-color/badge-color.directive';
import { TextColorDirective } from './directives/text-color/text-color.directive';


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
  ],
  imports: [
    CommonModule,
    RouterModule,
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
  ]
})
export class SharedModule { }
