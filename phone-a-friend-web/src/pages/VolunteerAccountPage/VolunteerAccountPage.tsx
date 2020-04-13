import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../contexts/AppContext';
import useVolunteer from '../../hooks/useVolunteer';
import BaseAccountLayout from '../../layouts/BaseAccountLayout';
import { isEmptyObject } from '../../utils/object.utils';
import { VOLUNTEER_BACKGROUND_COLOR } from '../../Colors';
import { Volunteer } from '../../model/volunteer';
import { successToast, errorToast } from '../../utils/toast.utils';
import FormAvailability from '../RegisterFlow/FormAvailability';
import { updateVolunteer } from '../../api/volunteer';
import FormButton from '../../components/buttons/FormButton';

const tabs = ['Account', 'Availability'];

const VolunteerAccountPage = () => {
  const { state, dispatch } = useStateValue();
  const history = useHistory();

  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);
  const [editMode, setEditMode] = useState<boolean>(false);

  const { isFetching } = useVolunteer(
    () => ({}),
    () => history.replace('/register/volunteer')
  );

  const handleSubmit = (values: Partial<Volunteer>) => {
    updateVolunteer({
      id: state.userAuthId,
      ...values,
    })
      .then((volunteer) => {
        successToast('Volunteer updated!');
        dispatch({ type: 'VOLUNTEER_STORE_DETAILS', volunteer });
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
      {!isFetching && !isEmptyObject(state.currentVolunteer) && (
        <BaseAccountLayout
          title={`Welcome back, ${state.currentVolunteer.name.split(' ')[0]}`}
          tabs={tabs}
          backgroundColor={VOLUNTEER_BACKGROUND_COLOR}
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
                  localTimeAvailability: state.currentVolunteer.localTimeAvailability,
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

export default VolunteerAccountPage;
