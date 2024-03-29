import Facility from 'src/app/room/models/Facility';

export default class Location {
  public alt: string;
  public id: number;
  public paras: string[];
  public src: string;
  public title: string;
  public facilities?: Facility[];
}