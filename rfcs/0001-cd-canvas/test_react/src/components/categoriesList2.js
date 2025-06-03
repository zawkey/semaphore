/*const apps = [{
    "category_name": "Source Control",
    "tools": [
      {
        "name": "GitHub",
        "logo": require("../images/icn-github.svg").default,
        "events": [
          "Push Event",
          "Pull Request Opened",
          "Pull Request Merged",
          "Issue Opened",
          "Issue Closed",
          "Comment Created",
          "Branch Created",
          "Branch Deleted",
          "Repository Created",
          "Fork Created"
        ]
      },
      {
        "name": "GitLab",
        "logo": require("../images/icn-gitlab.svg").default,
        "events": []
      },
      {
        "name": "Bitbucket",
        "logo": require("../images/icn-bitbucket.svg").default,
        "events": [
          "Repo Push",
          "Pull Request Created",
          "Pull Request Merged",
          "Issue Created",
          "Issue Updated",
          "Comment Added",
          "Branch Created",
          "Branch Deleted",
          "Repository Forked",
          "Repository Pushed"
        ]
      },
      {
        "name": "Azure",
        "logo": require("../images/logos/azure.svg").default,
        "events": [
          "Code Pushed",
          "Pull Request Created",
          "Pull Request Completed",
          "Work Item Created",
          "Work Item Updated",
          "Comment Added",
          "Branch Created",
          "Branch Deleted",
          "Repository Created",
          "Build Completed"
        ]
      }
    ]
  },
  {
    "category_name": "CI/CD Pipeline",
    "tools": [
      {
        "name": "Jenkins",
        "logo": require("../images/logos/jenkins.svg").default,
        "events": [
          "Build Started",
          "Build Succeeded",
          "Build Failed",
          "Build Aborted",
          "Deployment Successful",
          "Deployment Failed",
          "Job Configured",
          "Agent Connected",
          "Pipeline Stage Completed",
          "Test Results Published"
        ]
      },
      {
        "name": "GitHub",
        "logo": require("../images/icn-github.svg").default,
        "events": [
          "Workflow Run Started",
          "Workflow Run Succeeded",
          "Workflow Run Failed",
          "Workflow Run Canceled",
          "Deployment Succeeded",
          "Deployment Failed",
          "Pull Request Sync",
          "Push to Branch",
          "Release Published",
          "Scheduled Event"
        ]
      },
      {
        "name": "GitLab",
        "logo": require("../images/icn-gitlab.svg").default,
        "events": [
          "Pipeline Started",
          "Pipeline Succeeded",
          "Pipeline Failed",
          "Pipeline Canceled",
          "Job Succeeded",
          "Job Failed",
          "Merge Request Pipeline",
          "Push Pipeline",
          "Tag Pipeline",
          "Scheduled Pipeline"
        ]
      },
      {
        "name": "CircleCI",
        "logo": require("../images/logos/circleci.svg").default,
        "events": [
          "Build Started",
          "Build Succeeded",
          "Build Failed",
          "Build Canceled",
          "Deployment Completed",
          "Workflow Completed",
          "Scheduled Workflow",
          "API Triggered Build",
          "Commit Pushed",
          "Pull Request Opened"
        ]
      },
      {
        "name": "Azure",
        "logo": require("../images/logos/azure.svg").default,
        "events": [
          "Pipeline Run Started",
          "Pipeline Run Succeeded",
          "Pipeline Run Failed",
          "Pipeline Run Canceled",
          "Deployment Completed",
          "Build Completed",
          "Code Pushed",
          "Pull Request Updated",
          "Scheduled Build",
          "Release Created"
        ]
      },
      {
        "name": "TeamCity",
        "logo": require("../images/logos/teamcity-icon.svg").default,
        "events": [
          "Build Started",
          "Build Finished Successfully",
          "Build Failed",
          "Build Interrupted",
          "Deployment Completed",
          "VCS Change Detected",
          "Agent Status Changed",
          "Project Created",
          "Build Parameter Changed",
          "Test Failed"
        ]
      },
      {
        "name": "Bamboo",
        "logo": require("../images/logos/bamboo-logo.svg").default,
        "events": [
          "Plan Started",
          "Plan Completed Successfully",
          "Plan Failed",
          "Plan Stopped",
          "Deployment Started",
          "Deployment Succeeded",
          "Repository Polled",
          "Build Queued",
          "Artifact Produced",
          "Test Result Updated"
        ]
      }
    ]
  },
  {
    "category_name": "Container & Orchestration",
    "tools": [
      {
        "name": "Docker",
        "logo": require("../images/logos/lang-docker.svg").default,
        "events": [
          "Container Started",
          "Container Stopped",
          "Image Built",
          "Image Pushed",
          "Volume Created",
          "Network Created",
          "Container Died",
          "Image Pulled",
          "Container OOMKilled",
          "Daemon Reload"
        ]
      },
      {
        "name": "Kubernetes",
        "logo": require("../images/logos/kubernetes.svg").default,
        "events": [
          "Pod Created",
          "Pod Deleted",
          "Deployment Updated",
          "Service Created",
          "Node Ready",
          "Container Started",
          "Container Terminated",
          "ReplicaSet Scaled",
          "Endpoint Added",
          "ConfigMap Updated"
        ]
      },
      {
        "name": "Docker",
        "logo": require("../images/logos/lang-docker.svg").default,
        "events": [
          "Service Started",
          "Service Stopped",
          "Stack Up",
          "Stack Down",
          "Service Recreated",
          "Container Created",
          "Container Removed",
          "Network Created",
          "Volume Created",
          "Lint Chart",
          "Package Chart",
          "Add Repository",
          "Update Repositories",
          "List Releases",
          "Get Release Status",
          "Release Installed",
          "Release Upgraded",
          "Release Rolled Back",
          "Release Uninstalled",
          "Chart Packaged",
          "Repository Added",
          "Repository Updated",
          "Chart Downloaded",
          "Hook Executed",
          "Pre-install Hook Failed"
        ]
      },
      {
        "name": "OpenShift",
        "logo": require("../images/logos/openshift.svg").default,
        "events": [
          "Pod Created",
          "DeploymentConfig Scaled",
          "Route Created",
          "Build Started",
          "Build Succeeded",
          "Build Failed",
          "ImageStream Tagged",
          "Project Created",
          "Service Created",
          "Container Running"
        ]
      },
      {
        "name": "Amazon",
        "logo": require("../images/logos/acm.svg.svg").default,
        "events": [
          "Task Started",
          "Task Stopped",
          "Service Deployed",
          "Service Updated",
          "Instance Launched",
          "Instance Terminated",
          "Cluster Created",
          "Task Definition Registered",
          "Container Instance Registered",
          "Deployment Completed"
        ]
      }
    ]
  },
  {
    "category_name": "Cloud Infrastructure",
    "tools": [
      {
        "name": "AWS",
        "logo": require("../images/logos/aws-cloudformation.svg").default,
        "events": [
          "Instance State Change",
          "S3 Object Created",
          "S3 Object Deleted",
          "Lambda Invoked",
          "VPC Created",
          "Security Group Modified",
          "EBS Volume Attached",
          "CloudWatch Alarm State Change",
          "Auto Scaling Group Launch",
          "API Call Made"
        ]
      },
      {
        "name": "Azure",
        "logo": require("../images/logos/azure.svg").default,
        "events": [
          "Resource Group Created",
          "Deployment Succeeded",
          "VM Started",
          "VM Stopped",
          "Resource Deleted",
          "Blob Uploaded",
          "Function Executed",
          "Resource Updated",
          "Subscription Quota Exceeded",
          "Activity Log Alert"
        ]
      },
      {
        "name": "CloudFormation",
        "logo": require("../images/logos/aws-cloudformation.svg").default,
        "events": [
          "Stack Create Complete",
          "Stack Update Complete",
          "Stack Delete Complete",
          "Resource Create Complete",
          "Resource Update Complete",
          "Resource Delete Complete",
          "Stack Rollback Complete",
          "Change Set Created",
          "Change Set Executed",
          "Stack Drifted"
        ]
      },
      {
        "name": "Pulumi",
        "logo": require("../images/logos/pulumi.svg").default,
        "events": [
          "Stack Created",
          "Deployment Started",
          "Deployment Succeeded",
          "Deployment Failed",
          "Resource Created",
          "Resource Updated",
          "Resource Deleted",
          "Stack Destroyed",
          "State Refreshed",
          "Preview Generated"
        ]
      }
    ]
  },
  {
    "category_name": "Monitoring & Observability",
    "tools": [
      {
        "name": "Datadog",
        "logo": require("../images/logos/datadog.svg").default,
        "events": [
          "Alert Triggered",
          "Monitor Resolved",
          "Monitor Warned",
          "Event Received",
          "Metric Submitted",
          "Log Received",
          "Integration Configured",
          "Dashboard Created",
          "Agent Status Change",
          "Monitor Muted"
        ]
      },
      {
        "name": "Grafana",
        "logo": require("../images/logos/grafana.svg").default,
        "events": [
          "Alert Triggered",
          "Alert Resolved",
          "Dashboard Created",
          "Panel Added",
          "Data Source Connected",
          "Annotation Created",
          "User Logged In",
          "Dashboard Viewed",
          "Notification Sent",
          "Panel Data Refreshed"
        ]
      },
      {
        "name": "PagerDuty",
        "logo": require("../images/logos/pagerduty.svg").default,
        "events": [
          "Incident Triggered",
          "Incident Acknowledged",
          "Incident Resolved",
          "Incident Escalated",
          "Service Created",
          "User Added",
          "Schedule Change",
          "Alert Received",
          "Integration Activated",
          "Maintenance Window Started"
        ]
      }
    ]
  },
  {
    "category_name": "Testing & Quality",
    "tools": [
      {
        "name": "SonarQube",
        "logo": require("../images/logos/sonarqube-1.svg").default,
        "events": [
          "Analysis Completed",
          "Quality Gate Passed",
          "Quality Gate Failed",
          "New Code Smells Detected",
          "New Bugs Detected",
          "New Vulnerabilities Detected",
          "Project Created",
          "Webhook Triggered",
          "Issue Commented",
          "Issue Resolved"
        ]
      },
      {
        "name": "Selenium",
        "logo": require("../images/logos/selenium.svg").default,
        "events": [
          "Page Loaded",
          "Element Clicked",
          "Text Entered",
          "Form Submitted",
          "Screenshot Taken",
          "Test Case Passed",
          "Test Case Failed",
          "Browser Opened",
          "Browser Closed",
          "Element Found"
        ]
      },
      {
        "name": "Jest",
        "logo": require("../images/logos/jest.svg").default,
        "events": [
          "Test Suite Started",
          "Test Suite Passed",
          "Test Suite Failed",
          "Test Case Passed",
          "Test Case Failed",
          "Coverage Report Generated",
          "Snapshot Updated",
          "Hook Executed",
          "Test File Watched",
          "Error Thrown in Test"
        ]
      },
      {
        "name": "Postman",
        "logo": require("../images/logos/postman.svg").default,
        "events": [
          "Request Sent",
          "Response Received",
          "Test Script Executed",
          "Collection Run Started",
          "Collection Run Completed",
          "Environment Variable Set",
          "Request Failed",
          "Assertion Failed",
          "Collection Imported",
          "Collection Shared"
        ]
      }
    ]
  }
];*/
export const categoriesList2 = 
[
    {
        "id": "triggers",
        "name": "Triggers",
        "description": "Events that start your workflow.",
        "icon": "ads_click",
        "nodes": [
            {
            "id": "trigger-manual",
            "type": "trigger",
            "name": "Manual",
            "icon": "ads_click",
            "description": "Starts workflow with a manual user action."
            },
            {
            "id": "trigger-event",
            "type": "trigger",
            "name": "On app event",
            "icon": "event",
            "description": "Starts workflow when something happens in an app",
            "apps" : require("../components/tools").toolsList
            }
        ]
    },
    {
        "id": "build_package",
        "name": "Build & Package",
        "description": "Steps for compiling code and creating deployable artifacts.",
        "icon": "build",
        "nodes": [
            {
            "id": "action-compile-code",
            "type": "action",
            "name": "Compile Code",
            "icon": "build",
            "description": "Compiles source code into binaries or scripts."
            },
            {
            "id": "action-run-unit-tests",
            "type": "action",
            "name": "Run Unit Tests",
            "icon": "science",
            "description": "Executes unit tests for code verification."
            },
            {
            "id": "action-build-docker-image",
            "type": "action",
            "name": "Build Docker Image",
            "icon": "layers",
            "description": "Builds a Docker image from a Dockerfile."
            },
            {
            "id": "action-create-package",
            "type": "action",
            "name": "Create Package",
            "icon": "inventory_2",
            "description": "Creates a deployable package (e.g., JAR, WAR, npm)."
            },
            {
            "id": "action-scan-dependencies",
            "type": "action",
            "name": "Scan Dependencies",
            "icon": "bug_report",
            "description": "Scans for vulnerabilities in project dependencies."
            },
            {
            "id": "action-push-artifact",
            "type": "action",
            "name": "Push Artifact to Registry",
            "icon": "cloud_upload",
            "description": "Uploads the built artifact to a registry."
            }
        ]
    },
    {
        "id": "testing_quality",
        "name": "Testing & Quality",
        "description": "Steps for validating your application's functionality and security.",
        "icon": "account_tree",
        "nodes": [
            {
            "id": "action-run-integration-tests",
            "type": "action",
            "name": "Run Integration Tests",
            "icon": "account_tree",
            "description": "Executes tests for integrated components."
            },
            {
            "id": "action-run-e2e-tests",
            "type": "action",
            "name": "Run E2E Tests",
            "icon": "public",
            "description": "Executes end-to-end tests for the entire application."
            },
            {
            "id": "action-run-performance-tests",
            "type": "action",
            "name": "Run Performance Tests",
            "icon": "speed",
            "description": "Measures application performance under load."
            },
            {
            "id": "action-run-security-scan",
            "type": "action",
            "name": "Run Security Scan",
            "icon": "security",
            "description": "Performs static or dynamic security analysis."
            },
            {
            "id": "action-code-quality-check",
            "type": "action",
            "name": "Code Quality Check",
            "icon": "done_all",
            "description": "Analyzes code for quality, style, and maintainability."
            }
        ]
    },
    {
        "id": "deployment",
        "name": "Deployment",
        "description": "Steps for deploying your application to various environments.",
        "icon": "rocket_launch",
        "nodes": [
            {
            "id": "action-deploy-to-env",
            "type": "action",
            "name": "Deploy to Environment",
            "icon": "rocket_launch",
            "description": "Deploys the application to a specified environment (e.g., Staging, Production)."
            },
            {
            "id": "action-apply-kubernetes-manifest",
            "type": "action",
            "name": "Apply Kubernetes Manifest",
            "icon": "widgets",
            "description": "Applies Kubernetes YAML configuration."
            },
            {
            "id": "action-helm-deploy",
            "type": "action",
            "name": "Helm Deploy",
            "icon": "deployed_code",
            "description": "Deploys an application using a Helm chart."
            },
            {
            "id": "action-terraform-apply",
            "type": "action",
            "name": "Terraform Apply",
            "icon": "data_object",
            "description": "Applies Terraform configuration for infrastructure provisioning."
            },
            {
            "id": "action-serverless-deploy",
            "type": "action",
            "name": "Serverless Deploy",
            "icon": "functions",
            "description": "Deploys a serverless function (e.g., Lambda, Azure Function)."
            },
            {
            "id": "action-rollback",
            "type": "action",
            "name": "Rollback Deployment",
            "icon": "undo",
            "description": "Reverts to a previous successful deployment."
            }
        ]
    },
    {
        "id": "control_flow_utilities",
        "name": "Control Flow & Utilities",
        "description": "Logic and utility steps for advanced workflow control.",
        "icon": "call_split",
        "nodes": [
            {
            "id": "control-if-else",
            "type": "control",
            "name": "If/Else Condition",
            "icon": "call_split",
            "description": "Executes steps based on a condition."
            },
            {
            "id": "control-parallel",
            "type": "control",
            "name": "Parallel Execution",
            "icon": "compare_arrows",
            "description": "Runs multiple steps concurrently."
            },
            {
            "id": "control-wait",
            "type": "control",
            "name": "Wait/Delay",
            "icon": "hourglass_empty",
            "description": "Pauses the workflow for a specified duration."
            },
            {
            "id": "utility-run-script",
            "type": "utility",
            "name": "Run Shell Script",
            "icon": "terminal",
            "description": "Executes a custom shell command or script."
            },
            {
            "id": "utility-call-api",
            "type": "utility",
            "name": "Call External API",
            "icon": "api",
            "description": "Makes an HTTP request to an external API."
            },
            {
            "id": "utility-manual-approval",
            "type": "utility",
            "name": "Manual Approval",
            "icon": "how_to_reg",
            "description": "Requires manual approval to proceed."
            }
        ]
    },
    {
        "id": "integrations_notifications",
        "name": "Integrations & Notifications",
        "description": "Steps for connecting to external services and sending alerts.",
        "icon": "email",
        "nodes": [
            {
            "id": "integration-send-email",
            "type": "integration",
            "name": "Send Email",
            "icon": "email",
            "description": "Sends an email notification."
            },
            {
            "id": "integration-send-slack",
            "type": "integration",
            "name": "Send Slack Message",
            "icon": "chat",
            "description": "Sends a message to a Slack channel."
            },
            {
            "id": "integration-create-jira-issue",
            "type": "integration",
            "name": "Create JIRA Issue",
            "icon": "assignment",
            "description": "Creates or updates an issue in JIRA."
            },
            {
            "id": "integration-update-config",
            "type": "integration",
            "name": "Update Configuration",
            "icon": "settings",
            "description": "Updates application configuration or feature flags."
            },
            {
            "id": "integration-post-metrics",
            "type": "integration",
            "name": "Post Metrics",
            "icon": "show_chart",
            "description": "Sends metrics to a monitoring system (e.g., Datadog, Prometheus)."
            }
        ]
    },
    {
        "id": "custom-components",
        "name": "Custom Components",
        "description": "Custom components for your workflow.",
        "icon": "manufacturing",
        "nodes": [
            {
            "id": "custom-component",
            "type": "trigger",
            "name": "Custom component 1",
            "icon": "manufacturing",
            "description": "Custom component 1 description"
            },
            {
            "id": "custom-component",
            "type": "trigger",
            "name": "Custom component 2",
            "icon": "manufacturing",
            "description": "Custom component 2 description"
            }
        ]
    },
]