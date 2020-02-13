import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth-message',
  templateUrl: './auth-message.component.html',
  styleUrls: ['./auth-message.component.scss']
})
export class AuthMessageComponent implements OnInit {
  @Input('message') message: string;
  @Input('messageType') messageType: string;

  constructor() {}

  ngOnInit(): void {}
}
