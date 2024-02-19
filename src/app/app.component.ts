import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { MainComponent } from './common/main/main.component';
import { SrComponent } from './common/sr/sr.component';
import { AllstudentsComponent } from './common/allstudents/allstudents.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,SidebarComponent,MainComponent,SrComponent,AllstudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-registration-frontend-anguler';
}
