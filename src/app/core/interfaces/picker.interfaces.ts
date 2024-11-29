import Color from '../utils/color';

export default interface IPicker {
  size: 'full' | number;
  color: Color;
  class: string;
}
