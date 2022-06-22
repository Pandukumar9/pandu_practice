import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-sample',
  templateUrl: './skeleton-sample.component.html',
  styleUrls: ['./skeleton-sample.component.scss']
})
export class SkeletonSampleComponent implements OnInit {


  constructor() { }
  contentLoaded:boolean=false;
  ngOnInit() {
    setInterval(() => {
      this.contentLoaded = true;
    },3000)
  }

  dogimg:string="./assets/img/Captuddre.jpg"


}
