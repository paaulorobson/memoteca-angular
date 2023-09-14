import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  criarPensamento() {
    console.log('Novo pensamento criado');
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento']);
  }
}
