'use strict';

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
}

export default UserService;