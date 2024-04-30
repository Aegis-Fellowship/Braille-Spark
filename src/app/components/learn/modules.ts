import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Modules {
  private modules: any = {
    "items": [
      { "id": "1", "name": "Module 1" , "content": "Introduction to Braille, a tactile writing system primarily used by individuals with visual impairments;\nUnderstanding Braille cells: each cell consists of six dots, numbered 1 to 6, arranged in two columns of three dots each;\nLetter A: represented by dot 1 in the top-left position within the Braille cell (⠁);\nLetter B: represented by dots 1 and 2, occupying the top-left and top-middle positions respectively within the Braille cell (⠃);\nLetter C: represented by dots 1 and 4, occupying the top-left and bottom-left positions respectively within the Braille cell (⠉);\nPractice writing A, B, and C in Braille to reinforce recognition and tactile skills, ensuring consistency and accuracy in dot placement;\nDevelop proficiency in recognizing the dot patterns through repeated practice;\nAssess your knowledge by writing dictated letters and comparing with correct Braille symbols, allowing for self-correction and improvement;\nCelebrate your progress and achievement in mastering the Braille symbols for A, B, and C, an essential step towards fluency in Braille literacy and communication."},
      { "id": "2", "name": "Module 2" , "content": "Number 1: represented by dot 1 in the top-left position within the Braille cell (⠁);\nNumber 2: represented by dots 1 and 2, occupying the top-left and top-middle positions respectively within the Braille cell (⠃);\nNumber 3: represented by dots 1 and 4, occupying the top-left and bottom-left positions respectively within the Braille cell (⠉);\nPractice writing numbers 1, 2, and 3 in Braille to reinforce recognition and tactile skills, ensuring consistency and accuracy in dot placement;\nDevelop proficiency in recognizing the dot patterns for the numbers 1, 2, and 3 through repeated practice;\nAssess your knowledge by writing dictated numbers and comparing with correct Braille symbols, allowing for self-correction and improvement;\nCelebrate your progress and achievement in mastering the Braille symbols for numbers 1, 2, and 3, an essential step towards fluency in Braille literacy and communication."},
      { "id": "3", "name": "Module 3" , "content": "Word Hi: represented by the letters H and I;\nLetter H: represented by dots 1, 2, 4, and 5, forming a vertical line in the left half of the Braille cell (⠓);\nLetter I: represented by dots 2 and 5, forming a vertical line in the right half of the Braille cell (⠊);\nPractice writing the word Hi in Braille to reinforce recognition and tactile skills, ensuring correct placement of dots;\nDevelop proficiency in recognizing the dot patterns for the letters H and I through repeated practice;\nAssess your knowledge by writing the word Hi in Braille and comparing with correct Braille symbols, allowing for self-correction and improvement;\nCelebrate your progress and achievement in mastering the Braille word Hi, an important step towards building vocabulary and communication in Braille."}
    ]
  };

  getModules(): any {
    return this.modules.items;
  }

  addModules(newModule: any): void {
    this.modules.items = [ ...this.modules.items, newModule ];
    console.log(this.modules.items)
  }
}
