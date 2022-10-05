import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  // url을 가져오고 함수를 실행함. express의 router 같은 존재
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
