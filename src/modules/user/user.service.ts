import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private usersRepositiry:Repository<User>
    ) {}

    getAllUsers(): Promise<User[]> {
        return this.usersRepositiry.find({
            relations: ['pets']
        });
    }

    async getUserByID(id:number): Promise<User> {
        try {
            const user = await this.usersRepositiry.findOneOrFail(id);
            return user;
        } catch (err) {
            throw err;
        }
    }

    createUser(name: string): Promise<User> {
        const newUser = this.usersRepositiry.create({name});
        return this.usersRepositiry.save(newUser);
    }

    async updateUser(id: number, name: string) : Promise<User> {
        const user = await this.getUserByID(id);
        user.name = name;
        return this.usersRepositiry.save(user);
    }

    async deleteUser(id:number) : Promise<User> {
        const user = await this.getUserByID(id);
        return this.usersRepositiry.remove(user);
    }
}
