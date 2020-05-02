import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  cheminImage1:any = "assets/keyboard-561124.png";
  cheminImage2:any = "assets/password-2781614.png";
  cheminImage3:any = "assets/keyboard-561124.png";
  images = [this.cheminImage1, this.cheminImage2, this.cheminImage3];
  constructor() {
  }

  ngOnInit() {
  }

}
