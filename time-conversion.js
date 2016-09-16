var time = "9:05:05PM"

function main(time) {
  var hours = parseInt(time.substring(0, time.indexOf(':')));
  // finds the hours first and set it to the first arr //
  var minutes = parseInt(time.substring(time.indexOf(':') + 1, time.lastIndexOf(':')));
  var seconds = parseInt(time.substring(time.lastIndexOf(':') + 1, time.lastIndexOf(':') + 3 ));
  var pm = time.indexOf('PM'); // returns either -1 for AM or 8 for PM //

  if ( pm == -1 ) {
    if ( hours == 12 ){
      hours = '00'
    } else {
      if (hours.toString().length < 2) {
        hours = '0' + hours;
      } else { hours }
    }
    if ( minutes.toString().length < 2 ){
      minutes = '0' + minutes;
    }
    if ( seconds.toString().length < 2 ) {
      seconds = '0' + seconds;
    }
    console.log(hours + ':' + minutes + ':' + seconds)

  } else {
    if ( minutes.toString().length < 2 ){
      minutes = '0' + minutes;
    }
    if (hours < 12 ) {
      hours = hours + 12;
    }
    if ( seconds.toString().length < 2 ) {
      seconds = '0' + seconds;
    }

  console.log(hours + ':' + minutes + ':' + seconds)

  }
}

main(time);
