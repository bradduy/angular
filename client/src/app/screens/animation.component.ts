import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-animation',
    template: `
        <p>Animation component</p>
        <div *ngFor="let user of users">
            <div
                class="user"
                [@userAnim]="user.active ? 'active' : 'inactive'"
            >
                <p>Name: {{ user.name }}</p>
                <button class="btn btn-danger" (click)="removeUser(user.name)">Remove</button>
                <br>
                <br>
                <button class="btn btn-info" (click)="user.active = !user.active">Toggle</button>
            </div>    
        </div>
    `,
    styles: [
        `.user {
            margin: 10px;
            padding: 10px;
            width: 100px;
            border-radius: 10px;
        }`
    ],
    animations: [
        trigger('userAnim', [
            state('active', style({
                backgroundColor: '#C4B7D7'
            })),
            state('inactive', style({
                backgroundColor: 'gray'
            })),
            transition('inactive => active', animate('1000ms ease-in')),
            transition('active => inactive', animate('1000ms ease-out')),
        ])
    ]
})

export class AnimationComponent {
    users = [
        { name: 'AAA', active: true },
        { name: 'BBB', active: false },
        { name: 'CCC', active: true },
        { name: 'DDD', active: false },
    ]

    removeUser(name: string) {
        const index = this.users.findIndex(u => u.name === name);
        this.users.splice(index, 1);
    }
}
