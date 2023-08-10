<template>
  <div id="app">
    <script
      type="application/javascript"
      v-bind:src="
        platformbase +
        '/controlpanel/static/formsio/formiojs/dist/formio.full.js'
      "
    ></script>
    <script
      type="application/javascript"
      v-bind:src="platformbase + '/controlpanel/static/js/pages/forms.js'"
    ></script>

    <el-row>
      <el-col :span="24">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item disabled>
            <img alt="OneSait" src="./assets/onesait.svg" style="height: 50px"
          /></el-menu-item>
          <el-menu-item index="0">Info</el-menu-item>
          <el-menu-item index="1">Form List</el-menu-item>
          <el-menu-item index="2">Complete the application form</el-menu-item>
          <el-menu-item index="3">Edit filled form</el-menu-item>
          <el-menu-item index="4">Create form</el-menu-item>
          <el-menu-item index="5">Update form</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div v-if="active === '0'">
          <el-container style="max-height: 93.8vh">
            <el-card
              class="box-card"
              style="
                height: 100%;
                width: 100%;
                border: 1px solid #eee;
                overflow: auto;
                height: -webkit-fill-available;
              "
            >
              <el-row style="padding: 30px 60px 60px 60px">
                <h3 align="left">ABOUT FORMS</h3>
                <p align="left">
                  How easy it is to create form templates from the app, for this
                  you just have to assign a name and the entity where the
                  records will be stored, and drag the fields on the template
                  canvas until you get the desired result.
                </p>

                <p align="left">
                  This demo aims to show how to integrate the use of
                  <b>Onesaitplatform forms</b> in a vue 2 app.
                </p>
                <p align="left">
                  You only need to know the user's X-OP-APIKey to be able to
                  access their forms. The data is obtained by calls to the
                  <b>Onesaitplatform REST services api</b>. But the user does
                  not need to know this since he only has to indicate a
                  <b>datasource</b> to obtain the data and display it in a
                  select component for example
                </p>
              </el-row>

              <el-tabs
                v-model="activeInfo"
                style="padding: 30px 60px 60px 60px"
              >
                <el-tab-pane label="Forms" name="0">
                  <el-row style="padding: 60px">
                    <el-col :span="6">
                      <p align="left">
                        In this demonstrator you can see a
                        <b>list with the form templates</b>. From this list you
                        can edit a form or use it for the rest of the possible
                        options
                      </p>
                    </el-col>
                    <el-col :span="18">
                      <img
                        align="right"
                        alt="OneSait"
                        src="./assets/formlist.png"
                        style="width: 60vw"
                    /></el-col>
                  </el-row>
                  <el-row style="padding: 60px">
                    <el-col :span="18">
                      <img
                        align="left"
                        alt="OneSait"
                        src="./assets/completeTheApplicationForm.png"
                        style="width: 60vw"
                      />
                    </el-col>
                    <el-col :span="6">
                      <p align="left">
                        The next option is from a form template to fill this and
                        send the data so that they can be stored as a new record
                        in the entity selected for the form
                      </p>
                    </el-col>
                  </el-row>

                  <el-row style="padding: 60px">
                    <el-col :span="6">
                      <p align="left">
                        Knowing the form and record identifier for the given
                        entity, previously inserted data can be modified. Also,
                        as can be seen depending on the type of field, in this
                        case the address field that is auto-completed with the
                        information from open streetmaps. Validations can also
                        be established as in the email field.
                      </p>
                    </el-col>
                    <el-col :span="18">
                      <img
                        alt="OneSait"
                        src="./assets/editFilledForm.png"
                        style="width: 60vw"
                      />
                    </el-col>
                  </el-row>

                  <el-row style="padding: 60px">
                    <el-col :span="18">
                      <img
                        alt="OneSait"
                        src="./assets/createForm.png"
                        style="width: 60vw"
                      />
                    </el-col>
                    <el-col :span="6">
                      <p align="left">
                        From the app you can create new form templates, for this
                        you just have to assign a name and the entity where the
                        records will be stored, and dragging the fields on the
                        template canvas we will design the form.
                      </p>
                    </el-col>
                  </el-row>

                  <el-row style="padding: 60px">
                    <el-col :span="6">
                      <p align="left">
                        Once the form template is created, it can be easily
                        modified using drag and drop
                      </p>
                    </el-col>
                    <el-col :span="18">
                      <img
                        alt="OneSait"
                        src="./assets/updateForm.png"
                        style="width: 60vw"
                      />
                    </el-col>
                  </el-row>
                </el-tab-pane>
                <el-tab-pane label="Components" name="1">
                  <el-row style="padding: 60px">
                    <el-col :span="6">
                      <p align="left">
                        The <b> button components</b> have a property that
                        allows, once the completed form has been sent correctly,
                        <b> to redirect to another url</b>. Said
                        <b> property is Redirect</b>, the way to load it is
                        either a complete url
                        https://onesaitplatform.com/path... is entered, or only
                        the path can be entered and it will take the host
                        defined in the app in the <b> appbase variable</b>.
                      </p>
                    </el-col>
                    <el-col :span="18">
                      <img
                        alt="OneSait"
                        src="./assets/submit.png"
                        style="width: 60vw"
                      />
                    </el-col>
                  </el-row>

                  <el-row style="padding: 60px">
                    <el-col :span="18">
                      <img
                        alt="OneSait"
                        src="./assets/selectcomponent.png"
                        style="width: 60vw"
                      />
                    </el-col>
                    <el-col :span="6">
                      <p align="left">
                        The <b>select components</b> can load their elements
                        from the <b>Onesaitplatform datasources</b>. For this it
                        is only necessary to add the select component to the
                        canvas. Go to the <b>Data tab</b>, select the
                        <b>Datasource</b> option in the datasource type.
                        Finally, the fields value, description and type in which
                        the value will be stored will be indicated, in this case
                        String
                      </p>
                    </el-col>
                  </el-row>

                  <el-row style="padding: 60px">
                    <el-col :span="6">
                      <p align="left">
                        For a more expert user, a predefined function is
                        available with which you can start from a datasource and
                        perform the operations project, filters, group, sort,
                        offset, limit, param:<br /><br />
                        This is a simple example<br />
                        from('catalog').exec().then(function( msg ) {<br />
                        values = msg.map((x) => x.catalog) ;<br />
                        instance.setItems(values);<br />
                        });<br />
                        <a
                          href="https://onesaitplatform.refined.site/space/DOCT/2220791857/Multidatasources-datadiscovery+queries+in+Gadget+Template"
                          >for more information on the structure of the function
                          see the documentation</a
                        >
                      </p>
                    </el-col>
                    <el-col :span="18">
                      <img
                        alt="OneSait"
                        src="./assets/selectcustom.png"
                        style="width: 60vw"
                      />
                    </el-col>
                  </el-row>
                </el-tab-pane>
              </el-tabs>
            </el-card>
          </el-container>
        </div>
        <div v-if="active === '1'">
          <el-container style="height: 93.8vh">
            <el-card
              class="box-card"
              style="
                height: 100%;
                width: 100%;
                border: 1px solid #eee;
                overflow-y: auto;
              "
            >
              <h4>FORMS TEMPLATE LIST</h4>
              <el-col :span="6">
                <el-card class="box-card">
                  <span>X-OP-APIKey</span>
                  <el-input
                    placeholder="Please input "
                    v-model="xopapikey"
                  ></el-input>

                  <el-button
                    size="small"
                    style="margin-top: 15px; background-color: #1168a6"
                    @click="handleUpdateList"
                    type="primary"
                    >SHOW</el-button
                  >
                </el-card>
              </el-col>
              <el-col :span="18" style="padding: 20px">
                <el-table
                  :data="formslist"
                  border
                  empty-text=" "
                  style="width: 100%"
                >
                  <el-table-column prop="name" label="name"> </el-table-column>
                  <el-table-column prop="id" label="id"> </el-table-column>
                  <el-table-column prop="entity" label="entity">
                  </el-table-column>
                  <el-table-column label="Options">
                    <template slot-scope="scope">
                      <el-tooltip
                        class="item"
                        effect="dark"
                        content="use the id of this form"
                        placement="top-start"
                      >
                        <el-button
                          size="mini"
                          @click="handleUseFromList(scope.row)"
                          >Use</el-button
                        >
                      </el-tooltip>
                      <el-tooltip
                        class="item"
                        effect="dark"
                        content="update this form"
                        placement="top-start"
                      >
                        <el-button
                          size="mini"
                          @click="handleUpdateFromList(scope.row)"
                          >Update</el-button
                        >
                      </el-tooltip>
                    </template>
                  </el-table-column>
                </el-table>
              </el-col>
            </el-card>
          </el-container>
        </div>
        <div v-if="active === '2'">
          <el-container style="height: 93.8vh">
            <el-card
              class="box-card"
              style="
                height: 100%;
                width: 100%;
                border: 1px solid #eee;
                overflow-y: auto;
              "
            >
              <h4>COMPLETE THE APPLICATION FORM</h4>
              <el-col :span="6">
                <el-card class="box-card">
                  <span>X-OP-APIKey</span>
                  <el-input
                    placeholder="Please input "
                    v-model="xopapikey"
                  ></el-input>
                  <span>ID Form</span>
                  <el-input
                    placeholder="Please input "
                    v-model="formid"
                  ></el-input>
                  <el-button
                    size="small"
                    style="margin-top: 15px; background-color: #1168a6"
                    @click="handleUpdateForm"
                    type="primary"
                    >SHOW</el-button
                  >
                </el-card>
              </el-col>
              <el-col :span="18" style="padding: 20px">
                <div v-if="showHideForm">
                  <ShowForm
                    v-bind:platformbase="platformbase"
                    v-bind:appbase="appbase"
                    v-bind:xopapikey="xopapikey"
                    v-bind:formid="formid"
                    v-bind:dataoid="null"
                    v-bind:editForm="false"
                    @interface="getFormInterface"
                  />
                </div>
              </el-col>
            </el-card>
          </el-container>
        </div>
        <div v-if="active === '3'">
          <el-container style="height: 93.8vh">
            <el-card
              class="box-card"
              style="
                height: 100%;
                width: 100%;
                border: 1px solid #eee;
                overflow-y: auto;
              "
            >
              <h4>EDIT FILLED FORM</h4>
              <el-col :span="6">
                <el-card class="box-card">
                  <span>X-OP-APIKey</span>
                  <el-input
                    placeholder="Please input "
                    v-model="xopapikey"
                  ></el-input>
                  <span>ID Form</span>
                  <el-input
                    placeholder="Please input "
                    v-model="formid"
                  ></el-input>
                  <span>ID Data</span>
                  <el-input
                    placeholder="Please input "
                    v-model="dataoid"
                  ></el-input>
                  <el-button
                    size="small"
                    style="margin-top: 15px; background-color: #1168a6"
                    @click="handleUpdateForm"
                    type="primary"
                    >SHOW</el-button
                  >
                </el-card>
              </el-col>
              <el-col :span="18" style="padding: 20px">
                <div v-if="showHideForm">
                  <ShowForm
                    v-bind:platformbase="platformbase"
                    v-bind:appbase="appbase"
                    v-bind:xopapikey="xopapikey"
                    v-bind:formid="formid"
                    v-bind:dataoid="dataoid"
                    v-bind:editForm="false"
                    @interface="getFormInterface"
                  />
                </div>
              </el-col>
            </el-card>
          </el-container>
        </div>
        <div v-if="active === '4'">
          <el-container style="height: 93.8vh">
            <el-card
              class="box-card"
              style="
                height: 100%;
                width: 100%;
                border: 1px solid #eee;
                overflow-y: auto;
              "
            >
              <h4>CREATE FORM</h4>
              <el-col :span="6">
                <el-card class="box-card">
                  <span>X-OP-APIKey</span>
                  <el-input
                    placeholder="Please input "
                    v-model="xopapikey"
                  ></el-input>

                  <span>Name</span>
                  <el-input
                    placeholder="Please input "
                    v-model="name"
                  ></el-input>
                  <label>Entity</label><br />
                  <el-select
                    style="width: 100%"
                    v-model="entity"
                    filterable
                    placeholder="Select"
                  >
                    <el-option
                      v-for="item in entitiesList"
                      :key="item.identification"
                      :label="item.identification"
                      :value="item.identification"
                    >
                    </el-option> </el-select
                  ><br />
                  <el-button
                    size="small"
                    style="margin-top: 15px; background-color: #1168a6"
                    @click="handleUpdateForm"
                    type="primary"
                    >SHOW</el-button
                  >
                  <el-button
                    size="small"
                    style="margin-top: 15px; background-color: #1168a6"
                    @click="createForm"
                    type="primary"
                    >CREATE</el-button
                  >
                </el-card>
              </el-col>
              <el-col :span="18" style="padding: 20px">
                <div v-if="showHideForm">
                  <ShowForm
                    v-bind:platformbase="platformbase"
                    v-bind:appbase="appbase"
                    v-bind:xopapikey="xopapikey"
                    v-bind:name="name"
                    v-bind:entity="entity"
                    v-bind:editForm="true"
                    @interface="getFormInterface"
                  />
                </div>
              </el-col>
            </el-card>
          </el-container>
        </div>
        <div v-if="active === '5'">
          <el-container style="height: 93.8vh">
            <el-card
              class="box-card"
              style="
                height: 100%;
                width: 100%;
                border: 1px solid #eee;
                overflow-y: auto;
              "
            >
              <h4>UPDATE FORM</h4>
              <el-col :span="6">
                <el-card class="box-card">
                  <span>X-OP-APIKey</span>
                  <el-input
                    placeholder="Please input "
                    v-model="xopapikey"
                  ></el-input>
                  <span>ID Form</span>
                  <el-input
                    placeholder="Please input "
                    v-model="formid"
                  ></el-input>
                  <span>Name</span>
                  <el-input
                    placeholder="Please input "
                    v-model="name"
                    disabled
                  ></el-input>

                  <span>Entity</span><br />
                  <el-select
                    style="width: 100%"
                    v-model="entity"
                    filterable
                    placeholder="Select"
                  >
                    <el-option
                      v-for="item in entitiesList"
                      :key="item.identification"
                      :label="item.identification"
                      :value="item.identification"
                    >
                    </el-option> </el-select
                  ><br />

                  <el-button
                    size="small"
                    style="margin-top: 15px; background-color: #1168a6"
                    @click="handleUpdateForm"
                    type="primary"
                    >SHOW</el-button
                  >
                  <el-button
                    size="small"
                    style="margin-top: 15px; background-color: #1168a6"
                    @click="updateForm"
                    type="primary"
                    >UPDATE</el-button
                  >
                </el-card>
              </el-col>
              <el-col :span="18" style="padding: 20px">
                <div v-if="showHideForm">
                  <ShowForm
                    v-bind:platformbase="platformbase"
                    v-bind:appbase="appbase"
                    v-bind:xopapikey="xopapikey"
                    v-bind:formid="formid"
                    v-bind:entity="entity"
                    v-bind:name="name"
                    v-bind:editForm="true"
                    @dataForm="getFormData($event)"
                    @interface="getFormInterface"
                  />
                </div>
              </el-col>
            </el-card>
          </el-container>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ShowForm from "./components/ShowForm.vue";
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./services/onesaitPlatformServices";
import {
  loadEntities,
  loadFormsList,
} from "./services/onesaitPlatformServices";

