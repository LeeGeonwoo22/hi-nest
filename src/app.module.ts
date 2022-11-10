import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// 데코레이터. 클래스에 함수기능을 추가합니다.
@Module({
  imports: [MoviesModule],
  // url을 가져오고 함수를 실행함. express의 router 같은 존재
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
