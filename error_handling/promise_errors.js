new Promise((resolve, reject) => {
  reject('reject it');
})
  .finally(() => {
    console.log('in first finally');
  })
  .then(res => {
    console.log('in then: ', res);
  })
  .catch(e => {
    console.log('in catch: ', e);
    throw e;
  })
  .finally(() => {
    console.log('in last finally');
  });
