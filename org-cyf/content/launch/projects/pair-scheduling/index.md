+++
title = "Pair Scheduling"
+++

## Business problem

We have a lot of volunteers who want to offer their time to have 1:1 sessions with trainees.

And we have a lot of trainees who want to book one-off sessions with a volunteer - they generally don't mind _which_ volunteer.

Everyone has limited time available, so the primary matching should be done based on what time slots work for people.

### What we have right now

Right now, each volunteer shares a Calendly / Google Calendar Appointment Schedule link.

For volunteers, this is convenient - they can be in control of their schedule, and it integrates well with their calendar.

For trainees, this isn't very convenient. To find a time-slot, they need to look through lots of different links in the hopes that someone has a relevant time slot.

Because it takes a lot of clicking and searching, a lot of people just give up.

### Requirements

As will all projects, it should work, be accessible, have enough testing, and be deployed. We want to use this in class, so it needs to be easy for CodeYourFuture volunteers to keep deployed, maintain, and maybe even improve.

As a volunteer, I need to be able to offer 1-hour time slots I am happy to host sessions in. These may be one-offs ("Next week I can do Monday") or regular ("I can do every Monday").

As a trainee, I need to be able to see the available time slots, and into one. When a time slot is booked, it must not be shown as available any more.

When a time slot is booked, a calendar invite should be sent to both the volunteer and the trainee, including a Google Meet call link they can both join.

There should be a minimum window before a session that it can be booked - a trainee shouldn't be able to book a slot 1 minute before, because the volunteer will need notice to attend. As a minimum, we should have a fixed minimum window, but ideally this could be selected by each volunteer.

As a volunteer, I should be able to manage time time slots, e.g. cancel an offering.

#### Nice to haves

If possible, it would be great to support extra features:

* Integration with people's existing calendars - if a volunteer has another meeting booked when they have a time slot, that time slot should stop being offered.
* A way for a trainee to set an agenda, e.g. say what exercise they want to work on.
* A way to cancel a slot once booked (by either a trainee or a volunteer).
* A way for an administrator to cancel slots.
* A way for an administrator to remove a trainee or volunteer from the system.
* A way for an administrator to ban a trainee or volunteer from the system.

#### Things to ignore for now

Authorisation. Authentication is important, for a volunteer and trainee to identify themselves so a volunteer can only manage their own slots. But validating who actually is a volunteer or trainee is outside of the scope of this project for now.
