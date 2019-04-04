/**
 * @class test.sdk.bhbapp.cn
 * @module UserService
 * @alias 用户服务
 * @description 
 * @author haozi
 */
export default class Sdk {
    /**
     * @version 2.1.0
     * 
     * @mdx
     *  `这个是一个测试的 API`
     *  ```mdx
     *    `a` 
     *    ```javascript
     *      const a = 2333
     *    ```
     *  ```
     *  ```typescript
     *      const a = 'qq'
     *  ``
     * 
     */
    @testDecorator('a')
    @testDecorator('b')
    @testDecorator('c')
    async testApi(name: string, p2: {
        pp1: number,
        pp3: [number]
    }[]): Promise<any> {
      // return name + (p2[0] ? p2[0].pp1 : '');
      return name + p2[0].pp1;
    }
}


function testDecorator(value: string) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) =>  {
      target[propertyKey]()
  }
}