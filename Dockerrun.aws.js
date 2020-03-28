{
  "AWSEBDockerrunVersion": 2,
  "containerDefinitions": [
    {
      "name": "client",
      "image": "tfadams/fib-client",
      "hostname": "client",
      "essential": false,
      "memory": 128
    },
    {
      "name": "server",
      "image": "tfadams/fib-server",
      "hostname": "api",
      "essential": false,
      "memory": 128
    },
    {
      "name": "worker",
      "image": "tfadams/fib-worker",
      "hostname": "worker",
      "essential": false,
      "memory": 128
    },
    {
      "name": "nginx",
      "image": "tfadams/fib-worker",
      "hostname": "nginx",
      "essential": true,
      "portMappings": [
        {
          "hostPort": 80,
          "containerPort": 80
        }
      ],
      "links": ["client", "server"],
      "memory": 128
    }
  ]
}
