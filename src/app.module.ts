import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  // url을 가져오고 함수를 실행함. express의 router 같은 존재
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
