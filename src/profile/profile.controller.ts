import {Get, Post, Param, Put, Delete, Query, Controller, Body, HttpCode} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Logger } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';

import { UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IUserProfile } from './models/profile.model';


@Controller('profiles')
// @UseGuards(AuthGuard('bearer'))
export class ProfileController {

    @Post()
    async create(@Body(new ValidationPipe({transform: true})) body: IUserProfile) {
        return await this.profileService.createProfile(body);
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        return await this.profileService.findProfile(id);
    }

    @Get(':id/docker-versions')
    async inquireVersions(@Param('id') id) {        
        return await this.profileService.inquireDockerVersions(id);
    }

    @Get(':id/docker-news')
    async inquireNews(@Param('id') id) {        
        return await this.profileService.inquireDockerVersionNews(id);
    }

    @Get(':id/docker-notifications')
    async doNotifications(@Param('id') id) {        
        return await this.profileService.doNotifications(id);
    }

    @Put(':id')
    async update(@Param('id') id, @Body(new ValidationPipe({transform: true})) body: IUserProfile) {
        return await this.profileService.updateProfile(id, body);
    }

    @Delete(':id')
    async remove(@Param('id') id) {
        return await this.profileService.deleteProfile(id);
    }

    constructor(private readonly profileService: ProfileService ) {        
    }
}
