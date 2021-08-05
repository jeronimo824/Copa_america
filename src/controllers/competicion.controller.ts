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
  getModelSchemaRef, param, patch, put, requestBody,
  response
} from '@loopback/rest';
import {Jugadores} from '../models';
import {JugadoresRepository} from '../repositories';

export class CompeticionController {
  constructor(
    @repository(JugadoresRepository)
    public jugadoresRepository: JugadoresRepository,
  ) { }


  @get('/jugadores/count')
  @response(200, {
    description: 'Jugadores model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Jugadores) where?: Where<Jugadores>,
  ): Promise<Count> {
    return this.jugadoresRepository.count(where);
  }

  @get('/jugadores')
  @response(200, {
    description: 'Array of Jugadores model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Jugadores, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Jugadores) filter?: Filter<Jugadores>,
  ): Promise<Jugadores[]> {
    return this.jugadoresRepository.find(filter);
  }

  @patch('/jugadores')
  @response(200, {
    description: 'Jugadores PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jugadores, {partial: true}),
        },
      },
    })
    jugadores: Jugadores,
    @param.where(Jugadores) where?: Where<Jugadores>,
  ): Promise<Count> {
    return this.jugadoresRepository.updateAll(jugadores, where);
  }

  @get('/jugadores/{id}')
  @response(200, {
    description: 'Jugadores model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Jugadores, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Jugadores, {exclude: 'where'}) filter?: FilterExcludingWhere<Jugadores>
  ): Promise<Jugadores> {
    return this.jugadoresRepository.findById(id, filter);
  }

  @patch('/jugadores/{id}')
  @response(204, {
    description: 'Jugadores PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jugadores, {partial: true}),
        },
      },
    })
    jugadores: Jugadores,
  ): Promise<void> {
    await this.jugadoresRepository.updateById(id, jugadores);
  }

  @put('/jugadores/{id}')
  @response(204, {
    description: 'Jugadores PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() jugadores: Jugadores,
  ): Promise<void> {
    await this.jugadoresRepository.replaceById(id, jugadores);
  }

}
