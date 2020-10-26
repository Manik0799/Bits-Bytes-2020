import React from "react";
import { Card, CardTitle, CardBody, CardFooter, Button } from "reactstrap";

function TeamMemberCard({teamMember}){


    return(
        <Card className="card-profile card-plain">
                  <div className="card-avatar">
                        <img
                        alt="team-member-avatar"
                        src={require("../assets/teamImages/Ekas.jpg")}
                        />
                  </div>
                  <CardBody>
                        <div className="author">
                        <CardTitle tag="h4">{teamMember.name}</CardTitle>
                        <h6 className="card-category">{teamMember.role}</h6>
                        </div>
                  </CardBody>
                  <CardFooter className="text-center">
                        <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href={teamMember.instagram}
                        >
                        <i className="fa fa-instagram" />
                        </Button>
                       
                  </CardFooter>
        </Card>
    )
}

export default TeamMemberCard