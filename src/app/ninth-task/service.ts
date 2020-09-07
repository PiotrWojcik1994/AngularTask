export class Service {
  protected mediator: Mediator;
  protected event: string;

  constructor(mediator: Mediator = null, event: string = null) {
    this.mediator = mediator;
    this.event = event;
  }

  public setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }

  public setEvent(event: string) {
    this.event = event;
  }
}
