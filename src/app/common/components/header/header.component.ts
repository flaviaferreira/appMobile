import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'component-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    public user: any;

    constructor() {
    }

    ngOnInit() {
        this.user = {
            nome: "Flavia",
            perfil: "Administrador",
            urlFoto: './assets/images/avatar_profile.jpg'
        }

    }

}
