import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { FinanTypeService } from '../../services/finantype.service';

import { FinanType } from '../../services/finanType';

import { Response } from '../../services/response';

@Component({
    selector: 'app-consulta-finantype',
    templateUrl: './consulta.component.html',
    styleUrls: ['./consulta.component.css']
})
export class ConsultaFinanTypeComponent implements OnInit {

    private finanTypes: FinanType[] = new Array();
    private titulo: string;

    constructor(private finanTypeService: FinanTypeService, private router: Router) { }

    ngOnInit() {
        this.titulo = 'Tipos de Financiamentos';
        this.finanTypeService.getFinanTypes().subscribe(function (res) {
            this.finanTypes = res;
            console.log(this.finanTypes);
        });
    }

    delete(id: number, index: number): void {
        if (confirm('Deseja realmente excluir esse registro?')) {
            this.finanTypeService.deleteFinanType(id).subscribe(function (response) {
                let res: Response = <Response>response;

                if (res.id === 1) {
                    alert(res.msg);
                    this.finanTypes.splice(index, 1);
                } else {
                    alert(res.msg);
                }
            }, function (erro) {
                alert(erro);
            });
        }
    }

    edit(id: number): void {
        this.router.navigate(['/cadastro-finantype', id]);

    }
}
