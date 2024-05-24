import { HelloWorld } from "..";

describe('Hello World class', () => {
  const helloWorldClass = new HelloWorld("Hellow World!");
  it('is HelloWord class created', () => {
    expect(helloWorldClass).toBeDefined();
  });

  it('does HelloWorld class have sayHello method', () => {
    const boundedSayHello = helloWorldClass.sayHello.bind(helloWorldClass);
    expect(boundedSayHello).toBeDefined();
  });

  it('does sayHello method return "Hellow World!"', () => {
    expect(helloWorldClass.sayHello()).toBe("Hellow World!");
  });

  it('does HelloWord class has helloWorld property', () => {
    expect(helloWorldClass.helloWorld).toBeDefined();
  });

  it('does HelloWord class has helloWorld property with value "Hellow World!"', () => {
    expect(helloWorldClass.helloWorld).toBe("Hellow World!");
  });
});