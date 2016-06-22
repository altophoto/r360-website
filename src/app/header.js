import {Component} from '@angular/core';

@Component({
  selector: 'Header',
  template: `
    <header class="header">
      <p class="header-title">
        <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank">
          Fountain Generator
        </a>
      </p>
      <p class="header-date">
        Generated with FountainJS v0.5.4 on Wed Jun 22 2016 10:53:29 GMT+0200 (CEST)
      </p>
    </header>
  `
})
export class Header {}
