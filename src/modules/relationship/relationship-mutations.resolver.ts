import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { Relationship } from './types/objects/relationship.object'
import { ParentInput } from './types/inputs/parent.input'

@Resolver(() => Relationship)
export class RelationshipResolver {
  @Mutation(() => Boolean, { name: 'set' })
  set(@Args('input') input: ParentInput): boolean {
    console.log('input.children', input.children)
    console.log('input.children', JSON.stringify(input.children))
    return true
  }
}
