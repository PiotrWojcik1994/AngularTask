import { Component, OnInit } from '@angular/core';
import {Police} from '../police';
import {FireBrigade} from '../fire-brigade';
import {EmergencyMedical} from '../emergency-medical';
import {AnsweringPoint} from '../answering-point';

@Component({
  selector: 'app-answering-point-test',
  templateUrl: './answering-point-test.component.html',
  styleUrls: ['./answering-point-test.component.css']
})
export class AnsweringPointTestComponent {

  private police: Police;
  private fireBrigade: FireBrigade;
  private emergencyMedical: EmergencyMedical;
  private mediator: AnsweringPoint;
  public event = 'fire';

  constructor() {
    this.police = new Police();
    this.fireBrigade = new FireBrigade();
    this.emergencyMedical = new EmergencyMedical();
    this.mediator = new AnsweringPoint(this.police, this.fireBrigade, this.emergencyMedical);
  }

  callPolice() {
    console.log('Event: ' + this.event);
    this.police.setEvent(this.event);
    this.police.call();
  }

  callFireBrigade() {
    console.log('Event: ' + this.event);
    this.fireBrigade.setEvent(this.event);
    this.fireBrigade.call();
  }

  callEmergencyMedical() {
    console.log('Event: ' + this.event);
    this.emergencyMedical.setEvent(this.event);
    this.emergencyMedical.call();
  }

}
