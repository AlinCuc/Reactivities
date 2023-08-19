import { Grid, GridColumn } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import ActivityList from './ActivityList';
import ActivityDetails from '../../details/ActivityDetails';
import ActivityForm from '../../form/ActivityForm';

interface Props {
    activities : Activity[];
    selectedActivity :Activity | undefined;
    selectActivity : (id:string) => void;
    cancelSelectActivity: () => void
    editMode :boolean;
    openForm: (id:string) => void;
    closeForm: () => void;
    createOrEdit: (activity:Activity) =>void;
    deleteActivity:(id:string) =>void;
    submitting:boolean;
}

export default function ActivityDashboard({activities, selectActivity,selectedActivity,
    cancelSelectActivity, editMode, openForm, closeForm, submitting, createOrEdit, deleteActivity}:Props){
    return (
        <Grid>
            <GridColumn width='10'>
            <ActivityList 
            activities={ activities}
            selectActivity ={selectActivity}
            deleteActivity = {deleteActivity}
            submitting ={submitting}
            />
            </GridColumn>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                activity = {selectedActivity} 
                cancelSelectActivity = {cancelSelectActivity} 
                openForm ={openForm}
                />}
                {editMode &&
                <ActivityForm 
                closeForm = {closeForm} 
                activity = {selectedActivity} 
                createOrEdit={createOrEdit} 
                submitting ={submitting}
                />}
            </Grid.Column>
        </Grid>
    )
}