//***significantly modified icsFormatter code***//
      //i.e. don't just use the repo version

var downloadLink = "";

var icsFormatter = function() {
    'use strict';

    if (navigator.userAgent.indexOf('MSIE') > -1 && navigator.userAgent.indexOf('MSIE 10') == -1) {
        console.log('Unsupported Browser');
        return;
    }

    var SEPARATOR = (navigator.appVersion.indexOf('Win') !== -1) ? '\r\n' : '\n';
    var calendarEvents = [];
    var calendarStart = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0'
    ].join(SEPARATOR);
    var calendarEnd = SEPARATOR + 'END:VCALENDAR';

    return {
        /**
         * Returns events array
         * @return {array} Events
         */
        'events': function() {
            return calendarEvents;
        },

        /**
         * Returns calendar
         * @return {string} Calendar in iCalendar format
         */
        'calendar': function() {
            return calendarStart + SEPARATOR + calendarEvents.join(SEPARATOR) + calendarEnd;
        },

        /**
         * Add event to the calendar
         * @param  {string} subject     Subject/Title of event
         * @param  {string} description Description of event
         * @param  {string} location    Location of event
         * @param  {string} begin       Beginning date of event
         * @param  {string} stop        Ending date of event
         */
        'addEvent': function(subject, description, location, begin, stop) {
            // I'm not in the mood to make these optional... So they are all required
            if (typeof subject === 'undefined' ||
                typeof description === 'undefined' ||
                typeof location === 'undefined' ||
                typeof begin === 'undefined' ||
                typeof stop === 'undefined'
            ) {
                return false;
            }

            //Commented out b/c date handling is performed below
          /*
            var start_date = new Date(begin);
            var end_date = new Date(stop);

            var start_year = ("0000" + (start_date.getFullYear().toString())).slice(-4);
            var start_month = ("00" + ((start_date.getMonth() + 1).toString())).slice(-2);
            var start_day = ("00" + ((start_date.getDate()).toString())).slice(-2);
            var start_hours = ("00" + (start_date.getHours().toString())).slice(-2);
            var start_minutes = ("00" + (start_date.getMinutes().toString())).slice(-2);
            var start_seconds = ("00" + (start_date.getMinutes().toString())).slice(-2);

            var end_year = ("0000" + (end_date.getFullYear().toString())).slice(-4);
            var end_month = ("00" + ((end_date.getMonth() + 1).toString())).slice(-2);
            var end_day = ("00" + ((end_date.getDate()).toString())).slice(-2);
            var end_hours = ("00" + (end_date.getHours().toString())).slice(-2);
            var end_minutes = ("00" + (end_date.getMinutes().toString())).slice(-2);
            var end_seconds = ("00" + (end_date.getMinutes().toString())).slice(-2);

            // Since some calendars don't add 0 second events, we need to remove time if there is none...
            var start_time = '';
            var end_time = '';
            if (start_minutes + start_seconds + end_minutes + end_seconds !== 0) {
                start_time = 'T' + start_hours + start_minutes + start_seconds;
                end_time = 'T' + end_hours + end_minutes + end_seconds;
            }

            var start = start_year + start_month + start_day + start_time+"Z";
            var end = end_year + end_month + end_day + end_time+"Z";

            */

            var calendarEvent = [
                'BEGIN:VEVENT',
                'CLASS:PUBLIC',
                'DESCRIPTION:' + description,
                'DTSTART:' + begin,
                'DTEND:' + stop,
                'LOCATION:' + location,
                'SUMMARY;LANGUAGE=en-us:' + subject,
                'TRANSP:TRANSPARENT',
                'END:VEVENT'
            ].join(SEPARATOR);

            calendarEvents.push(calendarEvent);
            return calendarEvent;
        },

        /**
         * Download calendar using the saveAs function from filesave.js
         * @param  {string} filename Filename
         * @param  {string} ext      Extention
         */
        'download': function(filename, ext) {
            if (calendarEvents.length < 1) {
                console.log("Download error");
                return false;
            }

            ext = (typeof ext !== 'undefined') ? ext : '.ics';
            filename = (typeof filename !== 'undefined') ? filename : 'calendar';
            var calendar = calendarStart + SEPARATOR + calendarEvents.join(SEPARATOR) + calendarEnd;
            //window.open( "data:text/calendar;charset=utf8," + escape(calendar));
            //Use the window.open to automatically download the file
            downloadLink =  "data:text/calendar;charset=utf8," + escape(calendar)
            $("#downloadEventLink").attr("href",downloadLink);
          //HTML <a download> method above allows for specification of file name
        }
    };
};

