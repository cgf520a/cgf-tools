type MPromise<T> = Promise<T> & {
  status: 'pending' | 'fulfilled' | 'rejected';
  value: T;
  reason: Error;
};

/**
 * 支持部份React.use的功能，将会结合store实现额外的功能
 */

function use<T>(promise: MPromise<T>) {
  if (promise.status === 'fulfilled') {
    return promise.value;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    throw promise;
  } else {
    promise.status = 'pending';
    promise.then(
      result => {
        promise.status = 'fulfilled';
        promise.value = result;
      },
      reason => {
        promise.status = 'rejected';
        promise.reason = reason;
      }
    );
    throw promise;
  }
}

export default use;
