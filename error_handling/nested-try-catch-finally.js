function foo() {
  try {
    try {
      throw new Error('xx');
      return 1;
    } catch (e) {
      console.log('in inner catch');
      throw e;
      return 2;
    } finally {
      console.log('in inner finally');
      // return 3;
    }

    return 100;
    console.log('after inner try...catch');
  } catch (e2) {
    console.log('in outer catch');
    throw new Error('zzz');
    return 20;
  } finally {
    console.log('in outer finally');
    return 30;
  }

  console.log('after outer try...catch');
}

console.log(foo());
