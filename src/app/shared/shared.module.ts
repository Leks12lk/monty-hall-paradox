import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
	
	],
	imports: [
		CommonModule,	
		BrowserAnimationsModule,
    MaterialModule,
    FormsModule
	],
	exports: [
    CommonModule,	
		BrowserAnimationsModule,
    MaterialModule,
    FormsModule
	],
	entryComponents: []
})
export class SharedModule { }
