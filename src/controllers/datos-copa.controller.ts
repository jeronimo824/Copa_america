import {
  Filter,
  FilterExcludingWhere,
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param, response
} from '@loopback/rest';
import {Copa} from '../models';
import {CopaRepository} from '../repositories';

export class DatosCopaController {
  constructor(
    @repository(CopaRepository)
    public copaRepository: CopaRepository,
  ) { }



  @get('/copas')
  @response(200, {
    description: 'Array of Copa model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Copa, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Copa) filter?: Filter<Copa>,
  ): Promise<Copa[]> {
    return this.copaRepository.find(filter);
  }


  @get('/copas/{id}')
  @response(200, {
    description: 'Copa model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Copa, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Copa, {exclude: 'where'}) filter?: FilterExcludingWhere<Copa>
  ): Promise<Copa> {
    return this.copaRepository.findById(id, filter);
  }

}