Vue.use(ElementUI);
export default {
  name: "App",
  components: {
    ShowForm,
  },
  data() {
    return {
      activeIndex: "0",
      active: "0",
      activeInfo: "0",
      appbase: "http:localhost:8080",
      platformbase: "https://lab.onesaitplatform.com",
      xopapikey: "",
      formid: "",
      name: "",
      entity: "",
      dataoid: "",
      showHideForm: false,
      entitiesList: [],
      formslist: [],
    };
  },
  methods: {
    handleSelect(key) {
      this.active = key;
      this.showHideForm = false;
    },
    handleUpdateForm() {
      if (this.entitiesList.size == 0) {
        loadEntities(this.platformbase, this.xopapikey).then((res) => {
          this.entitiesList = res;
        });
      }

      this.showHideForm = false;
      setTimeout(
        function () {
          this.showHideForm = true;
        }.bind(this),
        2
      );
    },
    handleUpdateList() {
      loadFormsList(this.platformbase, this.xopapikey).then((res) => {
        this.formslist = res;
      });
      this.showHideForm = false;
      setTimeout(
        function () {
          this.showHideForm = true;
        }.bind(this),
        2
      );
    },
    handleUseFromList(row) {
      this.formid = row.id;
      console.log(row);
    },
    handleUpdateFromList(row) {
      this.formid = row.id;
      this.handleSelect("5");
      this.active = "5";
      this.activeIndex = "5";
      this.handleUpdateForm();
    },
    getFormInterface(childInterface) {
      this.$options.childInterface = childInterface;
    },
    //FORM INTERFACE
    createForm() {
      this.$options.childInterface.createForm();
    },
    updateForm() {
      this.$options.childInterface.updateForm();
    },
    getEntityList() {
      this.$options.childInterface.getEntityList();
    },
    getFormData(dat) {
      this.entity = dat.entity;
      this.name = dat.name;
    },
  },
  mounted: function () {
    var HeaderLibs = [
      {
        link: this.platformbase + "/controlpanel/static/formsio/boostrap.css",
        loaded: false,
      },
      {
        link:
          this.platformbase +
          "/controlpanel/static/formsio/formiojs/dist/formio.full.css",
        loaded: false,
      },
      {
        link:
          this.platformbase + "/controlpanel/static/formsio/assets/styles.css",
        loaded: false,
      },
      {
        link:
          this.platformbase +
          "/controlpanel/static/formsio/assets/boostrap-form.css",
        loaded: false,
      },
      {
        link:
          this.platformbase +
          "/controlpanel/static/formsio/assets/form-editor.css",
        loaded: false,
      },
    ];
    var mountCSS = function (link) {
      let l = document.createElement("link");
      l.rel = "stylesheet";
      l.type = "text/css";
      l.href = link;
      document.head.appendChild(l);
    };

    for (var i = 0; i < HeaderLibs.length; i++) {
      if (HeaderLibs[i].loaded === true) {
        continue;
      }
      HeaderLibs[i].loaded = true;
      mountCSS(HeaderLibs[i].link);
    }

    //mount change data entity and name
    this.$on("dataForm", function (data) {
      this.entity = data.entity;
      this.name = data.name;
    });

    loadEntities(this.platformbase, this.xopapikey).then((res) => {
      this.entitiesList = res;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-menu-demo {
  width: 100%;
}

h3:after {
  content: "";
  display: block;
  width: 56px;
  height: 3px;
  background-color: #1168a6;
  margin-top: 12px;
}
</style>
