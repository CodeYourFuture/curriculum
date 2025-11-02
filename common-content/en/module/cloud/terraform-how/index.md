+++
title = 'How does terraform work?'

time = 5
[objectives]
    1='List the workflow steps of Terraform'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Terraform has a structured workflow:

1. **Initialization**: Prepare a Terraform working directory with necessary [providers](https://developer.hashicorp.com/terraform/language/providers/configuration) using the `terraform init` command.
2. **Planning**: Preview infrastructure changes with `terraform plan` to ensure alignment with your goals.
3. **Applying**: Implement the desired infrastructure state using `terraform apply`.
4. **Destroy**: To dismantle the infrastructure, use `terraform destroy`.

For further details, dive into Terraform's [official documentation](https://developer.hashicorp.com/terraform/docs) to enhance your understanding and capabilities.
