import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // DEFAULT STATES
    trigger('enterLeave', [
      // :ENTER TRANSITION
      // Transition Styles
      transition('void => *', [
        // 'From' styles
        style({
          opacity: 0.2,
          transform: 'translateX(-100vw)'
        }),
        animate('1000ms ease-in',
          // 'To' styles
          // 1 - Comment this to remove the item's grow...
          style({
            opacity: 1,
            transform: 'scale(1.2)'
          })
        )
      ]),
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
