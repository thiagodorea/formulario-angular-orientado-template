import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'

@Component({
  selector: 'app-mensagem-validacao-form',
  templateUrl: './mensagem-validacao-form.component.html',
  styleUrls: ['./mensagem-validacao-form.component.css']
})
export class MensagemValidacaoFormComponent implements OnInit {

  @Input() mensagem = '';

  constructor() { }

  ngOnInit(): void {
  }

}
