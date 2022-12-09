import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  // templateUrl: './loader.component.html',
  template: `
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
