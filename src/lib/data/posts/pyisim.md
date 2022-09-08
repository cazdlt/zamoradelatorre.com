---
title: Working with IBM Security Identity Manager (ISIM) Web Services on Python
date: 2020-10-06
description: Managing accesses, roles, policies and whatever you need
tags: 
    - python
    - IBM
    - IAM
thumbnail: /img/projects/isim.jpg
type: projects
---

## Introduction
[IBM Security Identity Manager (ISIM)](https://www.ibm.com/support/knowledgecenter/SSRMWJ_7.0.1.13/com.ibm.isim.doc/kc-homepage.html) is a powerful and complex Identity Management tool. It currently lives along [IBM Security Identity Governance and Intelligence](https://www.ibm.com/co-es/products/identity-governance-and-intelligence) (now rebranded as IBM Security Verify Governance) in IBM's IdM family. As far as I know, it is one of the oldest and most used products of this kind, however, there is not much *online community* around it (probably because it is an enterprise product, and enterprises are not know for their great sharing spirit).

## Motivation 
I've been working with ISIMv7 (the closed system version) for around two years by now, and at least during the first one, all the development, testing and quality assurance work was done manually on the administration console. That means, if an approval workflow had 3 approval activities and one work order, and I wanted to test that it works, I'd have to manually request the access, then go manually over every activity (and it's justification) and then check the request to see if it worked. If my workflow had an error in any of it's scripts, then I would have to repeat this process all over again until I fixed the error. All of this got annoying quickly, and now that I know that it can be faster, I am even more annoyed at those times.

I started to work on this around April this year, and I decided to publish it on [PyPi](https://pypi.org/project/pyisim/) and [Github](https://github.com/cazdlt/pyisim) a couple of weeks ago, because I think I might be useful to some people. You are encouraged and welcome to collaborate and add features to the library on github if you'd like too.

Some of the issues I faced were resolved by checking this great sources:
- [ISIM SOAP Web Services example by IBM](https://www.youtube.com/watch?v=SFZjhOqbeA0)
- [ISIM REST API example by IBM](https://www.youtube.com/watch?v=901tO8uH17E)
- [Sample ISIM REST Requests by Ayoub Bahar](https://blog.ayoub-bahar.com/isim-rest-api-samples/)

Thanks!

However, for some others I had to do some digging on the Java APIs (you can check it out [here](https://www.stephen-swann.co.uk/javadoc/sim6.0/index.html)), and the SOAP API sample Java code - which is actually the best documentation available, since the official document is not very useful.

## Features

Documentation is now up at [Read the docs!](https://pyisim.readthedocs.io/en/latest/)

Currently, the library consists of 7 modules for the ISIM application server and an inner package for working with ISIM7 Virtual Appliance. However, from the 7 modules you (most likely) will only interact with the authorization, search and entities API.

The library uses [Requests](https://requests.readthedocs.io/en/master/) and [Zeep](https://docs.python-zeep.org/en/master/) extensively for communication with ISIM APIs.

The following are the currently (as of January 10, 2020) available features in it for the ISIM Application Server. Authorization (login) is clearly also available.

|    Entities\Operations    | Search | DN Lookup | Add | Delete | Suspend | Restore |      Modify     |
|:-------------------------:|:------:|:---------:|:---:|:------:|:-------:|:-------:|:---------------:|
|           People          |    ✓   |     ✓     |  ✓  |    ✓   |    ✓    |    ✓    |        ✓        |
|       Dynamic Roles       |    ✓   |     ✓     |  ✓  |    ✓   |         |         |        ✓        |
|        Static Roles       |    ✓   |     ✓     |  ✓  |    ✓   |         |         |        ✓        |
|   Provisioning Policies   |    ✓   |           |  ✓  |    ✓   |         |         |        ✓        |
|         Activities        |    ✓   |           |     |        |         |         |    (Complete)   |
| Organizational Containers |    ✓   |     ✓     |     |        |         |         |                 |
|          Services         |    ✓   |           |     |        |         |         |                 |
|           Access          |    ✓   |           |     |        |         |         |    (Request)    |
|           Groups          |    ✓   |           |     |        |         |         |                 |
|          Accounts         |    ✓   |           |  ✓  |    ✓   |    ✓    |    ✓    |  ✓ (and orphan) |

<br>

The following are the currently (as of October 6, 2020) available features in it for the ISIM7 Virtual Appliance. Authorization (login) is clearly also available.
- Search system properties
- Create system properties
- Modify system properties

You can contribute more to the project on [Github](https://github.com/cazdlt/pyisim) if you'd like (some of the older code is in spanish, since it started as an *internal* project and we are based in Colombia)

## Usage 

Currently, the only documentation available is *this* article and the project's [README](https://github.com/cazdlt/pyisim/blob/master/README.md) file. However, it is my plan to make a more complete set of documentation available, just so it is easier to use.

UPDATE: Documentation is now available at [Read the docs!](https://pyisim.readthedocs.io/en/latest/)

### Installation

You can install the library from PyPi using the following command:
```bash
pip install pyisim
```

Or from source using:
```bash
git clone https://github.com/cazdlt/pyisim.git
cd pyisim
python setup.py install
```

### Application API Examples
- Authorization (login)
```python
from pyisim.auth import Session

s=Session(url, "cazdlt", "secretpw", "my_certificate.cer")
```

- Obtaining the currently logged in person and modifying it's email
```python
from pyisim.auth import Session

s=Session(url, "cazdlt", "secretpw", "my_certificate.cer")
me=s.current_person()
me.modify(s,"my justification",changes={"mail":"cazdlt@gmail.com"})
```
- Creating a new person
```python
from pyisim.auth import Session
from pyisim.entities import Person
from pyisim import search

s=Session(url, "cazdlt", "secretpw", "my_certificate.cer")

person_attrs={
    "cn":"Andrés Zamora",
    "employeenumber":12345,
    "title":"Specialist",
    "mail":"cazdlt@gmail.com"
}

p=Person(s,person_attrs=person_attrs)
parent = search.organizational_container(s, "organizations", "My Organization")[0]
p.add(s,parent,"my justification")
```

- Getting the created person from ISIM, requesting an access for it and approving it.
```python
from pyisim.auth import Session
from pyisim import search

s=Session(url, "cazdlt", "secretpw", "my_certificate.cer")

person=search.people(s,by="employeenumber",filter=12345,limit=1)[0]
access=search.access(s,filter="Active Directory",limit=2)

response=person.request_access(s,access,"justification")
request_id=response.request.id
activity=search.activities(s,by="requestId",filter=request_id)[0]
activity.complete(s,"Approve","OK")
```

- Getting the created person from ISIM, modifying it's title and then deleting it.
    - Entity modification can be done changing the object's attributes (as seen here) or passing the changes dictionary (as seen in the second example).
```python
from pyisim.auth import Session
from pyisim import search

s=Session(url, "cazdlt", "secretpw", "my_certificate.cer")

persona=search.people(s,by="employeenumber",filter=12345,limit=1)[0]
persona.title="Analyst"
persona.modify(s,"modifying the title")
persona.delete(s," deleting person :(")
```

- Suspend and restore operations are done in the same way, through the ```person.suspend()``` and ```person.restore()``` methods.
- Creating dynamic roles
```python
from pyisim.auth import Session
from pyisim import search
from pysim.entities import DynamicRole

s=Session(url, "cazdlt", "secretpw", "my_certificate.cer")

parent = search.organizational_container(s, "organizations", "My Organization")[0]

owners = search.people(s, by="employeenumber", filter="1015463230")
owners_roles = search.roles(s, filter="ITIM Administrators")

# creación
name="dynrol_prueba"
rolinfo = {
    "name": name,
    "description": "dynrol_prueba",
    "parent": parent,
    "classification": "role.classification.business",
    "access_option": 2,
    "access_category": "Role",
    "owners": [o.dn for o in owners] + [o.dn for o in owners_roles],
    "rule": "(title=ROLETEST)",
}
rol = DynamicRole(s, role_attrs=rolinfo)
rol.add(s)
{% endhighlight %}
- Searching, modifying and then deleting static roles
{% highlight python %}
from pyisim.auth import Session
from pyisim import search

s=Session(url, "cazdlt", "secretpw", "my_certificate.cer")

rol=search.roles(s,filter="My Role")

#can modify using the object attributes
rol.description = "new description"
rol.modify(s) 

#can also modify using a changes dictionary
changes={"description":"newer description"}
rol.modify(s,changes) 

rol.delete(s)
```
- Static and Dynamic role can use the same methods, but some attributes (like the rule) are specific to dynamic roles.
- Creating provisioning policies
    - Modification and deletion are done the same way as the other entities (with ```policy.modify()``` and ```policy.delete()```)
```python
from pyisim.auth import Session
from pyisim import search
from pysim.entities import ProvisioningPolicy

s=Session(url, "cazdlt", "secretpw", "my_certificate.cer")

name="test"
parent = search.organizational_container(s, "organizations", test_org)[0]
service = search.service(s, parent, filter="Directorio Activo")[0]

#I know this can get very complex, so the library is also very flexible
entitlements = {
    service.dn: {
        "automatic": False,
        "workflow": None,
        "parameters": {
            "ercompany": [
                {
                    "enforcement": "Default",
                    "type": "script",
                    "values": "return 'test';",
                },
                {
                    "enforcement": "Excluded",
                    "type": "null",
                },
                {
                    "enforcement": "Allowed",
                    "type": "constant",
                    "values": ["test1", "test2"],
                },
                {
                    "enforcement": "Allowed",
                    "type": "Constant",
                    "values": ["test3"],
                },
                {
                    "enforcement": "Allowed",
                    "type": "REGEX",
                    "values": r"^[\s\w]+$",
                },
            ],
            "eradfax": [
                {
                    "enforcement": "Allowed",
                    "type": "constant",
                    "values": ["1018117"],
                }
            ],
        },
    },
    "*": {"automatic": False, "workflow": None, "parameters": {}},
}
policy = {
    "description": "test",
    "name": name,
    "parent": parent,
    "priority": 10000,
    "memberships": [x.dn for x in search.roles(s, filter="Auditor")],
    "enabled": False,
    "entitlements": entitlements,
}
pp = ProvisioningPolicy(s, policy_attrs=policy)
pp.add(s)
```
## The Future
This project is clearly still in it's infancy, and a lot of things can be improved upon. These are my plans to get better usability of the library:

- Service operations
    - To programatically create and modify services
- Improve search filtering


Most methods are annotated in the code, so you get code completion while writing code on an IDE or text editor. There are also a bunch of examples in the ```tests/``` folder in github, you can check those out or contact me if you have any doubts, requests or ideas on this.

---
Consider [buying me a (colombian) coffee](https://www.buymeacoffee.com/cazdlt) or contacting me on [twitter](https://twitter.com/cazdlt)!

<div style="margin: 0 auto; width: 200px;">
<script typex="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="cazdlt" data-color="#5F7FFF" data-emoji=""  data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000" data-font-color="#fff" data-coffee-color="#fd0"></script>
</div>