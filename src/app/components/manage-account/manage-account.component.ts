import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { ChangeUsernameComponent } from './change-username/change-username.component';


@Component({
  selector: 'app-manage-account',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, NavbarComponent, ChangeUsernameComponent],
  templateUrl: './manage-account.component.html',
  styleUrl: './manage-account.component.sass'
})
export class ManageAccountComponent {

}
