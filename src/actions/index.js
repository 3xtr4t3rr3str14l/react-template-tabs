const actions = {
  setVisibilityFilter(filter) {
    return {
      type: 'SET_VISIBILITY_FILTER',
      filter,
    };
  },
  setConfig(config) {
    return {
      type: 'SET_CONFIG',
      payload: config,
    };
  },
  sendMail(formData) {
    return (dispatch, getState) => {
      const { config } = getState();
      const { adapter, service: { sendmail }, data } = config;

      console.log(formData);

      data.template_params.pipeLength = formData.length;
      data.template_params.woodBowlColor = formData.color;
      data.template_params.raw = formData.raw ? 'Raw, ' : '';
      data.template_params.natural = formData.naturalstain ? 'Natural Stain, ' : '';
      data.template_params.clearCoat = formData.clearcoat ? 'Clear Coat' : '';
      data.template_params['g-recaptcha-response'] = formData.gRecaptchaResponse;

      adapter.post(sendmail, data)
        .then((response) => { console.log(response); alert('Your mail is sent!'); })
        .catch((error) => {
          alert(`Error: ${error.response.data ? error.response.data.message : 'Unknown error'}`);
        });
    };
  },
};

export default actions;
