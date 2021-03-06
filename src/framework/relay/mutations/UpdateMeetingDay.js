import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import cuid from 'cuid';

const mutation = graphql`
  mutation UpdateMeetingDayMutation($input: UpdateMeetingDayInput!) {
    updateMeetingDay(input: $input) {
      clientMutationId
    }
  }
`;

const getOptimisticResponse = (id, { name }, user) => {
  if (!user) {
    return {};
  }

  return {
    updateMeetingDay: {
      user: {
        id: user.id,
        meetingDay: {
          node: {
            id,
            name,
          },
        },
      },
    },
  };
};

const commit = (environment, { id, name, manufacturerId }, user, { onSuccess, onError } = {}) => {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        id,
        name,
        manufacturerId,
        clientMutationId: cuid(),
      },
    },
    optimisticResponse: getOptimisticResponse(id, { name }, user),
    onCompleted: (response, errors) => {
      if (errors && errors.length > 0) {
        return;
      }

      if (!onSuccess) {
        return;
      }

      onSuccess(response.updateMeetingDay.meetingDay ? response.updateMeetingDay.meetingDay.node : null);
    },
    onError: ({ message: errorMessage }) => {
      if (!onError) {
        return;
      }

      onError(errorMessage);
    },
  });
};

export default commit;
