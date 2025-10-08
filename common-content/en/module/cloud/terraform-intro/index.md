+++
title = 'Introduction to Terraform'

time = 15
[objectives]
    1='Explain the purpose of Terraform'
    2='List the core concepts in Terraform'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

[Terraform](https://developer.hashicorp.com/terraform) is an open-source tool created by HashiCorp that allows you to define and provide infrastructure as code (IaC). It uses its own domain-specific language known as HashiCorp Configuration Language (HCL) and can manage infrastructure across multiple cloud service providers.

### Why Choose Terraform?

- **Provider Agnostic**: Terraform isn't limited to a single cloud. With [extensive provider support](https://developer.hashicorp.com/terraform/language/providers), you can manage a multi-cloud setup using one framework.

- **Immutable Infrastructure**: Terraform encourages the creation of unchangeable infrastructure. If updates are needed, the current resources are replaced, ensuring consistency and reducing potential drift.

- **Declarative Syntax**: Describe what you want with Terraform's [declarative configuration](https://developer.hashicorp.com/terraform/language), and let it handle how to achieve that state.

- **State Management**: Terraform uses a [state file](https://developer.hashicorp.com/terraform/language/state) to map real-world resources to your configuration, ensuring resources are managed correctly.

### Core Concepts in Terraform

- **Resource**: The primary component in a Terraform configuration. A [resource](https://developer.hashicorp.com/terraform/language/resources) represents an infrastructure object, such as a VM or network.

- **Provider**: These are [plugins](https://developer.hashicorp.com/terraform/language/providers) that Terraform uses to interact with cloud service APIs, allowing it to manage resources in those clouds.

- **Variables**: Parameterize your configurations using [variables](https://developer.hashicorp.com/terraform/language/values/variables), making your IaC modular and reusable.

- **State**: Terraform's [state](https://developer.hashicorp.com/terraform/language/state) maps configurations to real-world resources, tracking the resources it manages.
