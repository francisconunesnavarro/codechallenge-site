import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { FinanService } from '../../services/finan.service';

import { Finan } from '../../services/finan';

import { Response } from '../../services/response';

@Component({
    selector: 'app-consulta-finan',
    templateUrl: './consulta.component.html',
    styleUrls: ['./consulta.component.css']
})
export class ConsultaFinanComponent implements OnInit {

    private finans: Finan[] = new Array();
    private titulo: string;

    constructor(private finanService: FinanService, private router: Router) { }

    ngOnInit() {
        this.titulo = 'Financiamentos';
        this.finanService.getFinans().subscribe(res => this.finans = res);
    }

    delete(id: number, index: number): void {
        if (confirm('Deseja realmente excluir esse registro?')) {
            this.finanService.deleteFinan(id).subscribe(response => {
                let res: Response = <Response>response;

                if (res.id === 1) {
                    alert(res.msg);
                    this.finans.splice(index, 1);
                } else {
                    alert(res.msg);
                }
            }, erro => {
                alert(erro);
            });
        }
    }

    edit(id: number): void {
        this.router.navigate(['/cadastro-finan', id]);
    }
}
