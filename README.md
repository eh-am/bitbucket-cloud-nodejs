
# Rest client for Bitbucket Cloud

This is a fork of https://github.com/markmssd/bitbucket-server-nodejs that fetches Bitbucket Cloud API instead of Bitbucket Server (PKA Stash)
PRs are welcomed.

Provides access to *some* of client's APIs.

## Initializing Client
Supports public, basic auth and OAuth1.

Specify auth's type as 'public', 'basic' or 'oauth'. Defaults to 'public'.

```
var Client = require('bitbucket-server-nodejs').Client;
```

```
                 - BASIC AUTH -
var auth = {
    "type": "basic",
    "username": "username",
    "password": "password"
};
                  - OR OAUTH1 -
var auth = {
    "type": "oauth",
    "consumer_secret": "consumer_secret",
    "signature_method": "signature_method",
    "token": "token",
    "token_secret": "token_secret"
};
      - OR NO AUTH AT ALL, FOR PUBLIC ACCESS -
```

```
var client = new Client('http://localhost:7990/rest/api/1.0');
                      - OR -
var client = new Client('http://localhost:7990/rest/api/1.0', auth);
```

## APIS

### projects

Get all projects.

```
client.projects.getAll(owner); // Promise
```

Get project by key.

```
client.projects.get(projectKey, owner); // Promise
```

### repos

Get all repos for a project.

```
client.repos.get(projectKey, owner); // Promise
```


```
client.repos.getAll(owner); // Promise
```

Get all repos for all projects.
