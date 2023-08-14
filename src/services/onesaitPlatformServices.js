import axios from 'axios';

export async function loadEntities(platformbase, xopapikey) {
  let entities = [];
  const response = await axios.get(
    platformbase +
    "/controlpanel/api/ontologies/",
    {
      headers: {
        accept: "application/json",
        "X-OP-APIKey": xopapikey,
      },
    }
  )
  entities = response.data;
  return entities;
}

export async function loadFormsList(platformbase, xopapikey) {
  let entities = [];
  const response = await axios.get(
    platformbase +
    "/controlpanel/api/forms/",
    {
      headers: {
        accept: "application/json",
        "X-OP-APIKey": xopapikey,
      },
    }
  )
  entities = response.data;
  return entities;
}

export async function getSchema(platformbase, formid, xopapikey) {
  return axios.get(
    platformbase +
    "/controlpanel/api/forms/" +
    formid +
    "/schema",
    {
      headers: {
        accept: "application/json",
        "X-OP-APIKey": xopapikey,
      },
    }
  );
}

export async function getForm(platformbase, formid, xopapikey) {
  let url = platformbase + "/controlpanel/api/forms/" + formid;
  return axios.get(url, {
    headers: {
      accept: "application/json",
      "X-OP-APIKey": xopapikey,
    },
  });
}

export async function getData(platformbase, formid, dataoid, xopapikey) {
  return axios.get(
    platformbase +
    "/controlpanel/api/forms/" +
    formid +
    "/data/" +
    dataoid,
    {
      headers: {
        accept: "application/json",
        "X-OP-APIKey": xopapikey,
      },
    }
  );
}

export async function createData(platformbase, formid, submission, xopapikey) {
  submission.metadata.formId = formid
  delete submission.data.submit
  return axios.post(
    platformbase +
    "/controlpanel/api/forms/submit", submission,
    {
      headers: {
        accept: "application/json",
        "X-OP-APIKey": xopapikey,
      },
    }
  );
}
export async function updateData(platformbase, formid, dataoid, submission, xopapikey) {
  submission.metadata.formId = formid
  submission.metadata.dataId = dataoid
  delete submission.data.submit
  return axios.post(
    platformbase +
    "/controlpanel/api/forms/submit/update", submission,
    {
      headers: {
        accept: "application/json",
        "X-OP-APIKey": xopapikey,
      },
    }
  );
}

export async function createForm(platformbase, payload, xopapikey) {
  return axios.post(
    platformbase +
    "/controlpanel/api/forms/", payload,
    {
      headers: {
        accept: "application/json",
        "X-OP-APIKey": xopapikey,
      },
    }
  );
}
export async function updateForm(platformbase, formid, payload, xopapikey) {
  return axios.put(
    platformbase +
    "/controlpanel/api/forms/" + formid, payload,
    {
      headers: {
        accept: "application/json",
        "X-OP-APIKey": xopapikey,
      },
    }
  );
}

export async function generateFormFromEntity(platformbase, entity, xopapikey) {
  return axios.get(
    platformbase +
    "/controlpanel/api/forms/" +
    entity +
    "/generateFormFromEntity",
    {
      headers: {
        accept: "application/json",
        "X-OP-APIKey": xopapikey,
      },
    }
  );
}

