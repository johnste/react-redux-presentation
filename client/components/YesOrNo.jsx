import React, { PropTypes } from 'react';

function YesOrNo({ getNewData, data }) {
	const { data: response, isFetching, isError } = data;

  return (
  	<div>
      <button onClick={ getNewData }>Get a new response!</button>
      <br/>
  		<h2>Yes or No</h2>
      { response && <img src={response.image} width="350" /> }
      { isFetching && <strong>Loading</strong> }
      { isError && <strong>Something went wrong</strong> }
  	</div>
  );

};

YesOrNo.propTypes = {
  getNewData: PropTypes.func.isRequired,
  data: PropTypes.shape({
  	fact: PropTypes.string,
  	isFetching: PropTypes.bool.isRequired,
  	isError: PropTypes.bool.isRequired
  }).isRequired
};

export default YesOrNo;
