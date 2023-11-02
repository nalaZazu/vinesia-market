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
