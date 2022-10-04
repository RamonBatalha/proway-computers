
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private snackBar: MatSnackBar) { }
  
  //método que cria a mensagem de notificação
  //recebe uma mensagem, o segundo parâmetro é o texto do botão e entre chaves vão configurações de duração e posicionamento
  notificar(mensagem: string) {
    this.snackBar.open(mensagem, "Ok", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"
    } );
  }
}
