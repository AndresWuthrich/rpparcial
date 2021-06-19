import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  public miGit: any;

  constructor(private gitService: GitService) {
    this.gitService.miGit().subscribe(datos => {
      this.miGit = datos;
    });
   }

  ngOnInit(): void {
  }

}
