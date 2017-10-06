import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, stagger, animateChild } from '@angular/animations';

@Component({
  selector: 'app-two',
  templateUrl: './challenge-two.component.html',
  styleUrls: ['./challenge-two.component.css'],
  animations: [
    trigger('animationFace',[
      state('default', style({borderRadius: '0'})),

      state('roundOut', style({borderRadius: '50%'})),
      transition('default => roundOut', animate('600ms ease-out')),

      state('rotate', style({transform: 'rotateX(360deg)'})),
      transition('default => rotate', animate('2000ms ease-out')),


      transition('default => hinge', [
        animate('300ms ease-out', style({ transform: 'rotate(0)', transformOrigin: 'top left' })),
        animate(300, style({ transform: 'rotate(100deg)', transformOrigin: 'top left' })),
        animate(300, style({ transform: 'rotate(10deg)', transformOrigin: 'top left' })),
        animate(300, style({ transform: 'rotate(80deg)', transformOrigin: 'top left' })),
        animate(300, style({ transform: 'rotate(30deg)', transformOrigin: 'top left' })),
        animate(300, style({ transform: 'rotate(60deg)', transformOrigin: 'top left' }))
      ]),

      state('crazyTime', style({transform: 'rotate(360deg) scaleY(1.2) scaleX(1.2)'})),
      transition('default => crazyTime', animate('2000ms ease-out')),

      transition('* => default', animate('100ms ease-out'))
    ]),

    trigger('bye',[
      state('opacity', style({opacity: 0})),
      transition('default => opacity', [
        query('.hide', [                           
          style({ opacity: 1 }),                  
          stagger(200, [                          
            animate('1s', style({ opacity: 0 }))  
          ])
        ])

      ]),
    ])
  ]
})

export class ChallengeTwoComponent {

  type:string = 'default';

  constructor(){}

  onRoundOut(){
    this.type = "roundOut";
  }

  onRotate(){
    this.type = "rotate";
  }

  crazyTime(){
    this.type = "crazyTime";
  }

  hinge(){
    this.type = "hinge";
  }

  opacity(){
    this.type = "opacity";
  }

  mouseLeave(){
    this.type = "default";
  }

}
