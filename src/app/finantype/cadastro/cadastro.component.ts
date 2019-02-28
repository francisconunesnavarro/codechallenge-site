import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { FinanTypeService } from '../../services/finantype.service';

import { FinanType } from '../../services/finanType';

import { Response } from '../../services/response';

@Component({
    selector: 'app-cadastro-finantype',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})
export class CadastroFinanTypeComponent implements OnInit {

    private titulo: string;
    private finanType: FinanType = new FinanType();

    constructor(private finanTypeService: FinanTypeService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(function (parameter) {
            if (parameter['id'] === undefined) {
                this.titulo = 'Novo Tipo de Financiamento';
            } else {
                this.titulo = 'Editar Tipo de Financiamento';
                this.finanTypeService.getFinanType(Number(parameter['id'])).subscribe(res => this.finanTypeService = res);
            }
        });
    }

    salvar(): void {
        if (this.finanType.id === undefined) {
            this.finanTypeService.addFinanType(this.finanType).subscribe(response => {
                let res: Response = <Response>response;

                if (res.id === 1) {
                    alert(res.msg);
                    this.finanType = new FinanType();
                } else {
                    alert(res.msg);
                }
            }, erro => {
                alert(erro);
            });
        } else {
            this.finanTypeService.updateFinanType(this.finanType).subscribe(response => {
                let res: Response = <Response>response;

                if (res.id === 1) {
                    alert(res.msg);
                    this.router.navigate(['/consulta-finan-type']);
                } else {
                    alert(res.msg);
                }
            }, erro => {
                alert(erro);
            });
        }
    }
}
