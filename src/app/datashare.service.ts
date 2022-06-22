import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor() { }
  data:string ="successfullly";
  postPrflPic(data:any){
     console.log(data)
     return data;
  }
}
