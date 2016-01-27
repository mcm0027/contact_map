
myApp.factory('lindaContacts', function () {

  var service = {};
  var now = Date.now();
  var userZone = "Asia/Seoul";
  var meetings = {
    0 : "December 25th 2016 6:00 am",
    1 : "July 14th 2015 6:00 am",
    2 : "November 8th 2016 9:00 pm"
  };

  var convertMeetings = {
    0 : moment.tz("2016-12-25 06:00", userZone),
    1 : moment.tz("2015-07-14 06:00", userZone),
    2 : moment.tz("2016-11-08 21:00", userZone)
  };

  var timeZones = {
    0 : "America/New_York",
    1 : "Asia/Seoul",
    2 : "Europe/Berlin"
  };

  service.set = function () {
    service = {
          [0]: {
        name: 'John',
        location: 'New York, New York',
        meetingTime: meetings[0],
        timeZone: timeZones[0],
        contactMeetingTime: (convertMeetings[0].tz(timeZones[0])).format('MMMM Do YYYY, h:mm a'),
            time: (moment.tz(now, timeZones[0])).format('MMMM Do YYYY, h:mm a')
      }, [1]: {
        name: 'Kelly',
        location: "Seoul, South Korea",
        meetingTime: meetings[1],
        timeZone: timeZones[1],
        contactMeetingTime: (convertMeetings[1].tz(timeZones[1])).format('MMMM Do YYYY, h:mm a'),
        time: (moment.tz(now, timeZones[1])).format('MMMM Do YYYY, h:mm a')
      }, [2]: {
        name: 'Naomi',
        location: 'Frankfurt, Germany',
        meetingTime: meetings[2],
        timeZone: timeZones[2],
        contactMeetingTime: (convertMeetings[2].tz(timeZones[2])).format('MMMM Do YYYY, h:mm a'),
        time: (moment.tz(now, 'Europe/Berlin')).format('MMMM Do YYYY, h:mm a')
      }
    };
    return service;
  };
  return service;
});