import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-account',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FormsModule, CommonModule],
  templateUrl: './manage-account.component.html',
  styleUrl: './manage-account.component.sass'
})
export class ManageAccountComponent {

}
