export interface TestConfig {
  name: string;
  version: string;
}

export class TestClass {
  private config: TestConfig;

  constructor(config: TestConfig) {
    this.config = config;
  }

  public getName(): string {
    return this.config.name;
  }

  public getVersion(): string {
    return this.config.version;
  }

  public getInfo(): string {
    return `${this.config.name} v${this.config.version}`;
  }
}

export function createTest(config: TestConfig): TestClass {
  return new TestClass(config);
}

export default TestClass;
