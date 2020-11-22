import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menu = [
        {
      "label": "Catalogo de Produtos",
      "icone": "layers-outline",
      "acao": "catalogo",
      "menu": "0"
    },
    {
      "label": "Adicionar Produto",
      "icone": "add-outline",
      "acao": "details", 
      "menu": "1"
    },
    {
      "label": "Contato",
      "icone": "call-outline",
      "acao": "contato", 
      "menu": "2"
    },
    {
      "label": "Sobre",
      "icone": "information-circle-outline",
      "acao": "sobre", 
      "menu": "3"
    }    
  ]
  constructor() { }
}
