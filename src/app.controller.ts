import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  home() {
    return 'Welcome to my Movie API';
  }
// url 'hello' 를 가져온다
// `/hello` 가 sayHello 함수를 실행한다.

  @Get(`/hello`)
  sayHello(): string {
    return 'Hello everyone';
  }
}
