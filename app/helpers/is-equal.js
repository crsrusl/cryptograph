import { helper } from '@ember/component/helper';

export function isEqual(params/*, hash*/) {
  if (params[0]===params[1]) return true;
}

export default helper(isEqual);
