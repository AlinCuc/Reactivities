import react from 'react'
import Calendar from 'react-calendar'
import { Header, Menu } from 'semantic-ui-react'

export default function ActivityFilters(){
    return(
        <>
        <Menu vertical size= 'large' style={{with:'100%', marginTop:25}}>
            <Header icon ='filter' attached  color ='teal' content='Filters'></Header>
            <Menu.Item content = 'All Activites'/>
            <Menu.Item content = "I' going"/>
            <Menu.Item content = "I'm hosting"/>
        </Menu>
        <Header/>
        <Calendar />
        </>
    )
}