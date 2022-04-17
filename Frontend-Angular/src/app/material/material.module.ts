import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
const material=[
      MatButtonModule,
      MatIconModule,
      MatSelectModule,
      MatExpansionModule,
      MatProgressSpinnerModule,
      MatMenuModule,
      MatTabsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatDialogModule
  ];
@NgModule({
   imports:[material],
   exports: [material]
})
export class MaterialModule { }
