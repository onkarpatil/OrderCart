import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MdButtonModule, MdDialogModule , MdInputModule } from '@angular/material';


@NgModule({
    imports: [CommonModule, MdButtonModule, MdDialogModule],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MdButtonModule,
        MdDialogModule,
        MdInputModule
    ],
    declarations: [],
})
export class SharedModule { }
