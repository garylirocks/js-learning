function foo() {
  try {
    throw new Error('xx');
    return 1;
  } catch (e) {
    console.log('in catch');
    throw e;
    return 2;
  } finally {
    console.log('in finally');
    return 3;
  }

  return 100;
  console.log('after try...catch');
}

console.log(foo());
