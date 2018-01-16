# typescript-bootstrap-waitingfor
Typescript version of https://github.com/ehpc/bootstrap-waitingfor

```js
let wait = new WaitingDialog('Waiting...'); // message here is optional

wait.show(); 
// if passing message here, it must be on options param
// wait.show({message: 'Waiting...'});

wait.close();
```
