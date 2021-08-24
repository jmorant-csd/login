import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InvalidInputComponent } from './components/invalid-input/invalid-input.component';

const DECLARATIONS = [
  // COMPONENTS
  InvalidInputComponent,
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule, TranslateModule.forChild()],
  exports: [...DECLARATIONS],
})
export class SharedModule {}
