import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, PanelModule } from 'primeng/primeng';


@NgModule({
    imports: [CommonModule],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        PanelModule
    ],
    declarations: [],
})
export class SharedModule { }
