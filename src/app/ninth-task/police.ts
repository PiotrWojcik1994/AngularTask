import {Service} from './service';

export class Police extends Service {
  public call() {
    console.log('Policja jedzie na miejsce');
    this.mediator.notify(this, this.event);
  }

}
