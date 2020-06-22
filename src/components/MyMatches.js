import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchMatches } from "../actions/fetchMatches"
import {Card, Button, Container, Row, Col} from "react-bootstrap"



class MyMatches extends Component {

  componentDidMount() {
    this.props.fetchMatches()
  }


  render() {
      return (
            <Container>
                <Row>
                    {this.props.matches.map(user => {
                        return (
                            <Col xs={6} className="mb-10" key={`${user.id}`}>
                                <Card className="h-100 shadow-sm bg-white rounded" >
                                    <Card.Img variant="top" src={user.image} />
                                    <Card.Body className="flex-column d-flex" >
                                    <div className="d-flex mb-2 justify-content-between">
                                        <Card.Title className="mb=0 font-weight-bold">{user.username}</Card.Title>
                                    </div>
                                    <Card.Text className="text-secondary"><strong>Age:</strong> {user.age}</Card.Text>
                                    <Card.Text className="text-secondary"><strong>Orientation:</strong> {user.orientation}</Card.Text>
                                    <label><strong className="bio">Bio</strong></label>
                                    <Card.Text className="text-secondary">Orientation: {user.bio}</Card.Text>
                                    <Button
                                        href={`/match-profile/${user.id}`}
                                        className="mt-auto font-weight-bold mb-4"
                                        variant="success"
                                        block>
                                        View Profile
                                    </Button>
                                </Card.Body>
                                    </Card>
                                    </Col>
                        )
                        })
                    }
                </Row>
        </Container>
    )
  }
}

const mapStateToProps = ({ matchesReducer }) => {
    return {
        matches: matchesReducer.matches
    }
}

export default connect(mapStateToProps, {fetchMatches})(MyMatches)