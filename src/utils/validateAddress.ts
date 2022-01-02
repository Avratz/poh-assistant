/**
 * Checks if the given string is an address
 * @method isValidAddress
 */
function isValidAddress(address: string) {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false
  } 
  return true
}

export default isValidAddress