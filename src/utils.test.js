import { createsAUserAndReturnsTheName, whatIsThis, whatIsThis2 } from './utils';


it('provides the correct name of a User', () => {
  expect(createsAUserAndReturnsTheName("John")).toEqual("John");
  expect(createsAUserAndReturnsTheName("Jon")).toEqual("Jon");
});

it('testing the this keyword, inside an object', () => {
  expect(whatIsThis()).toEqual("Just testing ...");
});

it('testing the this keyword, from another execution context', () => {
  expect(whatIsThis2()).toEqual("Just testing (again) ...");
});
