import { Injectable } from '@nestjs/common';

// controller는 url을 가져오고 function을 리턴
// service 는 비즈니스 로직을 실행하는 곳이다.
@Injectable()
export class AppService {
  home(): string {
    return 'Welcome to my Movie API';
  }
  Hello(): string {
    return 'Hello everyone';
  }
}
