import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param, response
} from '@loopback/rest';
import {Equipos} from '../models';
import {EquiposRepository} from '../repositories';

export class PaisjugadorController {
  constructor(
    @repository(EquiposRepository)
    public equiposRepository: EquiposRepository,
  ) { }



  @get('/equipos/count')
  @response(200, {
    description: 'Equipos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Equipos) where?: Where<Equipos>,
  ): Promise<Count> {
    return this.equiposRepository.count(where);
  }

  @get('/equipos')
  @response(200, {
    description: 'Array of Equipos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Equipos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Equipos) filter?: Filter<Equipos>,
  ): Promise<Equipos[]> {
    return this.equiposRepository.find(filter);
  }



  @get('/equipos/{id}')
  @response(200, {
    description: 'Equipos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Equipos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Equipos, {exclude: 'where'}) filter?: FilterExcludingWhere<Equipos>
  ): Promise<Equipos> {
    return this.equiposRepository.findById(id, filter);
  }


}
