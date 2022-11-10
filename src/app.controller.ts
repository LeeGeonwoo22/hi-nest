import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  home(): string {
    return this.appService.home()
  }

  @Get(`/hello`)
  sayHello(): string {
    // 일부러 함수명을 다르게 지었음
    return this.appService.Hello();
  }
}
