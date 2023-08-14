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
          <InfoApp></InfoApp>
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
                  @change="updateEntities"
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
                    no-data-text="No Data"
                    no-match-text="No Data"
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
                    @click="buildFormFromEntity"
                    type="primary"
                    >BUILD FORM FROM ENTITY</el-button
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
                  <el-input @change="updateEntities"
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
                    no-data-text="No Data"
                    no-match-text="No Data"
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
                    @click="buildFormFromEntity"
                    type="primary"
                    >BUILD FORM FROM ENTITY</el-button
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
import InfoApp from "./components/InfoApp.vue";
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
    InfoApp
  },
  data() {
    return {
      activeIndex: "0",
      active: "0",      
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
      if(key =='4' || key=='5'){
        this.handleUpdateForm()
      }
    },
    handleUpdateForm() {
      if ((typeof this.entitiesList.size == 'undefined'|| this.entitiesList.size == 0 ) && this.xopapikey.length>0) {
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
      if(this.xopapikey.length>0){
        loadFormsList(this.platformbase, this.xopapikey).then((res) => {
          this.formslist = res;
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
     
    buildFormFromEntity(){
      this.$options.childInterface.buildFormFromEntity();
    },
    getFormData(dat) {
      this.entity = dat.entity;
      this.name = dat.name;
    },
    updateEntities(){
      if(this.xopapikey.length>0){
      loadEntities(this.platformbase, this.xopapikey).then((res) => {
      this.entitiesList = res;
    });
  }
    }
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
    if(this.xopapikey.length>0){
      loadEntities(this.platformbase, this.xopapikey).then((res) => {
        this.entitiesList = res;
      });
    }
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
