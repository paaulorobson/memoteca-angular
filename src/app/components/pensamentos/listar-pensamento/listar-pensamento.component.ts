import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Passo informacoes para o componente filho',
      autoria: 'Angular - Componente pai',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Minha propriedade decorada com o @Input',
      autoria: 'Angular - componente filho',
      modelo: 'modelo3',
    },
    {
      conteudo:
        'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim. ',
      autoria: '',
      modelo: 'modelo1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  possuiPensamento(): boolean {
    return this.listaPensamentos.length > 0;
  }
}
