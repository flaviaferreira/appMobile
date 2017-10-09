import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from './../../app/common/model/user';
import { UserService } from './../../providers/user.service';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    public user: User;

    constructor(public navCtrl: NavController,
        private _userService: UserService) {

        _userService.getLogedUser().subscribe((data) => {
            this.user = data;
        });

    }

}
