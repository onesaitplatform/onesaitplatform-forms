 
<template>
  <div id="app">
    <div :id="divIdentifier"></div>
  </div>
</template>


 
<script>
import {
  createData,
  createForm,
  getData,
  getForm,
  updateData,
  updateForm,
  generateFormFromEntity,
} from "../services/onesaitPlatformServices";
import { getSchema } from "@/services/onesaitPlatformServices";

export default {
  name: "ShowForm",
  props: {
    platformbase: String,
    appbase: String,
    xopapikey: String,
    formid: String,
    dataoid: String,
    editForm: Boolean,
    name: String,
    entity: String,
  },
  data: function () {
    return {
      divIdentifier: Date.now(),
      build: null,
      notloaded: true,
      cname: "",
      centity: "",
    };
  },
  methods: {
    getEntity: function () {
      return this.centity;
    },
    getName: function () {
      return this.cname;
    },
    createForm: function () {
      console.log("create form");
      let payload = {
        jsonSchema: JSON.stringify(this.build.schema),
        name: this.getName(),
        entity: this.getEntity(),
      };
      var that = this;
      createForm(that.platformbase, payload, that.xopapikey).catch(function (
        error
      ) {
        console.log(error);
      });
    },
    updateForm: function () {
      console.log("update form");
      let payload = {
        jsonSchema: JSON.stringify(this.build.schema),
        name: this.getName(),
        entity: this.getEntity(),
      };
      var that = this;
      updateForm(that.platformbase, that.formid, payload, that.xopapikey).catch(
        function (error) {
          console.log(error);
        }
      );
    },
    buildFormFromEntity: function () {
      console.log("build Form From Entity");

      var that = this;
      that.centity = that.entity
      generateFormFromEntity(that.platformbase, that.centity, that.xopapikey)
        .then((response) => {
          window.Formio.builder(
            document.getElementById(that.divIdentifier),
            response.data,
            {}
          ).then(function (build) {
            that.build = build;
            that.emitDataForm();
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    emitInterface() {
      this.$emit("interface", {
        createForm: () => this.createForm(),
        updateForm: () => this.updateForm(),
        buildFormFromEntity: () => this.buildFormFromEntity(),
      });
    },
    emitDataForm() {
      //this.$emit("dataForm", {entity:this.centity,name:this.cname})
      this.$emit("dataForm", {
        entity: this.getEntity(),
        name: this.getName(),
      });
    },
  },
  mounted: function () {
    var that = this;

    that.cname = that.name;
    that.centity = that.entity;
    //store xopapikey
    window.xopapikey = that.xopapikey;
    //store host for platform base
    window.platformbase = that.platformbase;
    //store host for app base
    window.appbase = that.appbase;
    window.formsBaseURLCreate = that.platformbase + "/controlpanel/api/forms/";
    //edit or create a form
    if (that.editForm) {
      //EDIT FORM

      if (that.formid != null && that.formid.length > 0) {
        //edit existing form
        getForm(that.platformbase, that.formid, that.xopapikey)
          .then(function (response) {
            that.centity = response.data.entity;
            that.cname = response.data.name;
            window.Formio.builder(
              document.getElementById(that.divIdentifier),
              JSON.parse(response.data.jsonSchema),
              {}
            ).then(function (build) {
              that.build = build;
              that.emitDataForm();
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        //create new form
        window.Formio.builder(
          document.getElementById(that.divIdentifier),
          {},
          {}
        ).then(function (build) {
          that.build = build;
        });
      }
    } else {
      //SHOW FORM
      if (that.formid != null && that.formid.length > 0) {
        if (that.dataoid != null && that.dataoid.length > 0) {
          //show existing form with data

          getData(
            that.platformbase,
            that.formid,
            that.dataoid,
            that.xopapikey
          ).then(function (responsedata) {
            var resp = responsedata.data;
            window.Formio.createForm(
              document.getElementById(that.divIdentifier),
              resp.schema
            ).then(function (build) {
              that.build = build;
              that.build.submission = {
                data: resp.data[0],
              };

              that.build.on("submit", function (submission) {
                updateData(
                  that.platformbase,
                  that.formid,
                  that.dataoid,
                  submission,
                  that.xopapikey
                )
                  .then(function () {
                    that.build.emit("submitDone", submission);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                document
                  .querySelectorAll(".fa-refresh.fa-spin")
                  .forEach((el) => el.remove());
              });
            });
          });
        } else {
          //show existing form without data

          getSchema(that.platformbase, that.formid, that.xopapikey)
            .then(function (response) {
              window.Formio.createForm(
                document.getElementById(that.divIdentifier),
                response.data
              ).then(function (build) {
                that.build = build;

                that.build.on("submit", function (submission) {
                  createData(
                    that.platformbase,
                    that.formid,
                    submission,
                    that.xopapikey
                  )
                    .then(function () {
                      that.build.emit("submitDone", submission);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                  document
                    .querySelectorAll(".fa-refresh.fa-spin")
                    .forEach((el) => el.remove());
                });
              });
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    }
    that.emitInterface();
  },
};
</script>