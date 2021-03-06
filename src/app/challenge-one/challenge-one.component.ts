import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './challenge-one.component.html',
  styleUrls: ['./challenge-one.component.css']
})
export class ChallengeOneComponent implements OnInit {

  private _base:string = 'https://api.adorable.io/avatars/500/';
  private _faceNumber:number;
  imageUrl:string;

  constructor(){
    setInterval(() => this.getRandomFace(),2000);
  }

  getRandomFace(){
    this._faceNumber = Math.random();
    this.imageUrl = `${this._base}${this._faceNumber}@adorable.png`;
  }

  ngOnInit() {
  }

}
