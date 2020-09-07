import {Police} from './police';
import {FireBrigade} from './fire-brigade';
import {EmergencyMedical} from './emergency-medical';
import {Service} from './service';

export class AnsweringPoint implements Mediator {
  private police: Police;
  private fireBrigade: FireBrigade;
  private emergencyMedical: EmergencyMedical;

  constructor(police: Police, fireBrigade: FireBrigade, emergencyMedical: EmergencyMedical) {
    this.police = police;
    this.police.setMediator(this);
    this.fireBrigade = fireBrigade;
    this.fireBrigade.setMediator(this);
    this.emergencyMedical = emergencyMedical;
    this.emergencyMedical.setMediator(this);
  }

  notify(sender: object, event: string) {
    const service = sender as Service;
    if (sender instanceof Police) {
      this.notifyOtherServicesThanPolice(event);
    } else if (sender instanceof FireBrigade) {
      this.notifyOtherServicesThanFireBrigade(event);
    } else if (sender instanceof EmergencyMedical) {
      this.notifyOtherServicesThanEmergencyMedical(event);
    }
    service.setEvent('');
  }

  notifyOtherServicesThanPolice(event: string) {
    if (event === 'fire') {
      this.fireBrigade.call();
    } else if (event === 'carAccident') {
      this.fireBrigade.call();
      this.emergencyMedical.call();
    } else if (event === 'beating') {
      this.emergencyMedical.call();
    }
  }

  notifyOtherServicesThanFireBrigade(event: string) {
    if (event === 'fire') {
      this.police.call();
    } else if (event === 'carAccident') {
      this.police.call();
      this.emergencyMedical.call();
    } else if (event === 'beating') {
      this.police.call();
      this.emergencyMedical.call();
    }
  }

  notifyOtherServicesThanEmergencyMedical(event: string) {
    if (event === 'fire') {
      this.police.call();
      this.fireBrigade.call();
    } else if (event === 'carAccident') {
      this.fireBrigade.call();
      this.police.call();
    } else if (event === 'beating') {
      this.police.call();
    }
  }
}
