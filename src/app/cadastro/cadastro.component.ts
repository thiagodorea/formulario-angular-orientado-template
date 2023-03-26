import { ConsultaCepService } from './../service/consulta-cep.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private service: ConsultaCepService ) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
    form.valid ? this.router.navigate(['./sucesso']) : form.control.markAllAsTouched();
  }

  pesquisaCep(cep: any, formulario: NgForm){
    if(cep !== ''){
    this.service.getConsultaCep(cep.target.value).subscribe((result) =>{ 
        this.popularEndereco(result, formulario);
    })
    }
  }

  popularEndereco(dados:any, f:NgForm){
    f.form.patchValue({
      endereco: dados.logradouro,
      comlpemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }

}
