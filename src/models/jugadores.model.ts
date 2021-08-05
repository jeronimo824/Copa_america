import {Entity, model, property} from '@loopback/repository';

@model()
export class Jugadores extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  numero_camiseta: number;

  @property({
    type: 'string',
    required: true,
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  sobrenombre: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre_camiseta: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_nacimiento: string;

  @property({
    type: 'number',
    required: true,
  })
  numero_pasaporte: number;

  @property({
    type: 'string',
    required: true,
  })
  club: string;

  @property({
    type: 'string',
    required: true,
  })
  posicion: string;

  @property({
    type: 'number',
    required: true,
  })
  peso: number;

  @property({
    type: 'number',
    required: true,
  })
  altura: number;

  @property({
    type: 'number',
    required: true,
  })
  equipo_nacional: number;


  constructor(data?: Partial<Jugadores>) {
    super(data);
  }
}

export interface JugadoresRelations {
  // describe navigational properties here
}

export type JugadoresWithRelations = Jugadores & JugadoresRelations;
