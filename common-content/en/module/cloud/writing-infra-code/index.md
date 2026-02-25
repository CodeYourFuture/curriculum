+++
title = 'Writing Basic Infrastructure Code'
time = 30
[objectives]
    1='Define a null resource in Terraform'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Now that you understand the basics of Terraform and the need for Infrastructure as Code, let's try an exercise that doesn't interact with any cloud providers. We'll use the `null_resource` for demonstration and learning purposes.

### Example: Using `null_resource`

This example uses Terraform's [null_resource](https://registry.terraform.io/providers/hashicorp/null/latest/docs/resources/resource).

```hcl
resource "null_resource" "example" {
  provisioner "local-exec" {
    command = "echo Hello, World"
  }
}
```

In this example, we define a `null_resource` with the name `example`. The `local-exec` provisioner will run the command specified (`echo Hello, World`) on your local machine when you apply this Terraform configuration.

{{<note type="exercise" title="Use `null_resource` to Print a Message">}}

1. **Initialize the Terraform Project**: Navigate to a new directory and run `terraform init`.
2. **Write the Code**: Create a file named `main.tf` and copy the example code into it.
3. **Plan the Infrastructure**: Run `terraform plan` to preview what changes will be made.
4. **Apply the Infrastructure**: Run `terraform apply` and confirm by typing `yes`.

After completing these steps, you should see the message "Hello, World" printed in your terminal, confirming that the `null_resource` was successfully applied.

    {{</note>}}
