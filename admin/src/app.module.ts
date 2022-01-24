import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'password',
          database: 'nest_microservice_admin',
          autoLoadEntities:true,
          synchronize: true,
      }),
      ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
