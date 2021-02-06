import { NgModule } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  exports: [
    ClipboardModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class SharedModule {}
