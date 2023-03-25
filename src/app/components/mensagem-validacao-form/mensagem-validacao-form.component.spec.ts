import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemValidacaoFormComponent } from './mensagem-validacao-form.component';

describe('MensagemValidacaoFormComponent', () => {
  let component: MensagemValidacaoFormComponent;
  let fixture: ComponentFixture<MensagemValidacaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemValidacaoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagemValidacaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
