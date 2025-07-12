export const sampleCards = [
    {
      "card_id": "evt_4815162342",
      "title": "Victoria Park Picnic",
      "display_template": "<cite0>Alex invited you to Victoria Park for coworking and a picnic today around 4pm.</cite0>\n\n<action0>Get directions</action0> to the park or <action1>send a message</action1> to confirm.",
      "citations": {
        "cite0": {
          "source_app": "Messages",
          "source_sender": "Alex",
          "source_text": "Hey let's do coworking and a picnic today around 4pm at Victoria Park",
          "timestamp_iso": "2025-01-15T13:30:15-08:00",
          "deep_link_to_source": "messages:/thread/Alex"
        }
      },
      "actions": {
        "action0": {
          "display_text_from_template": "Get directions",
          "deep_link_uri": "google.navigation:q=Victoria+Park,+London"
        },
        "action1": {
          "display_text_from_template": "send a message",
          "deep_link_uri": "messages:/thread/Alex"
        }
      }
    },
    {
      "card_id": "evt_9876543210",
      "title": "Meeting Reminder",
      "display_template": "<cite0>You have a team standup meeting in 15 minutes with the engineering team.</cite0>\n\n<action0>Join the meeting</action0> or <action1>set a reminder</action1> for 5 minutes before.",
      "citations": {
        "cite0": {
          "source_app": "Google Calendar",
          "source_sender": "Calendar",
          "source_text": "Team Standup - Engineering Team - 2:00 PM - 2:30 PM",
          "timestamp_iso": "2025-01-15T13:45:00-08:00",
          "deep_link_to_source": "content://com.android.calendar/events"
        }
      },
      "actions": {
        "action0": {
          "display_text_from_template": "Join the meeting",
          "deep_link_uri": "https://meet.google.com/abc-defg-hij"
        },
        "action1": {
          "display_text_from_template": "set a reminder",
          "deep_link_uri": "content://com.android.calendar/events"
        }
      }
    },
    {
      "card_id": "evt_1122334455",
      "title": "Bluetooth Headphones Connected",
      "display_template": "Your <cite0>Sony WH-1000XM4 headphones</cite0> just connected. <action0>Open Spotify</action0> to continue your music, or <action1>check battery level</action1>.",
      "citations": {
        "cite0": {
          "source_app": "Bluetooth",
          "source_sender": "System",
          "source_text": "Sony WH-1000XM4 connected",
          "timestamp_iso": "2025-01-15T14:20:30-08:00",
          "deep_link_to_source": "android.settings.BLUETOOTH_SETTINGS"
        }
      },
      "actions": {
        "action0": {
          "display_text_from_template": "Open Spotify",
          "deep_link_uri": "spotify://"
        },
        "action1": {
          "display_text_from_template": "check battery level",
          "deep_link_uri": "android.settings.BLUETOOTH_SETTINGS"
        }
      }
    },
    {
      "card_id": "evt_5566778899",
      "title": "Dinner Reservation",
      "display_template": "<cite0>Your reservation at Zuni Cafe is confirmed for 7:30 PM tonight.</cite0>\n\n<action0>Get directions</action0> to the restaurant or <action1>call to confirm</action1>.",
      "citations": {
        "cite0": {
          "source_app": "OpenTable",
          "source_sender": "OpenTable",
          "source_text": "Reservation confirmed: Zuni Cafe, 7:30 PM, 2 people",
          "timestamp_iso": "2025-01-15T16:15:00-08:00",
          "deep_link_to_source": "https://www.opentable.com/reservation"
        }
      },
      "actions": {
        "action0": {
          "display_text_from_template": "Get directions",
          "deep_link_uri": "google.navigation:q=Zuni+Cafe,+1658+Market+St,+San+Francisco,+CA"
        },
        "action1": {
          "display_text_from_template": "call to confirm",
          "deep_link_uri": "tel:+14155521200"
        }
      }
    },
    {
      "card_id": "evt_9988776655",
      "title": "Flight Check-in Available",
      "display_template": "<cite0>Check-in is now open for your United Airlines flight UA1234 to Seattle tomorrow at 10:30 AM.</cite0>\n\n<action0>Check in now</action0> or <action1>view boarding pass</action1>.",
      "citations": {
        "cite0": {
          "source_app": "United Airlines",
          "source_sender": "United",
          "source_text": "Check-in available: UA1234 SFO-SEA, 10:30 AM tomorrow",
          "timestamp_iso": "2025-01-15T17:00:00-08:00",
          "deep_link_to_source": "united://checkin"
        }
      },
      "actions": {
        "action0": {
          "display_text_from_template": "Check in now",
          "deep_link_uri": "united://checkin"
        },
        "action1": {
          "display_text_from_template": "view boarding pass",
          "deep_link_uri": "united://boardingpass"
        }
      }
    },
    {
      "card_id": "evt_4433221100",
      "title": "Package Delivery",
      "display_template": "<cite0>Your Amazon package with the new headphones is out for delivery and will arrive between 2-4 PM today.</cite0>\n\n<action0>Track package</action0> or <action1>set delivery instructions</action1>.",
      "citations": {
        "cite0": {
          "source_app": "Amazon",
          "source_sender": "Amazon",
          "source_text": "Package out for delivery: Sony WH-1000XM4, arriving 2-4 PM",
          "timestamp_iso": "2025-01-15T11:30:00-08:00",
          "deep_link_to_source": "amazon://tracking"
        }
      },
      "actions": {
        "action0": {
          "display_text_from_template": "Track package",
          "deep_link_uri": "amazon://tracking"
        },
        "action1": {
          "display_text_from_template": "set delivery instructions",
          "deep_link_uri": "amazon://delivery-instructions"
        }
      }
    },
    {
      "card_id": "evt_6677889900",
      "title": "Workout Reminder",
      "display_template": "It's been 3 days since your last workout. <cite0>Your fitness goal is to exercise 4 times per week.</cite0>\n\n<action0>Start a workout</action0> or <action1>schedule gym time</action1>.",
      "citations": {
        "cite0": {
          "source_app": "Apple Health",
          "source_sender": "Health",
          "source_text": "Goal: Exercise 4 times per week. Last workout: 3 days ago",
          "timestamp_iso": "2025-01-15T18:00:00-08:00",
          "deep_link_to_source": "x-apple-health://workouts"
        }
      },
      "actions": {
        "action0": {
          "display_text_from_template": "Start a workout",
          "deep_link_uri": "x-apple-health://workouts"
        },
        "action1": {
          "display_text_from_template": "schedule gym time",
          "deep_link_uri": "content://com.android.calendar/events"
        }
      }
    },
    {
      "card_id": "evt_2233445566",
      "title": "Weather Alert",
      "display_template": "<cite0>Heavy rain expected in San Francisco starting at 8 PM tonight.</cite0>\n\n<action0>Check weather details</action0> or <action1>set rain reminder</action1>.",
      "citations": {
        "cite0": {
          "source_app": "Weather",
          "source_sender": "Weather",
          "source_text": "Heavy rain warning: San Francisco, starting 8 PM tonight",
          "timestamp_iso": "2025-01-15T19:15:00-08:00",
          "deep_link_to_source": "weather://"
        }
      },
      "actions": {
        "action0": {
          "display_text_from_template": "Check weather details",
          "deep_link_uri": "weather://"
        },
        "action1": {
          "display_text_from_template": "set rain reminder",
          "deep_link_uri": "content://com.android.calendar/events"
        }
      }
    }
]; 