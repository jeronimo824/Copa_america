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
  getModelSchemaRef, param, post, requestBody,
  response
} from '@loopback/rest';
import {Partidos} from '../models';
import {PartidosRepository} from '../repositories';

export class PartidosController {
  constructor(
    @repository(PartidosRepository)
    public partidosRepository: PartidosRepository,
  ) { }

  @post('/partidos')
  @response(200, {
    description: 'Partidos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Partidos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Partidos, {
            title: 'NewPartidos',
            exclude: ['id'],
          }),
        },
      },
    })
    partidos: Omit<Partidos, 'id'>,
  ): Promise<Partidos> {
    return this.partidosRepository.create(partidos);
  }

  @get('/partidos/count')
  @response(200, {
    description: 'Partidos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Partidos) where?: Where<Partidos>,
  ): Promise<Count> {
    return this.partidosRepository.count(where);
  }

  @get('/partidos')
  @response(200, {
    description: 'Array of Partidos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Partidos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Partidos) filter?: Filter<Partidos>,
  ): Promise<Partidos[]> {
    return this.partidosRepository.find(filter);
  }



  @get('/partidos/{id}')
  @response(200, {
    description: 'Partidos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Partidos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Partidos, {exclude: 'where'}) filter?: FilterExcludingWhere<Partidos>
  ): Promise<Partidos> {
    return this.partidosRepository.findById(id, filter);
  }


}
