import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { Perfil } from 'src/app/models/perfils';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  columns = [
    { label: 'N°', key: 'count' },
    { label: 'Descripcion', key: 'nombre' },
    { label: 'Estado', key: 'estado' },
  ];

  perfiles: Perfil[] = [];

  destroy$: Subject<void> = new Subject<void>();

  constructor(private perfilSvc: PerfilService) {}

  ngOnInit(): void {
    this.perfilSvc
      .getAllPerfils()
      .pipe(
        takeUntil(this.destroy$),
        tap((perfiles) => !!perfiles),
        tap((perfiles) => (this.perfiles = this.changeToDTO(perfiles)))
      )
      .subscribe();
  }

  changeToDTO(perfiles: Perfil[]): Perfil[] {
    const perfilesDTO: Perfil[] = perfiles.map((x) => {
      x.estado = x.estado === 0 ? 'Habilitado' : 'Deshabilitado';

      return x;
    });

    return perfilesDTO;
  }

  foundByKey(item: Perfil, key: string){
    return item[key];
  }

  addNewPerf(){

  }
}
