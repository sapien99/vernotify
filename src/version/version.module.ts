import { Module } from '@nestjs/common';
import { VersionController } from './version.controller';
import { VersionManifestSchema } from './models/version.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { VersionService } from './version.service';
import { DockerModule } from '../docker/docker.module';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [        
        DatabaseModule,
        DockerModule,
    ],
    exports: [
        VersionService
    ],
    controllers: [VersionController],
    providers: [VersionService],
})
export class VersionModule {}