if (typeof define === "function" && define.amd) {
  /* AMD Format */
  define("icsFormatter", [], function() {
    return icsFormatter();
  });
} else if (typeof module === "object" && module.exports) {
  /* CommonJS Format */
  module.exports = icsFormatter();
} else {
  /* Plain Browser Support */
  this.myModule = icsFormatter();
}


//***Begin Web Code***//

$(document).ready(function(){
  var linkText = "";
  $("#form").submit(function(action){

    //Prevent form from submitting / refreshing page immediately
    //action.preventDefault();

    //Get values from form fields
    var title = "Cleodon Consulting Appointment"
    var date = $("input[name=date]").val();
    var startTime = $("input[name=startTime]:checked").val();
    var details = $("textarea[name=details]").val();
    var location = "";

    // Collect the date and time information into a moment.js object
    var momentInput = date + " " + startTime;
    var beginTime = moment(momentInput, "YYYY-MM-DD HH:mm").utc();
    var endTime = beginTime.clone().add(15, 'm'); //set the end time to 15 minutes after start
    //Formatting for URL linkText
    var title = title.replace(/ /g,"+");
    var details = details.replace(/ /g,"+");

    //More formatting of the date URI
    var formattedStartDate = beginTime.format("YYYYMMDD");
    var formattedStartTime = beginTime.format("HHmm");
    var formattedEndTime = endTime.format("HHmm");

    //Creating an event object for easier organization
    var event = {title=title, date=formattedStartDate, startTime=formattedStartTime, endTime=formattedEndTime, location=location, details=details};

    //These strings are used in linkText and .ics formatting
    var beginStr = event.date+"T" + event.startTime+"00Z";
    var stopStr = event.date+"T" + event.endTime+"00Z"

    //For linkText
    var datesStr = beginStr+"/"+stopStr;

    //Link to create event in google calendar
    linkText = "https://calendar.google.com/calendar/render?action=TEMPLATE&text="+event.title+"&dates="+datesStr+"&location="+event.location+"&details="+event.details+"&sf=true&output=xml#eventpage_6";





    //For automatically opening Google Cal
    /*
    var win = window.open(linkText, '_blank');
    win.focus();
    */


    //Function to create .ics using a modified icsFormatter
    var buildICSEntry = function(eventTitle, eventLocation, eventDescription, dateTimeStart, dateTimeEnd){

    	var calEntry = icsFormatter();

    	var title = eventTitle;
    	var place = eventLocation;
    	var begin = dateTimeStart;
    	var end = dateTimeEnd;

    	var description = eventDescription;

    //Adds the event to the calendar file being created
		calEntry.addEvent(title,description, place, begin, end);

    //Finalizes the calendar file and creates the download link (see far above)
		calEntry.download("my-Event",".ics");
 }
    //Create .ics file with appropriate data
    buildICSEntry(event.title, event.location, event.details, beginStr, stopStr);

        var emailtext = "mailto:someone@yoursite.com?&subject=My%20Event&body="+linkText;

    //Set up google calendar link with correct link = linkText
    $("#googleCalLink").attr("href",linkText);
    $("#emailLink").attr("href",emailtext);
    $("#googleCalLink").attr("target","_blank");

    //$("input[name=googleCalendarLink]").val(linkText);
    //$("input[name=googleCalendarLink]").attr("value",linkText);
    //$("input[name=icsFileText]").val(downloadLink);
    $("#gCalLinkInput").val(linkText);
    $("#icsFileTextInput").val(downloadLink);

    //console.log("Link Text = "+linkText);

    //Show google calendar link and .ics download link after submission of the form
    $("#submit-button").attr("disabled","disabled");
    $("#google, #ics, #email").slideDown(500);


  });
});
