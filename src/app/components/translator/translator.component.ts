import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { latinToBraille } from './brailleConverter';

@Component({
  selector: 'app-translator',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './translator.component.html',
  styleUrl: './translator.component.sass'
})
export class TranslatorComponent {
  
  text: string | null = "";

  translate() {
    const textElement = document.getElementById("latin-text") as HTMLTextAreaElement;
    const resultElement = document.getElementById("braille-text") as HTMLTextAreaElement;

    if (textElement) {
      this.text = textElement.value ?? "";
      resultElement.value = latinToBraille(this.text);
    } else {
      console.log("Translation Failed")
    }
  }

  copyToClipboard() {
    const resultElement = document.getElementById("braille-text") as HTMLTextAreaElement;
    const confirmationElement = document.getElementById("confirmation") as HTMLDivElement;

    // Copy
    resultElement.select();
    navigator.clipboard.writeText(resultElement.value);
    resultElement.blur()

    // Display confirmation div
    confirmationElement.style.display = "flex"
    setTimeout(function() {
      confirmationElement.style.display = "none";
    }, 1500);
  }
}