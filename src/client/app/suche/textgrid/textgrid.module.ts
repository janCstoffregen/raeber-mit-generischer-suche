/**
 * Created by Sebastian Schüpbach (sebastian.schuepbach@unibas.ch) on 7/21/17.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonToggleModule, MdCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { DynamicPaging } from './paging.service';
import { TextgridComponent } from './textgrid.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonToggleModule,
    MdCardModule,
    RouterModule
  ],
  declarations: [
    TextgridComponent
  ],
  providers: [
    DynamicPaging
  ],
  exports: [
    TextgridComponent
  ]
})
export class TextgridModule {
}
