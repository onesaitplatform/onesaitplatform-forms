 
<template>
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
          How easy it is to create form templates from the app, for this you
          just have to assign a name and the entity where the records will be
          stored, and drag the fields on the template canvas until you get the
          desired result.
        </p>

        <p align="left">
          This demo aims to show how to integrate the use of
          <b>Onesaitplatform forms</b> in a vue 2 app.
        </p>
        <p align="left">
          You only need to know the user's X-OP-APIKey to be able to access
          their forms. The data is obtained by calls to the
          <b>Onesaitplatform REST services api</b>. But the user does not need
          to know this since he only has to indicate a <b>datasource</b> to
          obtain the data and display it in a select component for example
        </p>
      </el-row>

      <el-tabs v-model="activeInfo" style="padding: 30px 60px 60px 60px">
        <el-tab-pane label="Forms" name="0">
          <el-row style="padding: 60px">
            <el-col :span="6">
              <p align="left">
                In this demonstrator you can see a
                <b>list with the form templates</b>. From this list you can edit
                a form or use it for the rest of the possible options
              </p>
            </el-col>
            <el-col :span="18">
              <img
                align="right"
                alt="OneSait"
                src="../assets/formlist.png"
                style="width: 60vw"
            /></el-col>
          </el-row>
          <el-row style="padding: 60px">
            <el-col :span="18">
              <img
                align="left"
                alt="OneSait"
                src="../assets/completeTheApplicationForm.png"
                style="width: 60vw"
              />
            </el-col>
            <el-col :span="6">
              <p align="left">
                The next option is from a form template to fill this and send
                the data so that they can be stored as a new record in the
                entity selected for the form
              </p>
            </el-col>
          </el-row>

          <el-row style="padding: 60px">
            <el-col :span="6">
              <p align="left">
                Knowing the form and record identifier for the given entity,
                previously inserted data can be modified. Also, as can be seen
                depending on the type of field, in this case the address field
                that is auto-completed with the information from open
                streetmaps. Validations can also be established as in the email
                field.
              </p>
            </el-col>
            <el-col :span="18">
              <img
                alt="OneSait"
                src="../assets/editFilledForm.png"
                style="width: 60vw"
              />
            </el-col>
          </el-row>

          <el-row style="padding: 60px">
            <el-col :span="18">
              <img
                alt="OneSait"
                src="../assets/createForm.png"
                style="width: 60vw"
              />
            </el-col>
            <el-col :span="6">
              <p align="left">
                From the app you can create new form templates, for this you
                just have to assign a name and the entity where the records will
                be stored, and dragging the fields on the template canvas we
                will design the form.
                In addition, when selecting an entity and pressing the build form from entity button
                , a form is generated from the schema of the given entity
              </p>
            </el-col>
          </el-row>

          <el-row style="padding: 60px">
            <el-col :span="6">
              <p align="left">
                Once the form template is created, it can be easily modified
                using drag and drop
              </p>
            </el-col>
            <el-col :span="18">
              <img
                alt="OneSait"
                src="../assets/updateForm.png"
                style="width: 60vw"
              />
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="Components" name="1">
          <el-row style="padding: 60px">
            <el-col :span="6">
              <p align="left">
                The <b> button components</b> have a property that allows, once
                the completed form has been sent correctly,
                <b> to redirect to another url</b>. Said
                <b> property is Redirect</b>, the way to load it is either a
                complete url https://onesaitplatform.com/path... is entered, or
                only the path can be entered and it will take the host defined
                in the app in the <b> appbase variable</b>.
              </p>
            </el-col>
            <el-col :span="18">
              <img
                alt="OneSait"
                src="../assets/submit.png"
                style="width: 60vw"
              />
            </el-col>
          </el-row>

          <el-row style="padding: 60px">
            <el-col :span="18">
              <img
                alt="OneSait"
                src="../assets/selectcomponent.png"
                style="width: 60vw"
              />
            </el-col>
            <el-col :span="6">
              <p align="left">
                The <b>select components</b> can load their elements from the
                <b>Onesaitplatform datasources</b>. For this it is only
                necessary to add the select component to the canvas. Go to the
                <b>Data tab</b>, select the <b>Datasource</b> option in the
                datasource type. Finally, the fields value, description and type
                in which the value will be stored will be indicated, in this
                case String
              </p>
            </el-col>
          </el-row>

          <el-row style="padding: 60px">
            <el-col :span="6">
              <p align="left">
                For a more expert user, a predefined function is available with
                which you can start from a datasource and perform the operations
                project, filters, group, sort, offset, limit, param:<br /><br />
                This is a simple example<br />
                from('catalog').exec().then(function( msg ) {<br />
                values = msg.map((x) => x.catalog) ;<br />
                instance.setItems(values);<br />
                });<br />
                <a
                  href="https://onesaitplatform.refined.site/space/DOCT/2220791857/Multidatasources-datadiscovery+queries+in+Gadget+Template"
                  >for more information on the structure of the function see the
                  documentation</a
                >
              </p>
            </el-col>
            <el-col :span="18">
              <img
                alt="OneSait"
                src="../assets/selectcustom.png"
                style="width: 60vw"
              />
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </el-container>
</template>


 
<script>
export default {
  name: "InfoApp",
  data() {
    return {     
      activeInfo: "0"
    }
  }
};
</script>