import validator from 'validator';
import { errorMessage } from '../actions';

export const isValidCustomOrder = (state) => {
  const { color, length, name, email, phoneNumber } = state;
  if (!color || !length || !name || !email || !phoneNumber) {
    errorMessage('Please enter all required fields');
    return false;
  }
  if (!validator.isEmail(email)) {
    errorMessage('Please enter a valid email.');
    return false;
  }
  if (!validator.isMobilePhone(phoneNumber)) {
    errorMessage('Please enter a valid phone number.');
    return false;
  }
  return true;
};

export const isValidProShopOrder = (state) => {
  const { details, name, email, phoneNumber } = state;
  if (!details || !name || !email || !phoneNumber) {
    errorMessage('Please enter all required fields');
    return false;
  }
  if (!validator.isEmail(email)) {
    errorMessage('Please enter a valid email.');
    return false;
  }
  if (!validator.isMobilePhone(phoneNumber)) {
    errorMessage('Please enter a valid phone number.');
    return false;
  }
  return true;
};
