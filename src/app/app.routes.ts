import { Routes } from '@angular/router';
import { MainComponent } from './common/main/main.component';
import { SrComponent } from './common/sr/sr.component';
import { AllstudentsComponent } from './common/allstudents/allstudents.component';


export const routes: Routes = [
    {
        path:"",
        component:MainComponent
    },
    {
        path:"register",
        component:SrComponent
    },
    {
        path:"allstudents",
        component:AllstudentsComponent
    }
];
