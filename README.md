
This application is created with Vue2 technology
https://v2.vuejs.org/
Serves as an example of the integration of the formio.js library with the onesait platform
To integrate into another application, all you have to do is take the ShowForm.vue component and the onesaitPlatformServices.js service.

Copyright Indra Soluciones Tecnologías de la Información, S.L.U.
2013-2023 SPAIN
 
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.



To run the application, first perform npm install and then npm run serve

Things to keep in mind :
The data is found in App.vue

platformbase: "https://lab.onesaitplatform.com",
appbase: "http://localhost:8080"
xopapikey: "",
These indicate the platform host and security token

   <ShowForm
                    v-bind:platformbase="platformbase"
                    v-bind:appbase="appbase"
                    v-bind:xopapikey="xopapikey"
                    v-bind:formid="formid"
                    v-bind:dataoid="dataoid"
                    v-bind:editForm="false"
                    @interface="getFormInterface"
                  />

To invoke the component, it can be done with this, the possible parameters are these:
platformbase:String, 
appbase:String, 
xopapikey: String,
formid: String,
dataoid: String,
editForm: Boolean,
name: String,
entity: String,


 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
