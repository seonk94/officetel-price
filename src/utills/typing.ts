
export class Typing {
  public interval!: NodeJS.Timeout;
  public textArray: string[] = [];
  public currentIndex: number;
  public ref: React.RefObject<any>;
  public typingSpeed: number;

  constructor(ref: React.RefObject<any>, text: String, typingSpeed: number = 500) {
    this.textArray = text.split('');
    this.ref = ref;
    this.currentIndex = 0;
    this.typingSpeed = typingSpeed;
  }

  public typing() {
    this.interval = setInterval(() => {
      this.intervalFunction()
    }, this.typingSpeed);
  }

  public intervalFunction() {
    if (this.textArray.length > this.currentIndex) {
      this.ref.current.append(this.textArray[this.currentIndex++])
    } else {
      clearInterval(this.interval);
    }
  }
}
