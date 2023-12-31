import {Button, Card, Grid, Image} from "semantic-ui-react";
import LoadingComponent from "../../app/layout/LoadingComponents";
import { useStore } from "../../app/stores/store";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSideBar from "./ActivityDetailedSideBar";


export default observer(function ActivityDetails() {
    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id:string}>();

    useEffect(()=>{
        if(id) loadActivity(id);
    },[id,loadActivity]);

    if (loadingInitial || !activity) return <LoadingComponent />;

    return (
      <Grid>
        <Grid.Column width={10}>
            <ActivityDetailedHeader activity={activity}/>
            <ActivityDetailedInfo activity={ activity} />
            <ActivityDetailedChat/>
        </Grid.Column>
        <Grid.Column width={6}>
            <ActivityDetailedSideBar/>
        </Grid.Column>
      </Grid>
    )
 })