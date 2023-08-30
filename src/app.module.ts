import { DynamicModule, ForwardReference, Module, Type } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { RootResolver } from './root.resolver'
import { GraphQLFormattedError } from 'graphql'
import { SmsBlasterModule } from './modules/relationship/relationship.module'

function getGraphQLModule() {
  return GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: true,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    context: ({ req }) => {
      return { request: req }
    },
    introspection: true,
    formatError: (formattedError: GraphQLFormattedError) => {
      // skip if already formatted as a pie error
      if (formattedError.extensions?.pieErrors) return formattedError
      return formattedError
    },
    fieldResolverEnhancers: ['guards'],
  })
}

function getModuleImports(): Array<Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference> {
  const moduleImports: Array<Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference> = [
    getGraphQLModule(),
    SmsBlasterModule
  ]
  return moduleImports
}
@Module({
  imports: getModuleImports(),
  controllers: [AppController],
  providers: [AppService, RootResolver],
})
export class AppModule {}
