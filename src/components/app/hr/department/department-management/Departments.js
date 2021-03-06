import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';

import { RelayEnvironment } from '../../../../../framework/relay';
import { LoadingContainer, GenericErrorContainer } from '../../../../common';
import DepartmentManagementContainer from './DepartmentManagementContainer';

export default () => {
  const renderRelayComponent = ({ props, error }) => {
    if (props && props.user) {
      return <DepartmentManagementContainer user={props.user} />;
    } else if (error) {
      return <GenericErrorContainer message={error.message} />;
    }

    return <LoadingContainer />;
  };

  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={graphql`
        query DepartmentsQuery {
          user {
            ...DepartmentManagementContainer_user
          }
        }
      `}
      variables={{}}
      render={renderRelayComponent}
    />
  );
};
