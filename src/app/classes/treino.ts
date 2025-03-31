export class Treino {
  id?: number;
  data?: Date;
  nome?: string;
  
  // Listas de exercícios para cada grupo muscular
  peito?: string;
  ombros?: string;
  triceps?: string;
  biceps?: string;
  costas?: string;
  perna?: string;
  cardio?: string;

  constructor(
    id?: number,
    data?: Date,
    nome?: string,
    peito?: string,
    ombros?: string,
    triceps?: string,
    biceps?: string,
    costas?: string,
    perna?: string,
    cardio?: string
  ) {
    this.id = id;
    this.data = data || new Date();
    this.nome = nome || 'Treino Diário';

    // Se não forem informados, usa strings vazias
    this.peito = peito || '';
    this.ombros = ombros || '';
    this.triceps = triceps || '';
    this.biceps = biceps || '';
    this.costas = costas || '';
    this.perna = perna || '';
    this.cardio = cardio || '';
  }
}
