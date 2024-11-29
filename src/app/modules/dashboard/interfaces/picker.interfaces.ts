import Color from '../../../core/common/color';

export default interface IPicker {
  size: 'full' | number;
  color: Color;
  class: string;
}
