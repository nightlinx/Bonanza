import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  imageSource: any;
  imageSources: string[];
  index: number;
  constructor() {
    this.index = 0;
    this.imageSource = "../../../assets/star_mario.gif";
    this.imageSources =[
      "../../../assets/star_mario.gif",
      "../../../assets/yoshi.gif",
      "../../../assets/mario.gif",
      "../../../assets/grzyb_mario.gif",
      "../../../assets/kirby.gif",
      "../../../assets/donkey_kong.gif",
     ];
  }

  ngOnInit() {
  }

  changeImage(image:any) {
    if(this.index < this.imageSources.length - 1){
      this.index = this.index + 1;
    }
    else{
      this.index = 0;
    }
    this.imageSource = this.imageSources[this.index];
  }
}
