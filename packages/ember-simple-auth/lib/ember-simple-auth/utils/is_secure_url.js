/**
  @method isSecureUrl
  @private
*/
var isSecureUrl = function(url) {
  var link  = document.createElement('a');
  link.href = url;
  link.href = link.href;
  return link.protocol == 'https:';
};

export { isSecureUrl };
