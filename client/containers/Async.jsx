import React from 'react';
import { connect } from 'react-redux';

import { getNewData } from '../actions/asyncActions';
import YesOrNo from '../components/YesOrNo.jsx'

function mapStateToProps(state) {
	return {
		data: state.async
	}
}

const mapDispatchToProps = {
	getNewData
};

function Async({data, getNewData}) {
  return (
    <YesOrNo
      data={data}
      getNewData={getNewData}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Async);

