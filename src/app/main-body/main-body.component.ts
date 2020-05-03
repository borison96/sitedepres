import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  cheminImage1:any = "assets/password-2781614.png";
  cheminImage2:any = "assets/security.png";
  cheminImage3:any = "assets/design.png";
  cheminImage4:any = "assets/www.png";
  images = [this.cheminImage1, this.cheminImage2, this.cheminImage3, this.cheminImage4];
  constructor() {
  }

  ngOnInit() {
  }

}
