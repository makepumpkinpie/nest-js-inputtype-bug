import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'
import { ChildInput } from './child.input'

@InputType()
export class ParentInput {
  @Field(() => [ChildInput])
  @IsNotEmpty()
  children: ChildInput[]
}
