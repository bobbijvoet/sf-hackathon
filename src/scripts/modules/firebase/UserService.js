'use strict';

const ROLE = {
  admin: 'ADMIN',
  player: 'PLAYER'
};

class UserService
{
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

	role() {
    return this.id === 1 ? ROLE.admin : ROLE.player;
	}
}

export default UserService;