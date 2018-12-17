function askedAndAnswered() {

  let askedAndAnswered=document.getElementById('asked-and-answered');
  let userName = (prompt('Please Enter Your First Name'));
  let userAge = Number(prompt('Please Enter Your Age'));

  let userBirthday = userAge + 1
  result=document.getElementById('asked-and-answered')
  result.innerHTML = 'Hello,' + userName  'When do you turn' + userBirthday '?'
}

function classTrip() {

  let tripStudents = (prompt('Enter the number of students attending the trip');
  let tripChaperones = (prompt('Enter the number of chaperones,including teachers, attending the trip');
  let maximumPeople =  (prompt('Enter the maximum nuber of people allowed on the trip');

    result=document.getElementById('class-trip')
    result.innerHTML = tripStudents + 'are going on the trip.' + tripChaperones 'are going on the trip.' + maximumPeople 'are allowed on the trip.';
}
