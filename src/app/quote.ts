export class Quote {
  public showDescription: boolean;
  constructor(public id: number, public name: string, public description: string,
public publisher: string, public upvote: number, public downvote: number) {
  this.showDescription = false; }
}
