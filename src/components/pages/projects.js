import React from "react";
import Wrapper from "../Wrapper";
import { Row } from 'react-bootstrap'
import PortCard from '../PortCard/'

function projects(props){
    return(
        <Wrapper classname='wrapper'>
            <Row className="row" responsive='true'>
                {
                    props.projects.map(projects =>(
                        <PortCard
                            key={projects.id}
                            image={projects.image}
                            altTag={projects.title}
                            description={projects.description}
                            languages={projects.languages}
                        />
                    ))
                }
            </Row>
        </Wrapper>
    )
}
export default projects;