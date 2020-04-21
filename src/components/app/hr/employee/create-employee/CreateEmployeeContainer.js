import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CreateEmployeeView from './CreateEmployeeView';
import { RelayEnvironment } from '../../../../../framework/relay';
import { CreateEmployee } from '../../../../../framework/relay/mutations';

export class CreateEmployeeContainer extends Component {
  createEmployee = ({ email, employeeReference }) => {
    const { history, environment, createEmployee, user } = this.props;

    createEmployee(
      environment,
      {
        email,
        employeeReference,
        departmentIds: [],
      },
      user,
      { onSuccess: () => history.push('/hr/employee-management') },
    );
  };

  cancel = (values) => {
    const { history } = this.props;

    history.push('/hr/employee-management');
  };

  render = () => <CreateEmployeeView onSubmit={this.createEmployee} onCancelButtonClick={this.cancel} />;
}

CreateEmployeeContainer.propTypes = {};

const mapStateToProps = () => ({
  environment: RelayEnvironment,
  createEmployee: CreateEmployee,
});
const mapDispatchToProps = () => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateEmployeeContainer));
