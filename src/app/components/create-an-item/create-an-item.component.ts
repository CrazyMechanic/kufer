import { Component } from '@angular/core';

@Component({
  selector: 'app-create-an-item',
  templateUrl: './create-an-item.component.html',
  styleUrls: ['./create-an-item.component.scss'],
})
export class CreateAnItemComponent {
  inputText: string = '';
  maxWords: number = 100;
  wordCount: number = 0;

  countWords() {
    this.wordCount = this.inputText.length;

    if (this.wordCount > this.maxWords) {
      this.inputText = this.inputText.substring(0, this.maxWords);
      this.wordCount = this.maxWords;
    }
  }
}
