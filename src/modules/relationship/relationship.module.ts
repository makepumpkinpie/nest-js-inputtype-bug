import { Module } from '@nestjs/common'
import { RelationshipResolver } from './relationship-mutations.resolver'

@Module({
  imports: [],
  providers: [RelationshipResolver],
  controllers: [],
  exports: [],
})
export class SmsBlasterModule {}
