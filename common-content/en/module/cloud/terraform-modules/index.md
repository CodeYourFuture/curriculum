+++
title = 'What Are Terraform Modules'

time = 60
[objectives]
    1='Explain what Terraform modules are'
    2='Write a Terraform module that creates an S3 bucket'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### What Are Terraform Modules?

Terraform modules encapsulate a piece of Terraform configuration into a reusable, shareable unit. This allows for better organization and abstraction of Terraform code. More details can be found in the [Terraform Modules Documentation](https://developer.hashicorp.com/terraform/language/modules).

### Why Are Terraform Modules Needed?

- **Reuse of Code**: Avoid repetition of similar blocks of code in different parts of the project.
- **Simplified Configuration**: Hide the complexity of your setup by exposing only the most relevant variables.
- **Version Control**: Modules can be versioned, and you can specify which version to use in your main configuration.

### Why Are Modules Good?

1. **Modularity**: As the name suggests, Terraform modules bring modularity to your infrastructure. You can encapsulate a whole set of functionalities and features into one module.
2. **Reusability**: Once you've written a module for a specific piece of infrastructure, you can reuse it across multiple environments or even multiple projects.
3. **Maintainability**: Using modules makes your Terraform configuration easier to maintain. If a change is needed for a specific piece of infrastructure, you can make the change in just one place.

For best practices on writing modules, check the [Terraform Module Best Practices](https://developer.hashicorp.com/terraform/language/modules/develop).

### Structure of a Terraform Module

A typical module directory structure looks like this:

```plaintext
my_terraform_module/
|-- main.tf
|-- variables.tf
|-- outputs.tf
|-- README.md
```

- `main.tf` contains the core resource declarations.
- `variables.tf` contains any input variables that the module accepts.
- `outputs.tf` contains any output variables that the module will produce.
- `README.md` contains documentation for the module.

### Example: An AWS S3 Bucket Module

To help you understand how a Terraform module works, let's create an example of an AWS S3 bucket module. The example includes two parts:

1. The code for the module itself.
2. How to use the module in a Terraform script.

#### Code for the Module

First, let's define the module. Create a new directory for the module and inside it, create a `main.tf` file with the following content:

```hcl
provider "aws" {
  region = "eu-west-1"
}

resource "aws_s3_bucket" "this" {
  bucket = var.bucket_name
  acl    = "private"

  tags = {
    Name        = var.bucket_name
    Environment = var.environment
  }
}

output "bucket_arn" {
  value = aws_s3_bucket.this.arn
}
```

Create a `variables.tf` file to declare the input variables:

```hcl
variable "bucket_name" {
  description = "The name of the bucket"
  type        = string
}

variable "environment" {
  description = "The environment this bucket will be part of"
  type        = string
  default     = "dev"
}
```

#### Using the Module

To use this module in a Terraform script, create a `main.tf` in a different directory and refer to the module like this:

```hcl
module "s3_bucket" {
  source       = "./path/to/module/directory"
  bucket_name  = "my-new-bucket"
  environment  = "prod"
}

output "new_bucket_arn" {
  value = module.s3_bucket.bucket_arn
}
```

Run `terraform init` and `terraform apply` to create the S3 bucket using your module.

This example should give you a good understanding of how to create a basic Terraform module and how to use it. For more detailed information, you can refer to the [Terraform AWS S3 Bucket Documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) and [Terraform Modules Documentation](https://developer.hashicorp.com/terraform/language/modules).
