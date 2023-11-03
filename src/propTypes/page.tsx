import PropTypes from "prop-types";
export interface Region {
  name: String;
  description: String;
  country: String;
}
export interface Winery {
  name: String;
  description: String;
  region: Region;
}
export interface releaseDetails {
  releaseDate: String;
  releasePrice: Number;
  averagePrice: Number;
  highPrice: Number;
}
export interface rating {
  critic: String;
  lwinNumber: Number;
  vintage: Number;
  rating: Number;
  max: Number;
  description: String;
  releaseTime: Number;
}
export interface Wine {
  name: String;
  description: String;
  type: String;
  releaseTime: Number;
  packageType: String;
  size: String;
  items: Number;
  lwinNumber: Number;
  vintage: Number;
  source: String;
  winery?: Winery;
}


export interface chart{
  
}