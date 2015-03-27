'use strict';

class UserService
{
	const ROLE = {
		admin: 'ADMIN',
		player: 'PLAYER'
	};

	constructor()
	{
		this.id = null; // 1 is admin, 2 is user
	}

	set(id)
	{
		if(!id) {
			return {error: 'invalid params'};
		}
		this.id = id;
	}

	get()
	{
		return this.id;
	}

	role(id) {
		if(id) {
			if (id === 1) {
				return ROLE.admin;
			}
			return ROLE.player;
		}
		return {error: 'invalid params'};
	}
}

export default UserService;