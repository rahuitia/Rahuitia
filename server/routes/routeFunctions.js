const parseUsersData = (users) => {
    return users.map(user => {
        return {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            userName: user.user_name,
            hourlyWages: user.hourly_wage
        }
    })
}

const parseMeetingsData = (meetings) => {
    return meetings.map(meeting => {
        return {
            id: meeting.meeting_id,
            meetingName: meeting.meeting_name,
            time: meeting.time, 
            duration: meeting.duration, 
            attendees: meeting.attendees, 
            cost: meeting.cost
        }
    })
}

module.exports = {
    parseUsersData,
    parseMeetingsData
}
