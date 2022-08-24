import * as HelloWorld from '../src/hello-world';

test('Just a test to be run', () => {
   expect(HelloWorld.get()).toEqual('Hello World!');
});
