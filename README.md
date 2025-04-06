# SMS Forwarding Assistant

A mobile web application that helps users forward SMS messages to other phone numbers when they match a specific format.

## Features

- Set custom format patterns to filter SMS messages
- Specify target phone numbers for forwarding
- Validate SMS content against your defined patterns
- One-click forwarding to your phone's messaging app
- Persistent settings saved between sessions

## How to Use

1. Set your desired SMS format pattern (can be plain text or a regular expression)
2. Enter the target phone number where you want to forward messages
3. Paste or type the SMS message you received
4. If the message matches your format, use the forwarding button or follow the manual steps
5. Your settings are automatically saved for future use

## Example Format Patterns

- `OTP:` - Matches any message containing "OTP:"
- `^OTP: \d{6}$` - Matches messages exactly formatted as "OTP: " followed by 6 digits
- `ALERT:.*URGENT` - Matches messages starting with "ALERT:" and containing "URGENT"

## Technical Notes

- This is a web application and works best on mobile browsers
- SMS forwarding capabilities depend on your device's support for SMS URI schemes
- The application does not access your SMS messages directly; you need to copy and paste them
- All settings are stored locally on your device