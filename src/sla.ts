export class SLA {
  private sla: number | undefined;
  private totalTime: number = 24 * 60 * 365;
  constructor(sla?: number) {
    this.sla = sla;
    this.init();
  }

  public init() {
    if (!this.sla) {
      this.echo();
    }
  }

  public echo(): string {
    return `SLA util, example: sla 99.9
      available minutes: ${this.count(99.9)}, unavailable minutes: ${
      this.totalTime - this.count(99.9)
    }
    `;
  }

  public count(sla: number) {
    return (this.totalTime * sla) / 100;
  }
  public print(sla: number) {
    return `available minutes: ${this.count(sla)}, unavailable minutes: ${
      this.totalTime - this.count(sla)
    }`;
  }
}
