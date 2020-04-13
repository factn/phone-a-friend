import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../contexts/AppContext';
import BaseAccountLayout from '../../layouts/BaseAccountLayout';
import { isEmptyObject } from '../../utils/object.utils';
import { USER_BACKGROUND_COLOR } from '../../Colors';
import useUser from '../../hooks/useUser';
import FormAvailability from '../RegisterFlow/FormAvailability';
import { User } from '../../model/user';
import { updateUser } from '../../api/user';
import { successToast, errorToast } from '../../utils/toast.utils';
import FormButton from '../../components/buttons/FormButton';

const tabs = ['Account', 'Availability'];

const UserAccountPage = () => {
  const { state, dispatch } = useStateValue();
  const history = useHistory();

  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);
  const [editMode, setEditMode] = useState<boolean>(false);

  const { isFetching } = useUser(
    () => ({}),
    () => history.replace('/register/user')
  );

  const handleSubmit = (values: Partial<User>) => {
    updateUser({
      id: state.userAuthId,
      ...values,
    })
      .then((user) => {
        successToast('User updated!');
        dispatch({ type: 'USER_STORE_DETAILS', user });
        setSelectedTab('Account');
      })
      .catch(() => errorToast('Error saving availability, try again later'));
  };

  const handleTabSelect = (tab: string) => {
    setEditMode(false);
    setSelectedTab(tab);
  };

  return (
    <>
      {!isFetching && !isEmptyObject(state.currentUser) && (
        <BaseAccountLayout
          title={`Welcome back, ${state.currentUser.name.split(' ')[0]}`}
          tabs={tabs}
          backgroundColor={USER_BACKGROUND_COLOR}
          onTabClick={handleTabSelect}
          selectedTab={selectedTab}
        >
          {selectedTab === 'Account' && <div>Account</div>}
          {selectedTab === 'Availability' && (
            <>
              <h2>Availability</h2>

              <FormButton title="Edit availability" onClick={() => setEditMode(!editMode)} />

              <FormAvailability
                options={{
                  isDisabled: !editMode,
                  submitMessage: 'Save changes',
                }}
                initialValues={{
                  localTimeAvailability: state.currentUser.localTimeAvailability,
                }}
                onSubmit={handleSubmit}
              />
            </>
          )}
        </BaseAccountLayout>
      )}
    </>
  );
};

export default UserAccountPage;
