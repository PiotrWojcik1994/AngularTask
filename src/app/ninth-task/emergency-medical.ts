import {Service} from './service';

export class EmergencyMedical extends Service {
  public call() {
    if (this.event !== 'fire') {
      console.log('Karetka jedzie na miejsce');
    }
    this.mediator.notify(this, this.event);
  }
}
