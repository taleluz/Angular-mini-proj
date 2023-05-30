import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent {
  name: string = 'דודי גל';
  address: string = 'שדרות וושינגטון43, תל אביב' 
  reason : string = ' מחלת הסרטן'// Replace with the actual name


}
