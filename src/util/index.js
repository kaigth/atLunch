/**
 * Render cost symbol based on google price rating
 *
 * @function
 * @memberof components
 * @param {object} cost The google cost rating
 * @returns {string} The symbol based on the google cost rating
 */
 const renderCost = (cost) => {
  if (cost === 2) return '$$';
  if (cost === 3) return '$$$';

  return '$';
}

export { renderCost };