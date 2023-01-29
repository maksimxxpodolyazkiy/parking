import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { LicenseDto } from 'src/modules/parking/dto/license.dto';
import { ParkingService } from 'src/modules/parking/services/parking/parking.service';

@Controller('parking')
export class ParkingController {
  constructor(private parkingService: ParkingService) {}

  @UseGuards(JwtAuthGuard)
  @Post('park')
  park(@Body() licenseDto: LicenseDto) {
    return this.parkingService.park(licenseDto.license);
  }

  @UseGuards(JwtAuthGuard)
  @Get('slot:slotId')
  getSlotInf(@Param('slotId') slotId: string) {
    return this.parkingService.getSlotInfo(slotId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('unpark:license')
  unpark(@Param('license') license: string) {
    return this.parkingService.unpark(license);
  }
}
