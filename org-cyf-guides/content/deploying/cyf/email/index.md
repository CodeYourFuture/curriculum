---
emoji: 📧
title: Sending emails
description: Learn how to send emails from your projects hosted on CYF's Coolify platform
weight: 3
---

## How it works

Projects on the CYF Coolify platform can send emails using Amazon SES (Simple Email Service). The platform is configured with the `cyf.academy` domain, separate from the main `codeyourfuture.io` domain. You can send up to 124,200 emails per day (shared across all projects) to any email address without verification.

## API to use

Use the AWS SDK in your application. The Coolify EC2 instance has IAM permissions configured, so no credentials are needed. Configure AWS SES with:

- **Region**: `eu-west-1` (Ireland) 
- **From address**: Must use `*@cyf.academy` (e.g., `noreply@cyf.academy`)

## Example code

### Node.js

```javascript
const AWS = require('aws-sdk');

const ses = new AWS.SES({ region: 'eu-west-1' });

const params = {
  Source: 'noreply@cyf.academy',
  Destination: {
    ToAddresses: ['recipient@example.com'],
  },
  Message: {
    Subject: { Data: 'Test Email' },
    Body: {
      Html: { Data: '<p>This is a test email from a CYF project.</p>' },
    },
  },
};

ses.sendEmail(params, (err, data) => {
  if (err) console.error('Error:', err);
  else console.log('Sent:', data.MessageId);
});
```

### Python

```python
import boto3

ses_client = boto3.client('ses', region_name='eu-west-1')

response = ses_client.send_email(
    Source='noreply@cyf.academy',
    Destination={'ToAddresses': ['recipient@example.com']},
    Message={
        'Subject': {'Data': 'Test Email'},
        'Body': {'Html': {'Data': '<p>This is a test email from a CYF project.</p>'}},
    }
)
print(f"Sent: {response['MessageId']}")
```

## Environment variables

Set these in your Coolify project:

```
AWS_REGION=eu-west-1
EMAIL_FROM=noreply@cyf.academy
```
