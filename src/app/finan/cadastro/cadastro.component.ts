import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { FinanService } from '../../services/finan.service';
import { FinanTypeService } from '../../services/finantype.service';

import { Finan } from '../../services/finan';
import { FinanType } from '../../services/finanType';

import { Response } from '../../services/response';

@Component({
    selector: 'app-cadastro-finan',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})
export class CadastroFinanComponent implements OnInit {

    private titulo: string;
    private finan: Finan = new Finan();
    private finanTypes: FinanType[] = new Array();
    private amounts: number[];

    constructor(private finanService: FinanService, private router: Router, private activatedRoute: ActivatedRoute, 
        private finanTypeService: FinanTypeService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(parameter => {
            if (parameter['id'] === undefined) {
                this.titulo = 'Novo Financiamento';
            } else {
                this.titulo = 'Editar Financiamento';
                this.finanService.getFinan(Number(parameter['id'])).subscribe(res => this.finan = res);
            }
            this.finanTypeService.getFinanTypes().subscribe(res => {
                this.finanTypes = res;
                this.createAmounts();
            });
        });
    }

    salvar(): void {
        if (this.finan.id === undefined) {
            this.finanService.addFinan(this.finan).subscribe(response => {
                let res: Response = <Response>response;

                if (res.id === 1) {
                    alert(res.msg);
                    this.finan = new Finan();
                } else {
                    alert(res.msg);
                }
            }, erro => {
                alert(erro);
            });
        } else {
            this.finanService.updateFinan(this.finan).subscribe(response => {
                let res: Response = <Response>response;

                if (res.id === 1) {
                    alert(res.msg);
                    this.router.navigate(['/consulta-finan']);
                } else {
                    alert(res.msg);
                }
            }, erro => {
                alert(erro);
            });
        }
    }

    changeFinanType(): void {
        this.createAmounts();
    }

    createAmounts(): void {
        let qtd = 5;
        if (this.finan !== undefined && this.finan.finanType === 'I') {
            qtd = 4;
        }

        for (let i = 1; i <= qtd; i++) {
            this.amounts.push(i * 12);
        }
    }

    calcAmount(): void {
        if (this.finan.finanType === undefined) {
            alert('Selecione o Tipo Financiamento');
        } else if (this.finan.value === undefined) {
            alert('Preencha o valor');
        } else if (this.finan.amount === undefined) {
            alert('Selecione o número de mensalidades');
        } else {
            this.finanService.calcAmount(Number(this.finan.finanType), Number(this.finan.value), Number(this.finan.amount))
                .subscribe(res => {
                    this.finan.quota = res;
                });
        }
    }
}
