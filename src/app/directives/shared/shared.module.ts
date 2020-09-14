import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckErrorDirective } from './../check-error.directive';

@NgModule({
  declarations: [CheckErrorDirective],
  imports: [
    CommonModule
  ],
  exports: [CheckErrorDirective]
})
export class SharedModule { }
