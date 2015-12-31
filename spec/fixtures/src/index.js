import { Other as OtherClass } from './other';
import 'babel-polyfill';
import BPromise from 'bluebird';

// Simple example of the es6 code
export class MyClass extends OtherClass {
  static delay() {
    return BPromise.coroutine(function* () {
      yield BPromise.delay(100);
      return true;
    })();
  }
}
