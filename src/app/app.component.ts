import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Crear Usuario', url: 'crear-usuario', icon: 'mail' },
    { title: 'Login', url: 'login', icon: 'paper-plane' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private callNumber: CallNumber) {}

  llamar(){
    this.callNumber.callNumber("0991029502", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
}
