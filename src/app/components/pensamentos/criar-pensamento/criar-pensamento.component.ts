import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})

export class CriarPensamentoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private service: PensamentoService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({ // formulario reativo
      conteudo: ['', Validators.compose([ // Validators.compose usado para adicionar varias validacoes
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: [''],
      favorito: [false]
    })
  }

  habilitarBotao(): string {
    return this.formulario.valid ? 'botao' : 'botao__desabilitado'
  }

  criarPensamento() {
    if(this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento']);
  }
}
