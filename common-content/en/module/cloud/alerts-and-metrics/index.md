+++
title = 'Creating Alerts and Understanding Metrics'

time = 20
[objectives]
    1='Create an alert in Cloudwatch'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Alerting is a key aspect of monitoring; it allows you to know in real-time if something goes wrong or if a certain performance threshold has been met or exceeded. By creating alerts, you make your system more resilient and reduce the time needed to respond to incidents.

### Creating Alerts with AWS CloudWatch

[AWS CloudWatch](https://aws.amazon.com/cloudwatch/) provides a feature to set up alerts based on specific conditions or thresholds. These alerts can then be forwarded to other AWS services like SNS for notifications via email, SMS, or other methods.

To create an alert in CloudWatch:

1. Open the CloudWatch console in your AWS Management Console.
2. In the navigation pane, choose "Alarms," then choose "Create Alarm."
3. Choose "Select metric" and specify the metric and conditions for your alarm.

```bash
# AWS CLI example to create a CPU utilization alarm for an EC2 instance
aws cloudwatch put-metric-alarm --alarm-name cpu-high --metric-name CPUUtilization --namespace AWS/EC2 --statistic Average --period 300 --threshold 70 --comparison-operator GreaterThanThreshold  --dimensions Name=InstanceId,Value=i-12345678 --evaluation-periods 2
```

### Metrics to Monitor in EC2 and RDS

#### EC2

- **CPU Utilization**: Measures the compute power required by an EC2 instance.
- **Disk Read/Writes**: Monitors the read and write operations on the instance storage.
- **Network In/Out**: Measures the network traffic to and from the instance.

[More on EC2 CloudWatch Metrics](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html)

#### RDS

- **CPU Utilization**: Measures the compute power used by your database instance.
- **Database Connections**: The number of database connections in use.
- **Free Storage Space**: Monitors the available storage space of your database instance.

[More on RDS CloudWatch Metrics](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MonitoringOverview.html)
