class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  pilot(): void {
    console.log("swish");
  }
}