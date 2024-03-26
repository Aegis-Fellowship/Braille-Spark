import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-translator',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './translator.component.html',
  styleUrl: './translator.component.sass'
})
export class TranslatorComponent {

}
