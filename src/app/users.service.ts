export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    setToActive(id: number) {
        // Add users to active users array
        this.activeUsers.push(this.inactiveUsers[id]);
        // then remove the same users from the inactive users array
        this.inactiveUsers.splice(id, 1);
    }

    setToInactive(id: number) {
        // Add users to inactive users array
        this.inactiveUsers.push(this.activeUsers[id]);
        // then remove the same users from the active users array
        this.activeUsers.splice(id, 1);
    }
}
