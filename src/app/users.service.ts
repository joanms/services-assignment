import { Injectable } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: CounterService) {}

    setToActive(id: number) {
        // Add users to active users array
        this.activeUsers.push(this.inactiveUsers[id]);
        // then remove the same users from the inactive users array
        this.inactiveUsers.splice(id, 1);
        // Increment the counter
        this.counterService.incrementInactiveToActive();
    }

    setToInactive(id: number) {
        // Add users to inactive users array
        this.inactiveUsers.push(this.activeUsers[id]);
        // then remove the same users from the active users array
        this.activeUsers.splice(id, 1);
        // Increment the counter
        this.counterService.incrementActiveToInactive();
    }
}
