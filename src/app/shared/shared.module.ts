import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { BestHighlightDirective } from './best-highlight.directive';
import { DontClickDirective } from './dontClick.directive';
import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { Loading2SpinnerComponent } from './loading-spinner/loading2-spinner.component';
import { ShortenPipe } from './shorten.pipe';

@NgModule({
  declarations: [
    AlertComponent,
    Loading2SpinnerComponent,
    LoadingSpinnerComponent,
    BasicHighlightDirective,
    BestHighlightDirective,
    DontClickDirective,
    DropdownDirective,
    ShortenPipe,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    Loading2SpinnerComponent,
    LoadingSpinnerComponent,
    BasicHighlightDirective,
    BestHighlightDirective,
    DontClickDirective,
    DropdownDirective,
    ShortenPipe,
    CommonModule,
  ],
})
export class SharedModule {}
