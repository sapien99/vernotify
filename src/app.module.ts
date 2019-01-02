import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DockerModule } from './docker/docker.module';
import { ProfileModule } from './profile/profile.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
      /*MongooseModule.forRoot(
          'mongodb://localhost:27017/nest',
          { useNewUrlParser: true },
      ),*/
      AuthModule,
      DockerModule,
      ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
