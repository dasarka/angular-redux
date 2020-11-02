import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core.routing.module';
import { NgModule } from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ViewTrainingComponent } from './component/view-training/view-training.component';


@NgModule({
    declarations: [
        LoginComponent,
        DashboardComponent,
        ViewTrainingComponent
    ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatProgressSpinnerModule
    ],
    providers: []
})
export class CoreModule { }
