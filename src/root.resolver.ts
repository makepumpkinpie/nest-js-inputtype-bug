import { Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class RootResolver {
  @Query(() => String)
  async hello() {
    return 'Hello World!'
  }
}
