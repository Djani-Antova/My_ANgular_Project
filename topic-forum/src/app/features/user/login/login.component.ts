import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  rightPanelActive = false;
 
  activateRightPanel() {
    this.rightPanelActive = true;
  }
 
  deactivateRightPanel() {
    this.rightPanelActive = false;
  }


}
