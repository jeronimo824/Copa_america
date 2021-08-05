import {Entity, model, property} from '@loopback/repository';

@model()
export class Partidos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'date',
    required: true,
  })
  hora_partido: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  estadio: string;

  @property({
    type: 'number',
    required: true,
  })
  grupo: number;

  @property({
    type: 'number',
    required: true,
  })
  equipo_local: number;

  @property({
    type: 'number',
    required: true,
  })
  equipo_visitante: number;

  @property({
    type: 'string',
    required: true,
  })
  arbitro: string;


  constructor(data?: Partial<Partidos>) {
    super(data);
  }
}

export interface PartidosRelations {
  // describe navigational properties here
}

export type PartidosWithRelations = Partidos & PartidosRelations;
