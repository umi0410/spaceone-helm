# 🌈 Introduction

This is SpaceONE Helm Chart. Using this chart, try using SpaceONE service and develop our services with various environments including your local environment.



# ⭐️ How to install

You can install the chart by just overriding some values. By default, you would use AWS SecretManager as your secret manager and it needs aws credentials which can access AWS SecretManager. So you should pass the values when you install or update the chart.

```
$ helm add repository
$ helm repository update
$ helm install spaceone . -f values.yaml \
```



# Customize SpaceONE - Using custom images

You can override each image of each service just by updating values.

```
# values.yaml
...
backend:
  services:
    identity:
      image: FOO/BAR:FOO
```

```
$ hal update spaceone . -f values.yaml
```

# Customize SpaceONE - Using your own server

> You might need `kubefwd` which execute convenient port-forwarding in a namespace.

You can connect our SpaceONE cluster to your own server like your local server.

1. Edit your endpoint as you expect.
2. (Optional) Disable the services that you don't need. This is not a required option because connections are executed based on configurations for endpoints. It doesn't matter that what services you deployed.  
3. Connect to your cluster by using port-forward through `kubefwd`.
4. Access to http://console-client with Modern browsers like Chrome or Safari, ...

## Customizing examples - backend micro service

> Supposing that you will develop your own `spaceone.identity` and run it on your own mac. My ip of local mac is 192.168.50.50 and I will use 60061 port for local identity server.

Edit the endpoint for `spaceone.identity`.

```
# values.yaml
backend:
  services:
    identtiy:
      enabled: false # Optional.
      endpoint: 192.168.50.50:60061 # your ip would be here.
      
```

```
# example codes to run your own spaceone.identity
$ SPACEONE_PORT=60061 spaceone grpc identity

# port-forward services which are deployed to "default" namespace.
$ sudo kubefwd svc -n default
```

Then, you can access to http://console-client as the following.

![image-20200708163509125](/Users/mzc01-jsday/Library/Application Support/typora-user-images/image-20200708163509125.png)