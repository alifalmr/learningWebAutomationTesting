$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "As a user I want to login to website sauce demo",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 57711953800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Normal login",
  "description": "",
  "id": "login;normal-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user input \"standard_user\" as userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 673949600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 2007914400,
  "status": "passed"
});
formatter.after({
  "duration": 3795919000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user input \"\u003cusername\u003e\" as userName and input \"\u003cpassword\u003e\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user will get \"\u003cerrorMessage\u003e\" as errorText",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login;invalid-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 15,
      "id": "login;invalid-login;;1"
    },
    {
      "cells": [
        "alifa",
        "2345",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 16,
      "id": "login;invalid-login;;2"
    },
    {
      "cells": [
        "",
        "2345",
        "Epic sadface: Username is required"
      ],
      "line": 17,
      "id": "login;invalid-login;;3"
    },
    {
      "cells": [
        "alifa",
        "",
        "Epic sadface: Password is required"
      ],
      "line": 18,
      "id": "login;invalid-login;;4"
    },
    {
      "cells": [
        "",
        "",
        "Epic sadface: Username is required"
      ],
      "line": 19,
      "id": "login;invalid-login;;5"
    },
    {
      "cells": [
        "standard_user",
        "2345",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 20,
      "id": "login;invalid-login;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 116479818100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user input \"alifa\" as userName and input \"2345\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user will get \"Epic sadface: Username and password do not match any user in this service\" as errorText",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 117123600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alifa",
      "offset": 12
    },
    {
      "val": "2345",
      "offset": 42
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 1610852800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 15
    }
  ],
  "location": "LoginSteps.errorText(String)"
});
formatter.result({
  "duration": 3115663700,
  "status": "passed"
});
formatter.after({
  "duration": 1293928100,
  "status": "passed"
});
formatter.before({
  "duration": 349946921200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user input \"\" as userName and input \"2345\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user will get \"Epic sadface: Username is required\" as errorText",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 155732100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "2345",
      "offset": 37
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 1568033100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 15
    }
  ],
  "location": "LoginSteps.errorText(String)"
});
formatter.result({
  "duration": 3083284900,
  "status": "passed"
});
formatter.after({
  "duration": 1156947000,
  "status": "passed"
});
formatter.before({
  "duration": 354216908000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user input \"alifa\" as userName and input \"\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user will get \"Epic sadface: Password is required\" as errorText",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 80266300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alifa",
      "offset": 12
    },
    {
      "val": "",
      "offset": 42
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 1696278400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Password is required",
      "offset": 15
    }
  ],
  "location": "LoginSteps.errorText(String)"
});
formatter.result({
  "duration": 3210528600,
  "status": "passed"
});
formatter.after({
  "duration": 1075590300,
  "status": "passed"
});
formatter.before({
  "duration": 76511040500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user input \"\" as userName and input \"\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user will get \"Epic sadface: Username is required\" as errorText",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 84799100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "",
      "offset": 37
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 1387283200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 15
    }
  ],
  "location": "LoginSteps.errorText(String)"
});
formatter.result({
  "duration": 3062009800,
  "status": "passed"
});
formatter.after({
  "duration": 1034582300,
  "status": "passed"
});
formatter.before({
  "duration": 87692208900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user input \"standard_user\" as userName and input \"2345\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user will get \"Epic sadface: Username and password do not match any user in this service\" as errorText",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 66443300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "2345",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 1524831100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 15
    }
  ],
  "location": "LoginSteps.errorText(String)"
});
formatter.result({
  "duration": 3075214200,
  "status": "passed"
});
formatter.after({
  "duration": 1010672500,
  "status": "passed"
});
});