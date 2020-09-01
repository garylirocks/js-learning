try {
  setTimeout(() => {
    console.log('in setTimeout');
    throw new Error('throw in setTimeout');
  });
  console.log('in try');
} catch (e) {
  console.log('in catch');
} finally {
  console.log('in finally');
}
