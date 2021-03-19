import {ADD,SUBSTRACT} from '../constants/constant';

export function add() {
  return {
    type: ADD,
  };
}

export function substract() {
  return {
    type: SUBSTRACT,
  };
}
