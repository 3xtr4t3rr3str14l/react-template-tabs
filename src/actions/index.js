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
  sendProShopOrderEmail(formData) {
    return (dispatch, getState) => {
      const { config } = getState();
      const { adapter, service: { sendmail }, proShopOrderData } = config;

      proShopOrderData.template_params.details = formData.details;
      proShopOrderData.template_params['g-recaptcha-response'] = formData.gRecaptchaResponse;
      proShopOrderData.template_params.name = formData.name;
      proShopOrderData.template_params.email = formData.email;
      proShopOrderData.template_params.phoneNumber = formData.phoneNumber;

      adapter.post(sendmail, proShopOrderData)
        .then((response) => { alert('Your Pro Shop order is sent!'); })
        .catch((error) => {
          alert(`Error: ${error.response.data ? error.response.data.error : 'Unknown error'}`);
        });
    };
  },
  sendCustomOrderEmail(formData) {
    return (dispatch, getState) => {
      const { config } = getState();
      const { adapter, service: { sendmail }, customOrderData } = config;

      customOrderData.template_params.pipeLength = formData.length;
      customOrderData.template_params.woodBowlColor = formData.color;
      customOrderData.template_params.raw = formData.raw ? 'Raw, ' : '';
      customOrderData.template_params.natural = formData.naturalstain ? 'Natural Stain, ' : '';
      customOrderData.template_params.clearCoat = formData.clearcoat ? 'Clear Coat' : '';
      customOrderData.template_params['g-recaptcha-response'] = formData.gRecaptchaResponse;
      customOrderData.template_params.name = formData.name;
      customOrderData.template_params.email = formData.email;
      customOrderData.template_params.phoneNumber = formData.phoneNumber;

      adapter.post(sendmail, customOrderData)
        .then((response) => { alert('Your Custom order is sent!'); })
        .catch((error) => {
          alert(`Error: ${error.response.data ? error.response.data.error : 'Unknown error'}`);
        });
    };
  },
};

export default actions;
