import { config } from 'dotenv'
config()
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { ExpressAdapter } from '@nestjs/platform-express'
import * as express from 'express'
import * as http from 'http'

async function bootstrap() {
  const server = express()
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server))
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      // removes any DTO properties without class-validator rules
      whitelist: true,
    }),
  )
  app.enableShutdownHooks()
  await app.init()

  const httpServer = http.createServer(server)
  if (process.env.KEEP_ALIVE_TIMEOUT) {
    httpServer.keepAliveTimeout = parseInt(process.env.KEEP_ALIVE_TIMEOUT, 10)
  }
  httpServer.listen(3000)
}
bootstrap().catch((error) => {
  console.error('Unhandled rejection starting up application', error as Error)
})
