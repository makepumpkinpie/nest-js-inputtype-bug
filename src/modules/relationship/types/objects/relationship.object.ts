import { Field, ObjectType } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'

@ObjectType()
export class Relationship {
  @Field(() => [String])
  @IsNotEmpty()
  names: string[]
}
