import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 데코레이터. 클래스 위에 함수기능을 추가합니다.
@Module({
  imports: [MoviesModule],
  // url을 가져오고 함수를 실행함. express의 router 같은 존재
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
