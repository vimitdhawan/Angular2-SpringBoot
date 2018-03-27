import { Injectable } from '@angular/core';

@Injectable()
export class Topic {

    private id;
    private name;
    private description;

    public getId(): boolean {
        return this.id;
    }

    public setId(value: boolean) {
        this.id = value;
    }

    public getName(): boolean {
        return this.name;
    }

    public setName(value: boolean) {
        this.name = value;
    }

    public getDescription(): boolean {
        return this.description;
    }

    public setDescription(value: boolean) {
        this.description = value;
    }
}

