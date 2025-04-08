import { randFullName } from '@ngneat/falso';
import { randPhoneNumber } from '@ngneat/falso';
import { randJobTitle } from '@ngneat/falso';
import { randEmail } from '@ngneat/falso';
import { randIpv6 } from '@ngneat/falso';
import { randFullAddress } from '@ngneat/falso';

export const generateAddress = () => randFullAddress();
export const generateIpv6 = () => randIpv6();
export const generateEmail = () => randEmail();
export const generateJobTitle = () => randJobTitle();
export const generatePhoneNumber = () => randPhoneNumber();
export const generateFullName = (withAccents = false) => randFullName({ withAccents });
