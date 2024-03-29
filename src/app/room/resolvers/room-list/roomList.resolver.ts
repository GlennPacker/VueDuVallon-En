import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import Room from '../../models/Room';
import { RoomService } from '../../services/room/room.service';

export const RoomListResolver: ResolveFn<Room[]> = () => {
  return inject(RoomService).getAll();
};
