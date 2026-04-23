export class Clock {
  private totalMinutes: number;
  private readonly minInADay = 24 * 60;
  
  constructor(hour: number, minute: number = 0) {
    let rawMinutes = (hour * 60 + minute) % this.minInADay;

    if (rawMinutes < 0) {
      rawMinutes += this.minInADay;
    }

    this.totalMinutes = rawMinutes;
  }

  public toString(): string {
    const hours = Math.floor(this.totalMinutes / 60);
    const mins = this.totalMinutes % 60;

    const hStr = hours.toString().padStart(2, '0');
    const mStr = mins.toString().padStart(2, '0');

    return `${hStr}:${mStr}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.totalMinutes + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(0, this.totalMinutes - minutes);
  }

  public equals(other: Clock): boolean {
    return this.totalMinutes === other.totalMinutes;
  }
}
