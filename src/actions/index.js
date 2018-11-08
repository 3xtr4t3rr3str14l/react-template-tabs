export const successMessage = (message) => {
  alert(message);
};

export const errorMessage = (message) => {
  alert(message);
};

export const setConfig = config => ({
  type: 'SET_CONFIG',
  payload: config,
});

export const sendEmail = formData => (dispatch, getState) => {
  const { config } = getState();
  const { adapter, service: { sendmail }, emailData } = config;

  adapter.post(sendmail, emailData)
    .then((response) => { successMessage('Your email has been sent!'); })
    .catch((error) => {
      errorMessage(`Error: ${error.response.data ? error.response.data.error : 'Unknown error'}`);
    });
};
