exports.VerifyHeader = function (headers){

  if(headers['content-type']!="application/json" && headers['content-type']!="application/json; charset=UTF-8")  { return false; }
  
  return true;
}

///////
exports.VerifyPayload = function (body){

  return true;
}

exports.addMinutes = function (date, minutes) {
      return new Date(date.getTime() + minutes*60000);
  }