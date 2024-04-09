import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.scss']
})
export class ChiSiamoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const imgBx = document.querySelectorAll('.imgBx');
    const contentBx = document.querySelectorAll('.contentBx');

    imgBx.forEach((element, index) => {
      element.addEventListener('mouseover', () => {
        contentBx.forEach(content => {
          content.classList.remove('active');
        });
        const dataId = element.getAttribute('data-id');
        if (dataId !== null) {
          const contentElement = document.getElementById(dataId);
          if (contentElement) {
            contentElement.classList.add('active');
          }
        }
        imgBx.forEach(img => {
          img.classList.remove('active');
        });
        element.classList.add('active');
      });
    });
  }
}











