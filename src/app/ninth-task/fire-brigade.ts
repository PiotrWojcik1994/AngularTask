import {Service} from './service';

export class FireBrigade extends Service {
  public call() {
    if (this.event !== 'beating') {
      console.log('Straż jedzie na miejsce');
    }
    this.mediator.notify(this, this.event);
  }
}
