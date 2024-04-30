import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../navbar/navbar.component';
import { Modules } from './modules';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.sass'
})
export class LearnComponent {
  modules: any;
  moduleSelected = ""
  addModulePanel = false

  constructor(private moduleService: Modules) {
    this.modules = this.moduleService.getModules();
  }

  getName(id: string) {
    for (let item of this.modules) {
      if (id == item.id) {
        return item.name
      }
    }

    return ""
  }

  getContent(id: string) {
    for (let item of this.modules) {
      if (id == item.id) {
        return item.content
      }
    }

    return ""
  }

  // Submit form
  formData = {
    "id": (Math.floor(Math.random() * 20000) + 1).toString(),
    "name": "",
    "content": ""
  }

  onSubmit() {
    this.moduleService.addModules(this.formData)
  }
}
