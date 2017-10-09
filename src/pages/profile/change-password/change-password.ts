import { Component, OnInit } from "@angular/core";
import { NavController } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { User } from './../../../app/common/model/user';
import { AccountService } from './../../../providers/account.service';
import { UserService } from './../../../providers/user.service';
import { ProfilePage } from './../profile';

@Component({
	templateUrl: "change-password.html",
	selector: "change-password"
})
export class ChangePasswordPage implements OnInit {

	public changePasswordForm: FormGroup;
	public user: User;

	constructor(public navCtrl: NavController,
		private _accountService: AccountService,
		private _userService: UserService) {

		_userService.getLogedUser().subscribe((data) => {
			this.user = data;
		});
	}

	ngOnInit() {
		this.changePasswordForm = new FormGroup({
			currentPass: new FormControl(null, Validators.required),
			newPass: new FormControl(null, Validators.required),
			confirmNewPass: new FormControl(null, Validators.required)
		});
	}

	cancel() {
		this.navCtrl.setRoot(ProfilePage);
	}

	change() {
		this._accountService.changePassword(this.changePasswordForm.value);
	}
}