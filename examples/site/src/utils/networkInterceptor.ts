class NetworkInterceptor {
  private isBlocking = false;
  private originalFetch: typeof fetch;

  constructor() {
    this.originalFetch = window.fetch;

    this.setupInterceptor();
  }

  private setupInterceptor(): void {
    window.fetch = async (
      input: RequestInfo | URL,
      init?: RequestInit
    ): Promise<Response> => {
      const url = input.toString();
      if (this.isBlocking && url.includes('/offline-detector/favicon.ico')) {
        throw new TypeError('Failed to fetch');
      }
      return this.originalFetch.call(window, input, init);
    };
  }

  public toggleNetwork(): void {
    this.isBlocking = !this.isBlocking;
  }

  public isNetworkBlocked(): boolean {
    return this.isBlocking;
  }

  public destroy(): void {
    window.fetch = this.originalFetch;

    this.isBlocking = false;
  }
}

let interceptorInstance: NetworkInterceptor | null = null;

export const createNetworkInterceptor = (): NetworkInterceptor => {
  if (interceptorInstance) {
    interceptorInstance.destroy();
  }

  interceptorInstance = new NetworkInterceptor();
  return interceptorInstance;
};

export const getNetworkInterceptor = (): NetworkInterceptor | null => {
  return interceptorInstance;
};

export { NetworkInterceptor };
