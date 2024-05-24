export class HelloWorld {
  public helloWorld: string;

  constructor(helloWorld: string) {
    this.helloWorld = helloWorld;
  }
  
  public sayHello(): string {
    return this.helloWorld;
  }
}