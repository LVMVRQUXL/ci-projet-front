import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  exports: [MatButtonModule, MatCardModule, MatRippleModule, MatSnackBarModule]
})
export class SharedModule {}
