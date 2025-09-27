export interface NetworkTestOptions {
  testUrl: string;
  timeout: number;
}

export async function testConnectivity(
  options: NetworkTestOptions
): Promise<boolean> {
  const { testUrl, timeout } = options;

  try {
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('Timeout')), timeout);
    });

    const fetchPromise = fetch(testUrl, {
      method: 'HEAD',
      mode: 'no-cors',
      cache: 'no-cache',
    });

    await Promise.race([fetchPromise, timeoutPromise]);
    return true;
  } catch {
    return false;
  }
}
