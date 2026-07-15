import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [RouterLink],
  exports: [CommonModule, FormsModule, RouterLink],
})
export class SharedModule {}
