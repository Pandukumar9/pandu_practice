import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atob-sample',
  templateUrl: './atob-sample.component.html',
  styleUrls: ['./atob-sample.component.scss']
})
export class AtobSampleComponent implements OnInit {

  constructor() { }
  bin:any;
  encoded:any;
  decoded:any;
   text = "Hello World!";
  ngOnInit() {
  var atob = require('atob');
  var b64 = "SGVsbG8sIFdvcmxkIQ==";
  this.bin = atob(b64);

  console.log(this.bin);

  // ------


 this.encoded = window.btoa(this.text);
 this.decoded = window.atob(this.encoded);
  }

}
