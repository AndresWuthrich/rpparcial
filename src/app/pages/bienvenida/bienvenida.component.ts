import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  public userLogueado: Observable<any> = this.auth.fireStoreAuth.user;
  public miGit: any;

  constructor(private gitService: GitService, public auth: AuthService) {
    this.gitService.miGit().subscribe(datos => {
      this.miGit = datos;
    });
   }

  ngOnInit(): void {
  }
}
