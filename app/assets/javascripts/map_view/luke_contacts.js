myApp.factory('lukeContacts', function () {

  var service = {};
  var now = Date.now();
  var userZone = "America/Lima";
  var meetings = {
    0 : "April 22nd 2015 10:00 am",
    1 : "April 16th 2016 8:30 pm",
    2 : "December 12th 2015 8:00 pm"
  };

  var convertMeetings = {
    0 : moment.tz("2015-04-22 10:00", userZone),
    1 : moment.tz("2016-04-16 20:30", userZone),
    2 : moment.tz("2015-12-12 20:00", userZone)
  };



  var timeZones = {
    0 : "America/Lima",
    1 : "Europe/London",
    2 : "America/Resolute"
  };
  service.set = function () {
    service = {
          [0]: {
        name: 'Jane',
        location: 'Lima, Peru',
        meetingTime: meetings[0],
        timeZone: timeZones[0],
        contactMeetingTime: (convertMeetings[0].tz(timeZones[0])).format('MMMM Do YYYY, h:mm a'),
        time: (moment.tz(now, 'America/Lima')).format('MMMM Do YYYY, h:mm a')
      }, [1]: {
        name: 'Darius',
        location: "London, England",
        meetingTime: meetings[1],
        timeZone: timeZones[1],
        contactMeetingTime: (convertMeetings[1].tz(timeZones[1])).format('MMMM Do YYYY, h:mm a'),
        time: (moment.tz(now, 'Europe/London')).format('MMMM Do YYYY, h:mm a')
      }, [2]: {
        name: 'Chad',
        location: 'Dallas, Tx',
        meetingTime: meetings[2],
        timeZone: timeZones[2],
        contactMeetingTime: (convertMeetings[2].tz(timeZones[2])).format('MMMM Do YYYY, h:mm a'),
        time: (moment.tz(now, 'America/Resolute')).format('MMMM Do YYYY, h:mm a')
      }
    };
    return service;
  };
  return service;
});