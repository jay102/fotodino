export const errorObject = async (err, dispatch, failure) => {
  if (err.response) {
    const errorMsg = await err.response.data;
    console.log(errorMsg);
    if (failure) {
      dispatch(failure(errorMsg.error));
    }
  } else if (err.request) {
    console.log(err.request);
  } else {
    console.log(err);
    if (failure) {
      dispatch(failure(err.message));
    }
  }
};
