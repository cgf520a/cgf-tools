type Status = 'pending' | 'success' | 'error';

export function wrapPromise<T>(promise: Promise<T>) {
  let status: Status = 'pending';
  let response: T;

  const suspender = promise.then(
    (res: any) => {
      status = 'success';
      response = res;
    },
    (err: any) => {
      status = 'error';
      response = err;
    }
  );

  const handler = {
    pending: () => {
      throw suspender;
    },
    error: () => {
      throw response;
    },
    default: () => response,
  };

  const read = () => {
    const result = handler[status as keyof typeof handler]
      ? handler[status as keyof typeof handler]()
      : handler.default();
    return result;
  };

  return { read };
}

function fetchSuspenseData<T>(promise: Promise<T>) {
  // const promise = promise;
  return wrapPromise(promise);
}

export default fetchSuspenseData;
