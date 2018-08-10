export class Quote {
  public showDescription: boolean;
  constructor(public name: string, public description: string, public date: Date) {
  this.showDescription = false; }
}
